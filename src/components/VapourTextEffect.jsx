import React, {
  createElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const Tag = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  P: "p",
};

export default function VapourTextEffect({
  texts = ["React", "Web"],
  font = {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "56px",
    fontWeight: 700,
  },
  color = "rgb(255, 255, 255)",
  spread = 5,
  density = 5,
  animation = {
    vaporizeDuration: 2,
    fadeInDuration: 1,
    waitDuration: 0.5,
  },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.P,
}) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const isInView = useIsInView(wrapperRef);
  const prefersReducedMotion = usePrefersReducedMotion();
  const lastFontRef = useRef(null);
  const particlesRef = useRef([]);
  const vaporizeProgressRef = useRef(0);
  const fadeOpacityRef = useRef(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationState, setAnimationState] = useState("static");
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });
  const transformedDensity = transformValue(density, [0, 10], [0.3, 1], true);

  const textList = useMemo(() => {
    const validTexts = texts.filter(Boolean);
    return validTexts.length ? validTexts : ["ConCodigoArt"];
  }, [texts]);

  const globalDpr = useMemo(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(window.devicePixelRatio || 1, 2) * 1.25;
  }, []);

  const wrapperStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      position: "relative",
      pointerEvents: "none",
    }),
    []
  );

  const canvasStyle = useMemo(
    () => ({
      display: "block",
      width: "100%",
      height: "100%",
      minWidth: "30px",
      minHeight: "20px",
      pointerEvents: "none",
    }),
    []
  );

  const animationDurations = useMemo(
    () => ({
      VAPORIZE_DURATION: (animation.vaporizeDuration ?? 2) * 1000,
      FADE_IN_DURATION: (animation.fadeInDuration ?? 1) * 1000,
      WAIT_DURATION: (animation.waitDuration ?? 0.5) * 1000,
    }),
    [animation.vaporizeDuration, animation.fadeInDuration, animation.waitDuration]
  );

  const fontConfig = useMemo(() => {
    const fontSize = parseFontSize(font.fontSize, 56);
    const vaporizeSpread = calculateVaporizeSpread(fontSize);
    const motionScale = globalDpr / 1.25;

    return {
      fontSize,
      fontFamily: font.fontFamily || "Inter, system-ui, sans-serif",
      fontWeight: font.fontWeight ?? 700,
      multipliedVaporizeSpread: vaporizeSpread * spread * motionScale,
    };
  }, [font.fontFamily, font.fontSize, font.fontWeight, globalDpr, spread]);

  const memoizedUpdateParticles = useCallback(
    (particles, vaporizeX, deltaTime) =>
      updateParticles(
        particles,
        vaporizeX,
        deltaTime,
        fontConfig.multipliedVaporizeSpread,
        animationDurations.VAPORIZE_DURATION,
        direction,
        transformedDensity
      ),
    [
      animationDurations.VAPORIZE_DURATION,
      direction,
      fontConfig.multipliedVaporizeSpread,
      transformedDensity,
    ]
  );

  const memoizedRenderParticles = useCallback(
    (ctx, particles) => {
      renderParticles(ctx, particles, globalDpr);
    },
    [globalDpr]
  );

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setAnimationState("static");
      return undefined;
    }

    const startAnimationTimeout = window.setTimeout(() => {
      setAnimationState((state) => (state === "static" ? "vaporizing" : state));
    }, 80);

    return () => window.clearTimeout(startAnimationTimeout);
  }, [isInView, prefersReducedMotion]);

  useEffect(() => {
    if (animationState !== "waiting" || !isInView || prefersReducedMotion) return undefined;

    const timeoutId = window.setTimeout(() => {
      vaporizeProgressRef.current = 0;
      resetParticles(particlesRef.current);
      setAnimationState("vaporizing");
    }, animationDurations.WAIT_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, [animationDurations.WAIT_DURATION, animationState, isInView, prefersReducedMotion]);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return undefined;
    if (typeof window === "undefined" || typeof window.requestAnimationFrame === "undefined") {
      return undefined;
    }

    let lastTime = performance.now();
    let frameId;

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx || !particlesRef.current.length) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (animationState) {
        case "vaporizing": {
          vaporizeProgressRef.current +=
            (deltaTime * 100) / (animationDurations.VAPORIZE_DURATION / 1000);

          const textBoundaries = canvas.textBoundaries;
          if (!textBoundaries) break;

          const progress = Math.min(100, vaporizeProgressRef.current);
          const vaporizeX =
            direction === "left-to-right"
              ? textBoundaries.left + (textBoundaries.width * progress) / 100
              : textBoundaries.right - (textBoundaries.width * progress) / 100;

          const allVaporized = memoizedUpdateParticles(
            particlesRef.current,
            vaporizeX,
            deltaTime
          );
          memoizedRenderParticles(ctx, particlesRef.current);

          if (vaporizeProgressRef.current >= 100 && allVaporized) {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
            setAnimationState("fadingIn");
            fadeOpacityRef.current = 0;
          }
          break;
        }

        case "fadingIn": {
          fadeOpacityRef.current +=
            (deltaTime * 1000) / animationDurations.FADE_IN_DURATION;

          ctx.save();
          ctx.scale(globalDpr, globalDpr);
          particlesRef.current.forEach((particle) => {
            particle.x = particle.originalX;
            particle.y = particle.originalY;
            const opacity = Math.min(fadeOpacityRef.current, 1) * particle.originalAlpha;
            const particleColor = particle.color.replace(/[\d.]+\)$/, `${opacity})`);
            ctx.fillStyle = particleColor;
            ctx.fillRect(particle.x / globalDpr, particle.y / globalDpr, 1, 1);
          });
          ctx.restore();

          if (fadeOpacityRef.current >= 1) {
            setAnimationState("waiting");
          }
          break;
        }

        case "waiting":
        case "static":
        default: {
          memoizedRenderParticles(ctx, particlesRef.current);
          break;
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [
    animationDurations.FADE_IN_DURATION,
    animationDurations.VAPORIZE_DURATION,
    animationState,
    direction,
    globalDpr,
    isInView,
    memoizedRenderParticles,
    memoizedUpdateParticles,
    prefersReducedMotion,
    textList.length,
  ]);

  useEffect(() => {
    renderCanvas({
      framerProps: {
        texts: textList,
        font,
        color,
        alignment,
      },
      canvasRef,
      wrapperSize,
      particlesRef,
      globalDpr,
      currentTextIndex,
      transformedDensity,
    });

    const currentFont = font.fontFamily || "Inter, system-ui, sans-serif";
    return handleFontChange({
      currentFont,
      lastFontRef,
      canvasRef,
      wrapperSize,
      particlesRef,
      globalDpr,
      currentTextIndex,
      transformedDensity,
      framerProps: {
        texts: textList,
        font,
        color,
        alignment,
      },
    });
  }, [
    alignment,
    color,
    currentTextIndex,
    font,
    globalDpr,
    textList,
    transformedDensity,
    wrapperSize,
  ]);

  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return undefined;

    const updateSize = () => {
      setWrapperSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    updateSize();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const { width, height } = entry.contentRect;
      setWrapperSize({ width, height });
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} style={wrapperStyle}>
      <canvas ref={canvasRef} style={canvasStyle} />
      <SeoElement tag={tag} texts={textList} />
    </div>
  );
}

const SeoElement = memo(({ tag = Tag.P, texts }) => {
  const style = useMemo(
    () => ({
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      userSelect: "none",
      pointerEvents: "none",
    }),
    []
  );

  const safeTag = Object.values(Tag).includes(tag) ? tag : "p";
  return createElement(safeTag, { style }, texts?.join(" ") ?? "");
});

function handleFontChange({
  currentFont,
  lastFontRef,
  canvasRef,
  wrapperSize,
  particlesRef,
  globalDpr,
  currentTextIndex,
  transformedDensity,
  framerProps,
}) {
  if (currentFont === lastFontRef.current) return undefined;

  lastFontRef.current = currentFont;

  const timeoutId = window.setTimeout(() => {
    cleanup({ canvasRef, particlesRef });
    renderCanvas({
      framerProps,
      canvasRef,
      wrapperSize,
      particlesRef,
      globalDpr,
      currentTextIndex,
      transformedDensity,
    });
  }, 600);

  return () => {
    window.clearTimeout(timeoutId);
    cleanup({ canvasRef, particlesRef });
  };
}

function cleanup({ canvasRef, particlesRef }) {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  if (canvas && ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  particlesRef.current = [];
}

function renderCanvas({
  framerProps,
  canvasRef,
  wrapperSize,
  particlesRef,
  globalDpr,
  currentTextIndex,
  transformedDensity,
}) {
  const canvas = canvasRef.current;
  if (!canvas || !wrapperSize.width || !wrapperSize.height) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { width, height } = wrapperSize;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = Math.floor(width * globalDpr);
  canvas.height = Math.floor(height * globalDpr);

  const baseFontSize = parseFontSize(framerProps.font?.fontSize, 56);
  const fontWeight = framerProps.font?.fontWeight ?? 700;
  const fontFamily = framerProps.font?.fontFamily ?? "Inter, system-ui, sans-serif";
  const currentText = framerProps.texts[currentTextIndex] || "ConCodigoArt";
  const color = parseColor(framerProps.color ?? "rgb(255, 255, 255)");
  const alignment = framerProps.alignment || "center";

  let drawFontSize = baseFontSize;
  ctx.font = buildCanvasFont(fontWeight, drawFontSize * globalDpr, fontFamily);

  const measuredWidth = ctx.measureText(currentText).width;
  const maxTextWidth = canvas.width * 0.94;
  if (measuredWidth > maxTextWidth && measuredWidth > 0) {
    drawFontSize = Math.max(15, drawFontSize * (maxTextWidth / measuredWidth));
  }

  const canvasFont = buildCanvasFont(fontWeight, drawFontSize * globalDpr, fontFamily);
  const textY = canvas.height / 2;
  let textX = canvas.width / 2;

  if (alignment === "left") textX = canvas.width * 0.03;
  if (alignment === "right") textX = canvas.width * 0.97;

  const { particles, textBoundaries } = createParticles(
    ctx,
    canvas,
    currentText,
    textX,
    textY,
    canvasFont,
    color,
    alignment,
    transformedDensity
  );

  particlesRef.current = particles;
  canvas.textBoundaries = textBoundaries;
  renderParticles(ctx, particles, globalDpr);
}

function createParticles(
  ctx,
  canvas,
  text,
  textX,
  textY,
  font,
  color,
  alignment,
  density
) {
  const particles = [];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = alignment;
  ctx.textBaseline = "middle";
  ctx.imageSmoothingQuality = "high";
  ctx.imageSmoothingEnabled = true;

  if ("fontKerning" in ctx) {
    ctx.fontKerning = "normal";
  }

  if ("textRendering" in ctx) {
    ctx.textRendering = "geometricPrecision";
  }

  const metrics = ctx.measureText(text);
  const textWidth = metrics.width;
  let textLeft = textX;

  if (alignment === "center") textLeft = textX - textWidth / 2;
  if (alignment === "right") textLeft = textX - textWidth;

  const textBoundaries = {
    left: textLeft,
    right: textLeft + textWidth,
    width: textWidth,
  };

  ctx.fillText(text, textX, textY);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const cssWidth = parseInt(canvas.style.width, 10) || canvas.width;
  const currentDpr = canvas.width / cssWidth || 1;
  const baseSampleRate = Math.max(1, Math.round(currentDpr / 2.5));
  const densitySampleRate = Math.max(1, Math.round(baseSampleRate + (1 - density) * 2));

  for (let y = 0; y < canvas.height; y += densitySampleRate) {
    for (let x = 0; x < canvas.width; x += densitySampleRate) {
      const index = (y * canvas.width + x) * 4;
      const alpha = data[index + 3];

      if (alpha > 0) {
        const originalAlpha = (alpha / 255) * (densitySampleRate / currentDpr);
        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          color: `rgba(${data[index]}, ${data[index + 1]}, ${data[index + 2]}, ${originalAlpha})`,
          opacity: originalAlpha,
          originalAlpha,
          velocityX: 0,
          velocityY: 0,
          angle: 0,
          speed: 0,
        });
      }
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  return { particles, textBoundaries };
}

function updateParticles(
  particles,
  vaporizeX,
  deltaTime,
  multipliedVaporizeSpread,
  vaporizeDuration,
  direction,
  density
) {
  let allParticlesVaporized = true;

  particles.forEach((particle) => {
    const shouldVaporize =
      direction === "left-to-right"
        ? particle.originalX <= vaporizeX
        : particle.originalX >= vaporizeX;

    if (!shouldVaporize) {
      allParticlesVaporized = false;
      return;
    }

    if (particle.speed === 0) {
      particle.angle = Math.random() * Math.PI * 2;
      particle.speed = (Math.random() * 1 + 0.5) * multipliedVaporizeSpread;
      particle.velocityX = Math.cos(particle.angle) * particle.speed;
      particle.velocityY = Math.sin(particle.angle) * particle.speed;
      particle.shouldFadeQuickly = Math.random() > density;
    }

    if (particle.shouldFadeQuickly) {
      particle.opacity = Math.max(0, particle.opacity - deltaTime);
    } else {
      const dx = particle.originalX - particle.x;
      const dy = particle.originalY - particle.y;
      const distanceFromOrigin = Math.sqrt(dx * dx + dy * dy);
      const dampingFactor = Math.max(
        0.95,
        1 - distanceFromOrigin / (100 * multipliedVaporizeSpread)
      );
      const randomSpread = multipliedVaporizeSpread * 3;
      const spreadX = (Math.random() - 0.5) * randomSpread;
      const spreadY = (Math.random() - 0.5) * randomSpread;

      particle.velocityX = (particle.velocityX + spreadX + dx * 0.002) * dampingFactor;
      particle.velocityY = (particle.velocityY + spreadY + dy * 0.002) * dampingFactor;

      const maxVelocity = multipliedVaporizeSpread * 2;
      const currentVelocity = Math.sqrt(
        particle.velocityX * particle.velocityX + particle.velocityY * particle.velocityY
      );

      if (currentVelocity > maxVelocity) {
        const scale = maxVelocity / currentVelocity;
        particle.velocityX *= scale;
        particle.velocityY *= scale;
      }

      particle.x += particle.velocityX * deltaTime * 20;
      particle.y += particle.velocityY * deltaTime * 10;

      const baseFadeRate = 0.25;
      const durationBasedFadeRate = baseFadeRate * (2000 / vaporizeDuration);
      particle.opacity = Math.max(0, particle.opacity - deltaTime * durationBasedFadeRate);
    }

    if (particle.opacity > 0.01) {
      allParticlesVaporized = false;
    }
  });

  return allParticlesVaporized;
}

function renderParticles(ctx, particles, globalDpr) {
  ctx.save();
  ctx.scale(globalDpr, globalDpr);

  particles.forEach((particle) => {
    if (particle.opacity > 0) {
      const particleColor = particle.color.replace(/[\d.]+\)$/, `${particle.opacity})`);
      ctx.fillStyle = particleColor;
      ctx.fillRect(particle.x / globalDpr, particle.y / globalDpr, 1, 1);
    }
  });

  ctx.restore();
}

function resetParticles(particles) {
  particles.forEach((particle) => {
    particle.x = particle.originalX;
    particle.y = particle.originalY;
    particle.opacity = particle.originalAlpha;
    particle.speed = 0;
    particle.velocityX = 0;
    particle.velocityY = 0;
  });
}

function calculateVaporizeSpread(fontSize) {
  const size = typeof fontSize === "string" ? parseInt(fontSize, 10) : fontSize;
  const points = [
    { size: 20, spread: 0.2 },
    { size: 50, spread: 0.5 },
    { size: 100, spread: 1.5 },
  ];

  if (size <= points[0].size) return points[0].spread;
  if (size >= points[points.length - 1].size) return points[points.length - 1].spread;

  let i = 0;
  while (i < points.length - 1 && points[i + 1].size < size) i += 1;

  const p1 = points[i];
  const p2 = points[i + 1];

  return p1.spread + ((size - p1.size) * (p2.spread - p1.spread)) / (p2.size - p1.size);
}

function parseColor(color) {
  const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  const rgbaMatch = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);

  if (rgbaMatch) {
    const [, r, g, b, a] = rgbaMatch;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  if (rgbMatch) {
    const [, r, g, b] = rgbMatch;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }

  return "rgba(255, 255, 255, 1)";
}

function transformValue(input, inputRange, outputRange, clamp = false) {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  const progress = (input - inputMin) / (inputMax - inputMin);
  let result = outputMin + progress * (outputMax - outputMin);

  if (clamp) {
    if (outputMax > outputMin) {
      result = Math.min(Math.max(result, outputMin), outputMax);
    } else {
      result = Math.min(Math.max(result, outputMax), outputMin);
    }
  }

  return result;
}

function parseFontSize(fontSize, fallback) {
  if (typeof fontSize === "number") return fontSize;

  const parsed = parseFloat(String(fontSize || "").replace("px", ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function buildCanvasFont(weight, size, family) {
  return `${weight} ${size}px ${family}`;
}

function useIsInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "80px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener?.("change", handleChange);

    return () => mediaQuery.removeEventListener?.("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

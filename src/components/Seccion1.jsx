import VapourTextEffect, { Tag } from "./VapourTextEffect";

const vapourRows = [
  {
    texts: ["LANDING PAGE", "WEB", "LOGOS"],
    className:
      "absolute left-[4%] top-[7%] h-[82px] w-[92%] sm:h-[96px] md:left-[5%] md:top-[10%] md:h-[16%] md:w-[44%]",
    fontSize: "82px",
    direction: "left-to-right",
    duration: 2.15,
    wait: 0.45,
  },
  {
    texts: ["CARRITO DE COMPRAS", "PASARELA DE PAGOS", "PORTAL DE PAGOS"],
    className:
      "absolute right-[3%] top-[23%] h-[90px] w-[94%] sm:h-[106px] md:right-[4%] md:top-[12%] md:h-[18%] md:w-[54%]",
    fontSize: "66px",
    direction: "right-to-left",
    duration: 2.35,
    wait: 0.65,
  },
  {
    texts: ["INTEGRACIONES CON APIS", "TURNERA", "MENUES"],
    className:
      "absolute left-[3%] top-[40%] h-[108px] w-[94%] md:left-[8%] md:top-[38%] md:h-[20%] md:w-[84%]",
    fontSize: "78px",
    direction: "left-to-right",
    duration: 2.6,
    wait: 0.5,
  },
  {
    texts: ["ADMINISTRACIÓN DE RESTAURANTES", "WEB DE PROPIEDADES EN ALQUILER"],
    className:
      "absolute left-[4%] bottom-[22%] h-[92px] w-[92%] sm:h-[106px] md:left-[5%] md:bottom-[14%] md:h-[18%] md:w-[72%]",
    fontSize: "58px",
    direction: "right-to-left",
    duration: 2.45,
    wait: 0.75,
  },
  {
    texts: ["PET SHOP", "VETERINARIAS"],
    className:
      "absolute right-[5%] bottom-[7%] h-[82px] w-[86%] sm:h-[96px] md:right-[7%] md:bottom-[9%] md:h-[16%] md:w-[38%]",
    fontSize: "74px",
    direction: "left-to-right",
    duration: 2.1,
    wait: 0.55,
  },
];

export default function Seccion1() {
  return (
    <section
      id="seccion1"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black text-white md:h-screen md:min-h-screen"
      aria-label="Servicios digitales de ConCodigoArt"
    >
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_34%,rgba(0,0,0,0.36)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-[12px] bg-white/90 md:w-[18px]" />
      <div className="absolute bottom-0 right-0 h-[12px] w-full bg-white/90 md:h-[18px]" />

      <div className="relative h-full min-h-[640px] w-full">
        {vapourRows.map((row) => (
          <div key={row.texts.join("-")} className={row.className}>
            <VapourTextEffect
              texts={row.texts}
              font={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: row.fontSize,
                fontWeight: 800,
              }}
              color="rgb(255, 255, 255)"
              spread={5.5}
              density={6}
              animation={{
                vaporizeDuration: row.duration,
                fadeInDuration: 0.85,
                waitDuration: row.wait,
              }}
              direction={row.direction}
              alignment="center"
              tag={Tag.H2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

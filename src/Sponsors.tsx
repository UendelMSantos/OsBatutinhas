import foto1 from "./assets/sponsors/nilo_dantas.png-artguru.png"
import foto2 from "./assets/sponsors/ana_cabeleireiros.png.jpeg"
import foto3 from "./assets/sponsors/ar_eventos.png.jpeg"
import foto4 from "./assets/sponsors/bar_garçom.png.jpeg"
import foto5 from "./assets/sponsors/comercio_hjl.png.jpeg"
import foto6 from "./assets/sponsors/controllerPragas.png.jpeg"
import foto7 from "./assets/sponsors/cristo_redentor.png.jpeg"
import foto8 from "./assets/sponsors/dra_rayane.png.jpeg"
import foto9 from "./assets/sponsors/isabely_teles.png.jpeg"
import foto10 from "./assets/sponsors/jj_pizzaria.png.jpeg"
import foto11 from "./assets/sponsors/kibatata.png.jpeg"
import foto12 from "./assets/sponsors/lb_baterias.png.jpeg"
import foto13 from "./assets/sponsors/leticia_macial.png.jpeg"
import foto14 from "./assets/sponsors/marcos_ferreira.png.jpeg"
import foto15 from "./assets/sponsors/mercadinho_raimundo.png.jpeg"
import foto16 from "./assets/sponsors/mercearia_jmg.png.jpeg"
import foto17 from "./assets/sponsors/mf.png.jpeg"
import CarouselSponsors from "./components/CarouselSponsors"

function Sponsors() {
  const items = [
    foto1, foto2, foto3, foto4, foto5,
    foto6, foto7, foto8, foto9, foto10,
    foto11, foto12, foto13, foto14,
    foto15, foto16, foto17
  ];

  return (
    <section id="apoiadores" className="py-16 bg-gradient-to-b from-yellow-50 to-emerald-50">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Cabeçalho */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">
            Quem acredita em nós
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Nossos Apoiadores 💚
          </h2>
          <div className="w-16 h-1 rounded-full bg-emerald-400 mt-1" />
          <p className="text-gray-500 max-w-md text-sm md:text-base">
            Empresas e parceiros que acreditam no poder de transformar a infância.
          </p>
        </div>

        {/* Carrossel */}
        <div className="w-full max-w-2xl mx-auto">
          <CarouselSponsors items={items} />
        </div>

        {/* CTA apoio */}
        <div className="mt-2 text-center">
          <p className="text-gray-500 text-sm mb-3">Quer fazer parte desse time?</p>
          <a
            href="#contato"
            className="inline-block px-8 py-3 bg-emerald-500 text-white font-bold
                       rounded-full shadow-lg hover:bg-emerald-600 hover:scale-105
                       transition-all duration-200"
          >
            Quero ser Apoiador 🤝
          </a>
        </div>

      </div>
    </section>
  );
}

export default Sponsors;
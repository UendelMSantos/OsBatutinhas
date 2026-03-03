import Carousel from "./Carrousel";
import Dates from "./Dates";

function Body() {
  return (
    <>
      {/* Hero / Sobre */}
      <section
        id="Sobre"
        className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-emerald-400 overflow-hidden"
      >
        {/* Círculos decorativos */}
        <div className="absolute top-[-4rem] left-[-4rem] w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-4rem] w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">

          {/* Carrossel */}
          <div className="w-full md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60">
              <Carousel />
            </div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <span className="text-emerald-700 font-bold text-sm uppercase tracking-widest bg-white/40 px-3 py-1 rounded-full w-fit">
              Quem somos
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-sm">
              Instituto <br />
              <span className="text-emerald-800">Batutinhas</span>
            </h1>

            <div className="flex flex-col gap-3 text-white/90 text-base leading-relaxed">
              <p>
                Os Batutinhas nasceu com um propósito simples e poderoso: proporcionar
                momentos de <strong className="text-white">alegria, brincadeira e convivência saudável</strong> para crianças
                entre 3 e 12 anos durante o período do Carnaval.
              </p>
              <p>
                O que começou como uma ação pontual rapidamente se transformou em algo
                muito maior — o sucesso e o envolvimento positivo das famílias evidenciaram
                uma necessidade clara.
              </p>
              <p>
                Hoje, os Batutinhas representa mais do que um projeto social — é um
                <strong className="text-white"> movimento que valoriza a infância</strong>, fortalece laços comunitários
                e reafirma que brincar também é uma forma essencial de crescer.
              </p>
            </div>

            <div className="flex gap-4 mt-2 flex-wrap">
              <a
                href="#datas"
                className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-full
                           shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Ver Próximas Datas 📅
              </a>
              <a
                href="#apoiadores"
                className="px-6 py-3 bg-emerald-700 text-white font-bold rounded-full
                           shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Nossos Apoiadores 💚
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats rápidos */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "👶", value: "3–12", label: "Anos de idade" },
            { icon: "🎉", value: "100+", label: "Crianças atendidas" },
            { icon: "📅", value: "4+", label: "Edições realizadas" },
            { icon: "🤝", value: "17+", label: "Apoiadores" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-2xl font-extrabold text-emerald-600">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Datas */}
      <Dates />
    </>
  );
}

export default Body;

import datas from "./assets/bodyImages/978cab2b-dd3d-480e-b954-8ca82e95924c.jpg";

function Dates() {
  return (
    <section id="datas" className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Cabeçalho */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Fique por dentro
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Próximas Datas 📅
          </h2>
          <div className="w-16 h-1 rounded-full bg-yellow-400 mt-1" />
          <p className="text-gray-500 max-w-md text-sm md:text-base">
            Acompanhe os próximos eventos e comemorações do Instituto Batutinhas!
          </p>
        </div>

        {/* Imagem */}
        <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-200">
          <img
            alt="Próximas datas e comemorações"
            src={datas}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Dates;
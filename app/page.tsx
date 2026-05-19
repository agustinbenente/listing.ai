"use client";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm text-blue-400 mb-6">
              ⚡ IA para vendedores de Mercado Libre
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Publicá productos{" "}
              <span className="text-blue-500">
                10x más rápido
              </span>
            </h1>

            <p className="text-zinc-400 text-xl mb-10 max-w-xl">
              Subí una foto y generá automáticamente títulos,
              descripciones y publicaciones optimizadas con IA.
            </p>

            <div className="flex gap-4 mb-10">
              <a
                href="#demo"
                className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold text-lg transition"
              >
                Probar Gratis
              </a>

              <button className="border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-2xl font-semibold text-lg transition">
                Ver Demo
              </button>
            </div>

            <div className="flex gap-8 text-zinc-500 text-sm">
              <span>⚡ Publicaciones instantáneas</span>
              <span>📈 Optimizado para ventas</span>
            </div>
          </div>

          {/* CARD IA */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[32px] p-6 shadow-2xl">

              <div className="grid grid-cols-2 gap-4">

                {/* INPUT */}
                <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                  <p className="text-zinc-500 text-sm mb-4">
                    INPUT
                  </p>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl h-44 flex items-center justify-center text-zinc-500 mb-4">
                    📸 Subí una foto del producto
                  </div>

                  <button className="w-full bg-white text-black font-semibold py-3 rounded-2xl">
                    Subir Imagen
                  </button>
                </div>

                {/* OUTPUT */}
                <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                  <p className="text-zinc-500 text-sm mb-4">
                    OUTPUT IA
                  </p>

                  <div className="bg-zinc-900 rounded-2xl p-4 mb-3">
                    <p className="text-zinc-500 text-xs mb-2">
                      Título
                    </p>

                    <p className="font-medium">
                      Publicación optimizada
                      generada automáticamente
                    </p>
                  </div>

                  <div className="bg-zinc-900 rounded-2xl p-4 mb-3">
                    <p className="text-zinc-500 text-xs mb-2">
                      Descripción
                    </p>

                    <p className="text-sm text-zinc-300">
                      Descripción profesional
                      optimizada para conversión y SEO.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["SEO", "mercado libre", "ventas", "ecommerce"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DEMO */}
      <section
        id="demo"
        className="min-h-screen flex items-center justify-center border-t border-zinc-800 px-6"
      >
        <div className="max-w-3xl w-full">

          <h2 className="text-5xl font-bold mb-6">
            Generador IA
          </h2>

          <p className="text-zinc-400 mb-10 text-lg">
            Escribí un producto y generá una publicación automática.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8">

            <input
              type="text"
              placeholder="Nombre del producto"
              className="w-full bg-black border border-zinc-700 rounded-2xl p-5 mb-5"
            />

            <textarea
              placeholder="Descripción base..."
              className="w-full bg-black border border-zinc-700 rounded-2xl p-5 h-40 mb-5"
            />

            <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition">
              Generar publicación
            </button>

          </div>
        </div>
      </section>

    </main>
  );
}
"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
            ⚡ IA para vendedores de Mercado Libre
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Publicá productos
            <span className="text-blue-500"> 10x más rápido</span>
          </h1>

          <p className="text-zinc-400 text-xl mb-10 max-w-xl">
            Subí una foto y generá automáticamente títulos,
            descripciones y publicaciones optimizadas con IA.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl text-lg font-semibold">
              Probar Gratis
            </button>

            <button className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-2xl text-lg">
              Ver Demo
            </button>
          </div>

          <div className="flex gap-8 mt-10 text-zinc-500 text-sm">
            <span>⚡ Publicaciones instantáneas</span>
            <span>📈 Optimizado para ventas</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-zinc-950 rounded-2xl p-4 border border-zinc-800">
                <p className="text-zinc-500 text-sm mb-4">
                  INPUT
                </p>

                <div className="h-40 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500">
                  📸 Subí una foto del producto
                </div>

                <button className="w-full mt-4 bg-white text-black rounded-xl py-3 font-medium">
                  Subir Imagen
                </button>
              </div>

              <div className="bg-zinc-950 rounded-2xl p-4 border border-zinc-800">
                <p className="text-zinc-500 text-sm mb-4">
                  OUTPUT IA
                </p>

                <div className="space-y-3">

                  <div className="bg-zinc-800 rounded-xl p-3">
                    <p className="text-xs text-zinc-500 mb-1">
                      Título
                    </p>

                    <p className="text-sm">
                      Publicación optimizada generada automáticamente
                    </p>
                  </div>

                  <div className="bg-zinc-800 rounded-xl p-3">
                    <p className="text-xs text-zinc-500 mb-1">
                      Descripción
                    </p>

                    <p className="text-sm text-zinc-300">
                      Descripción profesional optimizada para conversión y SEO.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["SEO", "mercado libre", "ventas", "ecommerce"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs"
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
    </main>
  );
}
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-blue-500/30">
            AI
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              ListingAI
            </h1>

            <p className="text-xs text-zinc-500">
              AI powered ecommerce
            </p>
          </div>
        </div>

        <a
          href="#"
          className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition"
        >
          Empezar
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-300 mb-8">
            ⚡ IA para vendedores de Mercado Libre
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Publicá productos 10x más rápido
          </h1>

          <p className="mt-8 text-zinc-400 text-xl leading-relaxed max-w-xl">
            Subí una foto y generá automáticamente títulos,
            descripciones y publicaciones optimizadas con IA.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-400 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-blue-500/20"
            >
              Probar Gratis
            </a>

            <a
              href="#demo"
              className="border border-white/10 hover:border-white/30 transition px-8 py-4 rounded-2xl text-lg font-semibold bg-white/5"
            >
              Ver Demo
            </a>
          </div>

          <div className="flex gap-8 mt-10 text-sm text-zinc-500">
            <span>⚡ Publicaciones instantáneas</span>
            <span>📈 Optimizado para ventas</span>
          </div>
        </div>

        {/* MOCKUP */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-5 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {/* INPUT */}
              <div className="bg-zinc-800 rounded-2xl p-5">
                <div className="text-zinc-500 text-sm mb-4">
                  INPUT
                </div>

                <div className="h-64 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-zinc-400 text-center px-4">
                  📸 Subí una foto del producto
                </div>

                <button className="mt-5 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
                  Subir imagen
                </button>
              </div>

              {/* OUTPUT */}
              <div className="bg-black rounded-2xl border border-white/5 p-5">
                <div className="text-zinc-500 text-sm mb-4">
                  OUTPUT IA
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-zinc-500 mb-1">
                      Título
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 text-sm">
                      Publicación optimizada generada automáticamente
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-zinc-500 mb-1">
                      Descripción
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 text-sm text-zinc-300 leading-relaxed">
                      Descripción profesional optimizada para conversión y SEO.
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-zinc-500 mb-2">
                      Keywords
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "seo",
                        "mercado libre",
                        "ventas",
                        "ecommerce",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
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
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Todo lo que necesitás para vender más
          </h2>

          <p className="text-zinc-400 mt-6 text-xl">
            Automatizá publicaciones y ahorrá horas todos los días.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Ahorrá tiempo",
              desc: "Generá publicaciones completas en segundos.",
            },
            {
              title: "Vendé más",
              desc: "Textos optimizados para conversión y SEO.",
            },
            {
              title: "Sin experiencia",
              desc: "No necesitás saber marketing ni copywriting.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/20 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section
        id="demo"
        className="border-y border-white/10 bg-zinc-950"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold">
              Antes vs Después
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-8">
                ❌ Antes
              </h3>

              <ul className="space-y-5 text-zinc-300">
                <li>20 minutos por publicación</li>
                <li>Títulos malos</li>
                <li>Descripciones aburridas</li>
                <li>Buscar keywords manualmente</li>
              </ul>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-8">
                ✅ Después
              </h3>

              <ul className="space-y-5 text-zinc-300">
                <li>Publicaciones instantáneas</li>
                <li>SEO optimizado</li>
                <li>Más velocidad</li>
                <li>Listo para copiar y vender</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-6xl font-bold leading-tight">
          Empezá a publicar más rápido hoy
        </h2>

        <p className="text-zinc-400 text-xl mt-8">
          Probá ListingAI gratis.
        </p>

        <a
          href="#"
          className="inline-block mt-10 bg-blue-500 hover:bg-blue-400 transition px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl shadow-blue-500/20"
        >
          Probar Gratis
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500 text-sm">
        © 2026 ListingAI. All rights reserved.
      </footer>
    </div>
  );
}
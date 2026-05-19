"use client";

import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generarContenido() {
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product,
          description,
        }),
      });

      const data = await response.json();

      setResult(data.result);
    } catch (error) {
      console.error(error);
      setResult("Error generando contenido");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        <div>
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            ⚡ IA para vendedores de Mercado Libre
          </div>

          <h1 className="text-7xl font-bold leading-tight mb-6">
            Publicá productos{" "}
            <span className="text-blue-500">10x más rápido</span>
          </h1>

          <p className="text-zinc-400 text-xl mb-10">
            Generá títulos, descripciones y keywords SEO automáticamente con inteligencia artificial.
          </p>

          <div className="space-y-4 mb-6">

            <input
              type="text"
              placeholder="Nombre del producto"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
            />

            <textarea
              placeholder="Descripción del producto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none min-h-[120px]"
            />

          </div>

          <button
            onClick={generarContenido}
            className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl text-xl font-semibold"
          >
            {loading ? "Generando..." : "Generar Publicación"}
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <div className="bg-black rounded-2xl p-6 min-h-[500px] whitespace-pre-wrap">
            {result ? (
              result
            ) : (
              <div className="text-zinc-500">
                La publicación generada por IA aparecerá acá...
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
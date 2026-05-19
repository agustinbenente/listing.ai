"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generarContenido() {
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
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
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-6xl font-bold mb-6">
          ListingAI
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Generá publicaciones de Mercado Libre con IA
        </p>

        <button
          onClick={generarContenido}
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl text-xl font-semibold"
        >
          {loading ? "Generando..." : "Generar Publicación"}
        </button>

        {result && (
          <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-left whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
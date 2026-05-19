"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-6">
          ListingAI
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Generá publicaciones de Mercado Libre con IA
        </p>

        <button className="bg-blue-500 hover:bg-blue-400 px-8 py-4 rounded-2xl text-lg font-semibold">
          Probar Gratis
        </button>
      </div>
    </div>
  );
}
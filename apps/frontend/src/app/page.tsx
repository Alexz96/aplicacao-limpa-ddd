"use client";

import { Teste } from "@ddd/auth";
import { useState } from "react";

export default function Home() {
  const [texto, setTexto] = useState("");

  async function executar() {
    const casoDeUso = new Teste();
    const resposta = await casoDeUso.execute();
    setTexto(resposta);
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <span>Resposta: {texto}</span>
      <button onClick={executar}>Executar</button>
    </div>
  );
}

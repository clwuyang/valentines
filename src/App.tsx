"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "¿Seguro de verdad?",
      "¡Piénsalo de nuevo!",
      "¡Última oportunidad!",
      "¿Seguramente no?",
      "¡Podrías arrepentirte!",
      "¡Dale otra pensada!",
      "¿Estás completamente seguro?",
      "¡Esto podría ser un error!",
      "¡Ten corazón!",
      "¡No seas tan frío!",
      "¿Cambio de opinión?",
      "¿No lo reconsiderarías?",
      "¿Es esa tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
    ];
    

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl my-4">Quieres ser mi txikibei ?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Siiiiii
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "Noooo sadge" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

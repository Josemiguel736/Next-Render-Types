"use client";
import { SliderBar } from "@/components/passwords/SliderBar";
import { SwitchInput } from "@/components/passwords/SwitchInput";
import { useCallback, useEffect, useState } from "react";

const PasswordsPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [lengthPass, setLengthPass] = useState<number>(10);

  const [mayus, setMayus] = useState<boolean>(true);
  const [minus, setMinus] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);

  const [showNotification, setShowNotification] = useState<boolean>(false);

  const generatePassword = useCallback(() => {
    let characters = "";

    const options = [
      { condition: mayus, chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
      { condition: minus, chars: "abcdefghijklmnopqrstuvwxyz" },
      { condition: numbers, chars: "0123456789" },
      { condition: symbols, chars: "!@#$%&*-+='<>,.?" },
    ];

    for (const { condition, chars } of options) {
      if (condition) {
        characters += chars;
      }
    }

    let password = "";

    for (let i = 0; i < lengthPass; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setInputValue(password);
  }, [lengthPass, mayus, minus, numbers, symbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword, lengthPass, numbers, mayus, minus, symbols]);

  const copyPassword = () => {
    navigator.clipboard.writeText(inputValue);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="bg-slate-200 w-full h-screen flex justify-center ">
      <div className="mt-3.5 bg-white border border-gray-500 p-1 rounded max-h-65">
        <h2>Password Generate</h2>
        <hr />
        <div className="flex">
          <input
            type="text"
            placeholder="New Password"
            className="rounded p-2 my-2 border "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="w-20 flex text-center justify-center items-center">
            <svg
              onClick={copyPassword}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-grey"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </button>
        </div>
        <SliderBar value={lengthPass} changeValue={setLengthPass} />
        <p>{lengthPass}</p>
        <div className="flex justify-between pb-3">
          <SwitchInput
            value={mayus}
            changeValue={setMayus}
            title="Mayúsculas"
          />
          <SwitchInput
            value={minus}
            changeValue={setMinus}
            title="Minusculas"
          />
        </div>
        <div className="flex justify-between pb-3">
          <SwitchInput
            value={numbers}
            changeValue={setNumbers}
            title="Números"
          />
          <SwitchInput
            value={symbols}
            changeValue={setSymbols}
            title="Simbolos"
          />
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-blue-400 text-white p2 rounded hover:cursor-pointer hover:bg-blue-800"
        >
          Generate
        </button>
      </div>
      <div className="absolute top-170">
        {showNotification && (
          <p className="w-full py-3 px-10 text-center bg-green-400 mt-2.5 mb-1.5 text-white text-sm  rounded">
            contraseña copiada
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordsPage;

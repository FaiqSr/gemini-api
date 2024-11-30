"use client";

import React, { useEffect, useState } from "react";
import LoadingComponent from "./components/LoadingComponent";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const page = () => {
  const [promt, setPromt] = useState(String);
  const [resultAi, setResultAi] = useState(String);
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const submit = async () => {
    const prompt = promt;

    setLoading(true);

    const result = await model.generateContent(prompt);
    setResultAi(result.response.text());
    setLoading(false);
  };

  return (
    <>
      <main className="flex items-center pt-5 min-h-svh bg-amber-50 flex-col px-5">
        <section className="flex flex-col gap-5">
          <section>
            <form>
              <section className="flex flex-col gap-2">
                <label
                  htmlFor="promt"
                  className="text-center text-2xl font-semibold"
                >
                  Promt
                </label>
                <textarea
                  name="promt"
                  id="promt"
                  onChange={(e) => setPromt(e.target.value)}
                  className="border-2 rounded-lg resize-none w-96 h-52 bg-amber-100 p-2"
                  placeholder="Masukkan promt"
                ></textarea>
              </section>
              <section className="text-center mt-5">
                <button
                  type="button"
                  onClick={submit}
                  className="px-5 py-2 rounded-lg bg-blue-300"
                >
                  Submit
                </button>
              </section>
            </form>
          </section>
          {loading ? (
            <section>
              <LoadingComponent />
            </section>
          ) : (
            <section>
              <p>{resultAi}</p>
            </section>
          )}
        </section>
      </main>
    </>
  );
};

export default page;

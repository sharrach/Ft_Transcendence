"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Verify2Fau from "./QRcode/page"; // Updated import statement
import { Verify } from "crypto";
import QRcode from "./components/settings/QRcode";

export default function FirstPage() {


  return (
    <div className="w-full h-screen bg-black/40 flex flex-col items-center justify-center bg-[url('')]">
      <h1 className="text-5xl pb-3 text-white font-bold text-center"> PingPong </h1>
      <Link href={"http://localhost:4000/auth/redirect"}>
      {/* <Link href="/QRcode"> */}
      <button
        className="block bg-zinc-200 px-6 py-3 rounded-lg font-bold">
        { "LET'S GO 🔥" }
      </button>
      </Link>
    </div>
  );
}






'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
		<div className="flex inline">
		<a className="flex text-2xl" href="https://eneahysa-portofolio.vercel.app/">Click here to see my Latest Portofolio Website !</a>
		<img className="flex inline" width="52" height="52" src="https://img.icons8.com/color/52/nui2.png" alt="nui2"/>
		</div>
		</main>
    </div>
  );
}


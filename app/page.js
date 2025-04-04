"use client";

import { useState } from "react";

export default function Home() {
  const [locale, setLocale] = useState("English");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col row-start-1 items-center justify-center">
        <div className="relative">
          <select
            className="appearance-none bg-transparent border border-gray-300 rounded px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            defaultValue="English"
            onChange={(e) => {
              setLocale(e.target.value);
            }}
          >
            <option value="中文">中文</option>
            <option value="English">English</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <div className="animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {locale == "English" ? (
          <div>
            We believe in software that builds smalll things that can change the
            world
          </div>
        ) : (
          <div>我们相信简单的软件也能改变世界</div>
        )}
      </main>
      <footer className="row-start-3 flex flex-col items-center justify-center">
        {locale == "English" ? (
          <div>Shanghai Jielingweidu Technology Co., Ltd.</div>
        ) : (
          <div>上海杰灵微都科技有限公司</div>
        )}
      </footer>
    </div>
  );
}

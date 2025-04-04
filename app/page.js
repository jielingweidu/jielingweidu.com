import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
        <div>
          We believe in software that builds smalll things that can change the
          world.
        </div>
      </main>
      <footer className="row-start-3 flex flex-col items-center justify-center">
        <div>上海杰灵微都科技有限公司</div>
        <div>Shanghai Jielingweidu Technology Co., Ltd.</div>
      </footer>
    </div>
  );
}

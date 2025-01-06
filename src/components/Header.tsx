"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Server Logo"
              className="h-10"
              width={40}
              height={40}
            />
          </Link>
          <span className="text-2xl font-semibold">AyuServer</span>
        </div>

        <div className="flex space-x-6">
          <Link href="/" className="hover:text-[#4AC9E0]">
            ホーム
          </Link>
          <Link href="/rules" className="hover:text-[#4AC9E0]">
            ルール
          </Link>
          <Link href="/contact" className="hover:text-[#4AC9E0]">
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
}

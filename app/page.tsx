"use client";

import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { FaServer } from "react-icons/fa";
import { getMinecraftOnlinePlayers } from "../lib/minecraftStatus";

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [minecraftOnline, setMinecraftOnline] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function fetchServerInfo() {
      const players = await getMinecraftOnlinePlayers();
      setMinecraftOnline(players);
    }

    fetchServerInfo();
  }, []);

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText("mc.ayuserver.net")
        .then(() => {
          alert("IPアドレスをコピーしました！");
        })
        .catch((err) => {
          console.error("クリップボードにコピーできませんでした:", err);
          alert("コピーに失敗しました。ブラウザが対応していない可能性があります。");
        });
    } else {
      alert("このブラウザはクリップボードコピー機能をサポートしていません。");
    }
  };

  const scrollToDetails = () => {
    const detailsElement = document.getElementById("serverDetails");
    if (detailsElement) {
      detailsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/background.png)",
        height: `${screenHeight}px`,
        backgroundSize: "cover",
      }}
    >
      <Header />

      <div className="flex flex-col items-start justify-center min-h-screen px-8">
        <div className="text-left">
          <h1
            className="text-6xl font-bold text-[#4AC9E0] mb-6"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            mc.ayuserver.net
          </h1>
          <div className="flex gap-6">
            <button
              onClick={copyToClipboard}
              className="bg-[#4AC9E0] text-white px-8 py-4 text-lg rounded-md font-semibold shadow-md hover:bg-[#38a1c4]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              IPをコピーする
            </button>
            <button
              onClick={scrollToDetails}
              className="border border-[#4AC9E0] text-[#4AC9E0] px-8 py-4 text-lg rounded-md font-semibold hover:bg-[#e6f7fc] shadow-md"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              詳細
            </button>
          </div>
        </div>
      </div>

      <div
        id="serverDetails"
        className="flex flex-col items-start justify-start min-h-screen px-16 py-20"
      >
        <p className="text-lg mb-8" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          このサーバーでは、クリエイティブ、サバイバル、ミニゲームなど多彩なモードを楽しめます。
          プレイヤー同士で協力したり競ったりして、楽しい時間をお過ごしください。
        </p>

        <div className="mt-8 flex flex-col items-start justify-center bg-black bg-opacity-60 p-8 rounded-lg w-full max-w-lg">
          <h2
            className="text-2xl font-semibold text-white mb-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            <FaServer className="inline-block text-[#4AC9E0] mr-2" />
            Minecraftサーバー
          </h2>
          <div className="flex items-center justify-start space-x-4">
            <span
              className="text-5xl text-[#4AC9E0] font-bold"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {minecraftOnline}
            </span>
            <span className="text-white text-2xl">人がプレイ中</span>
          </div>
        </div>

        <div className="flex gap-6 items-start flex-col sm:flex-row mt-12">
          <a
            className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-lg h-12 px-6 font-semibold"
            href="https://dc.ayuserver.net/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Discordに参加
          </a>
          <a
            className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-lg h-12 px-6 font-semibold"
            href="/rules"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            サーバーのルール
          </a>
        </div>

        <div className="text-left mt-12">
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            サーバーへの参加方法
          </h3>
          <p className="mt-4 text-lg">
            Minecraftを起動し、サーバーのIPアドレス「
            <strong>mc.ayuserver.net</strong>」を入力して参加できます。
          </p>
          <p className="mt-2 text-lg">
            詳細なガイドは
            <a href="/join" className="text-blue-500 hover:underline">
              こちら
            </a>
            をチェックしてください。
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

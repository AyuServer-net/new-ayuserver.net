"use client";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { FaServer, FaKey, FaGamepad } from "react-icons/fa";

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-black">
      <Header />

      <div className="flex-grow px-8 py-12">
        <h1
          className="text-5xl font-extrabold text-center mb-12 text-[#4AC9E0]"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          サーバーへの参加方法
        </h1>

        <div className="max-w-4xl mx-auto space-y-5">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2
              className="text-3xl font-semibold mb-6 text-gray-800"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              <FaServer className="inline-block text-blue-500 mr-2" /> Java Edition
            </h2>
            <ul className="text-lg space-y-4">
              <li>
                <strong>IP:</strong> <span className="font-mono text-gray-700">mc.ayuserver.net</span>
              </li>
              <li>
                <strong>バージョン:</strong> 1.8.x ～ 1.21.x
              </li>
              <li>
                Minecraftを起動し、上記のIPアドレスをサーバーリストに追加して参加してください。
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2
              className="text-3xl font-semibold mb-6 text-gray-800"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              <FaGamepad className="inline-block text-green-500 mr-2" /> Bedrock Edition
            </h2>
            <ul className="text-lg space-y-4">
              <li>
                <strong>IP:</strong> <span className="font-mono text-gray-700">be.ayuserver.net</span>
              </li>
              <li>
                <strong>ポート:</strong> 19132
              </li>
              <li>
                <strong>バージョン:</strong> 最新版
              </li>
              <li>
                ゲーマータグ <span className="font-mono text-gray-700">AyuServer01</span> にフレンドリクエストを送信し、
                フレンド欄に表示される <strong>AyuServer</strong> に参加することも可能です。
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

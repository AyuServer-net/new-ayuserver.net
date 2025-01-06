"use client";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function Rules() {
  return (
    <div>
      <Header />
      <main className="px-4 py-10 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-center text-[#4AC9E0] mb-8">AyuServer 生活鯖 規約</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-[#171717]">第1条（適用範囲）</h2>
          <p>本規約は、当サーバー内の全てのプレイヤーに適用されます。プレイヤーは本規約に従い、サーバー内で活動するものとします。</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-[#171717]">第2条（全体ルール）</h2>
          <ul className="list-disc pl-6">
            <li><strong>荒らし禁止:</strong> プレイヤーは他者の建築や所有物を故意に破壊したり、環境を意図的に悪化させる行為をしてはなりません。</li>
            <li><strong>不快な発言の禁止:</strong> 他のプレイヤーを不快にさせる言葉遣いや差別的・攻撃的な発言を禁止します。</li>
            <li><strong>チートやハックツールの使用禁止:</strong> プレイヤーは外部ツールやプログラムを用いた不正行為を行ってはなりません。</li>
            <li><strong>迷惑行為の禁止:</strong> 他のプレイヤーに対して過度に嫌がらせを行う行為やスパムチャットは厳禁です。</li>
            <li><strong>XRayなどの透過テクスチャ・MODは使用禁止:</strong> XRayなどでブロックを透過したりするのは禁止です。</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-[#171717]">第3条（生活鯖ルール）</h2>
          <ul className="list-disc pl-6">
            <li><strong>トラップタワー建設禁止:</strong> 生活サーバー内でのトラップタワーの建設を禁止します。</li>
            <li><strong>Shop作成禁止:</strong> 生活サーバー内でのプレイヤーによる個別のショップの設置を禁止します。</li>
            <li><strong>プレイヤー間のトレード推奨:</strong> サーバー内ではアイテムの交換や協力を推奨しますが、相互の同意に基づき公正なトレードを行うことが前提です。</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-[#171717]">第4条（資源鯖ルール）</h2>
          <ul className="list-disc pl-6">
            <li><strong>トラップタワー建築OK:</strong> 資源サーバーではトラップタワーの建設が許可されています。</li>
            <li><strong>Shop作成禁止:</strong> 資源サーバー内での個人ショップの作成は生活サーバー同様に禁止です。</li>
            <li><strong>資源の節度ある使用:</strong> 資源サーバーの資源は全てのプレイヤーの共有物です。</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-[#171717]">第5条（リセット資源鯖ルール）</h2>
          <ul className="list-disc pl-6">
            <li><strong>トラップタワー建築OK:</strong> リセット資源サーバーでもトラップタワーの建設が許可されています。</li>
            <li><strong>Shop作成禁止:</strong> リセット資源サーバーでも、Shopの作成は禁止です。</li>
            <li><strong>リセットに備えた活動:</strong> アイテムの過度な蓄積や保存を目的とした活動は控えること。</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-[#171717]">第6条（禁止行為に対する処罰）</h2>
          <ul className="list-disc pl-6">
            <li>規約違反者は、管理者の判断により以下の処罰を受ける可能性があります:</li>
            <li><strong>警告</strong></li>
            <li><strong>一時的なアクセス禁止</strong></li>
            <li><strong>永久BAN</strong></li>
            <li>プレイヤー間の問題は基本的に話し合いによる解決を推奨します。</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-[#171717]">第7条（最終条項）</h2>
          <p>本規約はプレイヤーの公平なプレイを目的として作成されています。プレイヤーは規約の内容を理解し、遵守する義務があります。</p>
          <p>規約は管理者の判断により、予告なく改定される場合があります。改定後もサーバーを利用する場合、改定後の規約に同意したものとみなします。</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

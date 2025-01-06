"use client";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const webhookURL = "https://discord.com/api/webhooks/1325431820455510036/6jIuYgT5gnVaAyBnwPiOkBRriYE60Ydp4qLmpPJk6HuTathHWbIr1QgNTkVep-zKxkBa";

    const embed = {
      title: "新しいお問い合わせ",
      color: 3066993,
      fields: [
        {
          name: "お名前",
          value: name || "未記入",
          inline: true,
        },
        {
          name: "メールアドレス",
          value: email || "未記入",
          inline: true,
        },
        {
          name: "メッセージ",
          value: message || "未記入",
        },
      ],
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      });

      if (response.ok) {
        setStatus("送信が完了しました。");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("送信に失敗しました。もう一度お試しください。");
      }
      setStatus("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-4xl mx-auto p-4 flex-1">
        <h1 className="text-3xl font-bold text-center mb-6">お問い合わせ</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">お名前</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg">メッセージ</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
              rows={4}
              required
            />
          </div>

          {status && <p className="text-center text-lg font-semibold">{status}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-blue-500 text-white px-6 py-2 rounded-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "送信中..." : "送信"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

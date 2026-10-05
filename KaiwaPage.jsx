import { useState } from "react";

const topics = [
  {
    id: 1,
    title: "Giới thiệu bản thân",
    level: "N5",
    opening:
      "こんにちは！お名前は何ですか？",
  },
  {
    id: 2,
    title: "Trường học",
    level: "N5",
    opening:
      "どこで日本語を勉強していますか？",
  },
  {
    id: 3,
    title: "Nhà hàng",
    level: "N5",
    opening:
      "何を食べますか？",
  },
  {
    id: 4,
    title: "Du lịch",
    level: "N4",
    opening:
      "どこへ旅行したいですか？",
  },
  {
    id: 5,
    title: "Kinh nghiệm",
    level: "N4",
    opening:
      "日本へ行ったことがありますか？",
  },
];

function KaiwaPage() {

  const [topic, setTopic] =
    useState(topics[0]);

  const [input, setInput] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        role: "ai",
        text: topics[0].opening,
      },
    ]);


  function selectTopic(newTopic) {

    setTopic(newTopic);

    setMessages([
      {
        role: "ai",
        text: newTopic.opening,
      },
    ]);

  }


  function sendMessage() {

    if (!input.trim()) {
      return;
    }

    setMessages((prev) => [
      ...prev,

      {
        role: "user",
        text: input,
      },

      {
        role: "ai",
        text:
          "いいですね！もっと詳しく話してください。",
      },
    ]);

    setInput("");
  }


  return (
    <div className="page">

      <div className="page-heading">

        <div>

          <span className="page-badge">
            💬 KAIWA AI
          </span>

          <h1>
            Luyện hội thoại với AI
          </h1>

          <p>
            Chọn tình huống và bắt đầu nói
            tiếng Nhật.
          </p>

        </div>

      </div>


      <div className="kaiwa-layout">

        <aside className="topic-panel">

          <h3>
            Chủ đề
          </h3>

          {topics.map((item) => (

            <button
              key={item.id}
              className={
                topic.id === item.id
                  ? "topic-button active"
                  : "topic-button"
              }
              onClick={() =>
                selectTopic(item)
              }
            >

              <strong>
                {item.title}
              </strong>

              <small>
                {item.level}
              </small>

            </button>

          ))}

        </aside>


        <section className="chat-panel">

          <div className="chat-header">

            <div>
              <strong>
                🤖 Japanese AI
              </strong>

              <span>
                {topic.title}
              </span>
            </div>

            <small>
              ● Online
            </small>

          </div>


          <div className="chat-area">

            {messages.map(
              (message, index) => (

                <div
                  key={index}
                  className={
                    message.role === "user"
                      ? "message user"
                      : "message ai"
                  }
                >
                  {message.text}
                </div>

              )
            )}

          </div>


          <div className="chat-input">

            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  sendMessage();
                }

              }}
              placeholder="Nhập câu tiếng Nhật..."
            />

            <button
              onClick={sendMessage}
            >
              Gửi
            </button>

          </div>

        </section>

      </div>

    </div>
  );
}

export default KaiwaPage;
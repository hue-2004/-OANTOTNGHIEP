import { useState } from "react";

const kanjiData = {
  N5: [
    {
      kanji: "日",
      onyomi: "ニチ・ジツ",
      kunyomi: "ひ・か",
      meaning: "Ngày / mặt trời",
      words: ["にほん", "にちようび"],
    },
    {
      kanji: "月",
      onyomi: "ゲツ・ガツ",
      kunyomi: "つき",
      meaning: "Tháng / mặt trăng",
      words: ["げつようび", "いちがつ"],
    },
    {
      kanji: "人",
      onyomi: "ジン・ニン",
      kunyomi: "ひと",
      meaning: "Người",
      words: ["にほんじん", "ひとり"],
    },
    {
      kanji: "山",
      onyomi: "サン",
      kunyomi: "やま",
      meaning: "Núi",
      words: ["やま"],
    },
  ],

  N4: [
    {
      kanji: "旅",
      onyomi: "リョ",
      kunyomi: "たび",
      meaning: "Du lịch / chuyến đi",
      words: ["りょこう"],
    },
    {
      kanji: "験",
      onyomi: "ケン",
      kunyomi: "",
      meaning: "Kinh nghiệm",
      words: ["けいけん"],
    },
    {
      kanji: "健",
      onyomi: "ケン",
      kunyomi: "",
      meaning: "Khỏe",
      words: ["けんこう"],
    },
  ],
};

function KanjiPage() {
  const [level, setLevel] = useState("N5");

  return (
    <div className="page">

      <div className="page-heading">

        <div>
          <span className="page-badge">
            漢 KANJI
          </span>

          <h1>
            Học Kanji N5 – N4
          </h1>

          <p>
            Module riêng cho việc học Kanji.
          </p>
        </div>


        <div className="level-switch">

          <button
            className={
              level === "N5"
                ? "level-switch-btn active"
                : "level-switch-btn"
            }
            onClick={() => setLevel("N5")}
          >
            N5
          </button>

          <button
            className={
              level === "N4"
                ? "level-switch-btn active"
                : "level-switch-btn"
            }
            onClick={() => setLevel("N4")}
          >
            N4
          </button>

        </div>

      </div>


      <div className="kanji-grid">

        {kanjiData[level].map((item) => (

          <div
            key={item.kanji}
            className="kanji-card"
          >

            <div className="kanji-symbol">
              {item.kanji}
            </div>

            <h2>
              {item.meaning}
            </h2>

            <p>
              <strong>On:</strong>{" "}
              {item.onyomi || "—"}
            </p>

            <p>
              <strong>Kun:</strong>{" "}
              {item.kunyomi || "—"}
            </p>

            <div className="kanji-words">

              {item.words.map((word) => (
                <span key={word}>
                  {word}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default KanjiPage;
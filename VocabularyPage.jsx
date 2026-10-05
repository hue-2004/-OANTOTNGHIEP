import { useState } from "react";
import "./VocabularyPage.css";

const vocabularyData = {
  N5: [
    {
      id: 1,
      word: "がっこう",
      meaning: "Trường học",
      example: "がっこうへ いきます。",
      category: "Trường học",
    },
    {
      id: 2,
      word: "せんせい",
      meaning: "Giáo viên",
      example: "せんせいです。",
      category: "Trường học",
    },
    {
      id: 3,
      word: "がくせい",
      meaning: "Học sinh / sinh viên",
      example: "わたしは がくせいです。",
      category: "Trường học",
    },
    {
      id: 4,
      word: "ともだち",
      meaning: "Bạn bè",
      example: "ともだちと はなします。",
      category: "Quan hệ",
    },
    {
      id: 5,
      word: "にほん",
      meaning: "Nhật Bản",
      example: "にほんへ いきます。",
      category: "Địa điểm",
    },
    {
      id: 6,
      word: "きょう",
      meaning: "Hôm nay",
      example: "きょうは げつようびです。",
      category: "Thời gian",
    },
    {
      id: 7,
      word: "あした",
      meaning: "Ngày mai",
      example: "あしたは やすみです。",
      category: "Thời gian",
    },
    {
      id: 8,
      word: "きのう",
      meaning: "Hôm qua",
      example: "きのう がっこうへ いきました。",
      category: "Thời gian",
    },
    {
      id: 9,
      word: "たべます",
      meaning: "Ăn",
      example: "ごはんを たべます。",
      category: "Sinh hoạt",
    },
    {
      id: 10,
      word: "のみます",
      meaning: "Uống",
      example: "みずを のみます。",
      category: "Sinh hoạt",
    },
    {
      id: 11,
      word: "いきます",
      meaning: "Đi",
      example: "がっこうへ いきます。",
      category: "Động từ",
    },
    {
      id: 12,
      word: "みます",
      meaning: "Xem / nhìn",
      example: "テレビを みます。",
      category: "Động từ",
    },
  ],

  N4: [
    {
      id: 101,
      word: "けいけん",
      meaning: "Kinh nghiệm",
      example: "にほんへ いった けいけんがあります。",
      category: "Kinh nghiệm",
    },
    {
      id: 102,
      word: "よてい",
      meaning: "Dự định / kế hoạch",
      example: "あしたの よていがあります。",
      category: "Kế hoạch",
    },
    {
      id: 103,
      word: "ひつよう",
      meaning: "Cần thiết",
      example: "これは ひつようです。",
      category: "Đời sống",
    },
    {
      id: 104,
      word: "りゆう",
      meaning: "Lý do",
      example: "りゆうを せつめいしてください。",
      category: "Giao tiếp",
    },
    {
      id: 105,
      word: "けんこう",
      meaning: "Sức khỏe",
      example: "けんこうに きをつけます。",
      category: "Sức khỏe",
    },
    {
      id: 106,
      word: "りょこう",
      meaning: "Du lịch",
      example: "なつやすみに りょこうします。",
      category: "Du lịch",
    },
    {
      id: 107,
      word: "やくそく",
      meaning: "Lời hứa / cuộc hẹn",
      example: "ともだちと やくそくがあります。",
      category: "Giao tiếp",
    },
    {
      id: 108,
      word: "せつめい",
      meaning: "Giải thích",
      example: "せんせいが せつめいします。",
      category: "Học tập",
    },
  ],
};

function VocabularyPage() {
  const [level, setLevel] = useState("N5");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");

  const vocabulary = vocabularyData[level];

  const categories = [
    "Tất cả",
    ...new Set(
      vocabulary.map((item) => item.category)
    ),
  ];

  const filteredVocabulary = vocabulary.filter(
    (item) => {
      const keyword = search.toLowerCase().trim();

      const matchSearch =
        !keyword ||
        item.word
          .toLowerCase()
          .includes(keyword) ||
        item.meaning
          .toLowerCase()
          .includes(keyword) ||
        item.example
          .toLowerCase()
          .includes(keyword);

      const matchCategory =
        category === "Tất cả" ||
        item.category === category;

      return matchSearch && matchCategory;
    }
  );

  const speak = (text) => {
    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = "ja-JP";
    utterance.rate = 0.8;

    window.speechSynthesis.speak(
      utterance
    );
  };

  return (
    <div className="vocab-page">

      {/* HEADER */}

      <section className="vocab-header">

        <div className="vocab-header-inner">

          <div>
            <span className="vocab-badge">
              🔤 TỪ VỰNG JAPANESE AI
            </span>

            <h1>
              Từ vựng Nhật ngữ
            </h1>

            <p>
              Học từ vựng theo trình độ N5 – N4.
              Nội dung bài học sử dụng
              Hiragana và Katakana.
            </p>
          </div>

          <div className="vocab-level-switch">

            <button
              className={
                level === "N5"
                  ? "active"
                  : ""
              }
              onClick={() => {
                setLevel("N5");
                setCategory("Tất cả");
                setSearch("");
              }}
            >
              <strong>N5</strong>
              <small>Cơ bản</small>
            </button>

            <button
              className={
                level === "N4"
                  ? "active"
                  : ""
              }
              onClick={() => {
                setLevel("N4");
                setCategory("Tất cả");
                setSearch("");
              }}
            >
              <strong>N4</strong>
              <small>Sơ trung cấp</small>
            </button>

          </div>

        </div>

      </section>


      {/* TOOLBAR */}

      <section className="vocab-toolbar">

        <div className="vocab-search">

          <span>🔎</span>

          <input
            type="text"
            placeholder="Tìm từ vựng..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="vocab-category"
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </section>


      {/* SUMMARY */}

      <section className="vocab-summary">

        <div>
          <strong>{level}</strong>
          <span>Trình độ</span>
        </div>

        <div>
          <strong>
            {filteredVocabulary.length}
          </strong>
          <span>Từ hiển thị</span>
        </div>

        <div>
          <strong>🔊</strong>
          <span>Có phát âm</span>
        </div>

      </section>


      {/* CARDS */}

      <main className="vocab-main">

        {filteredVocabulary.length === 0 ? (

          <div className="vocab-empty">

            <div>🔎</div>

            <h2>
              Không tìm thấy từ vựng
            </h2>

            <p>
              Thử từ khóa khác.
            </p>

          </div>

        ) : (

          <div className="vocab-grid">

            {filteredVocabulary.map(
              (item) => (

                <article
                  key={item.id}
                  className="vocab-card"
                >

                  <div className="vocab-card-top">

                    <span>
                      {item.category}
                    </span>

                    <small>
                      {level}
                    </small>

                  </div>


                  <div className="vocab-word">
                    {item.word}
                  </div>


                  <div className="vocab-meaning">
                    {item.meaning}
                  </div>


                  <div className="vocab-example">

                    <span>
                      Ví dụ
                    </span>

                    <p>
                      {item.example}
                    </p>

                  </div>


                  <div className="vocab-card-bottom">

                    <small>
                      {item.word}
                    </small>

                    <button
                      onClick={() =>
                        speak(item.word)
                      }
                    >
                      🔊 Nghe
                    </button>

                  </div>

                </article>

              )
            )}

          </div>

        )}

      </main>

    </div>
  );
}

export default VocabularyPage;
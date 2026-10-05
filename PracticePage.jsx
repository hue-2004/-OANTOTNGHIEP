import { useState } from "react";

const questions = [
  {
    id: 1,
    level: "N5",
    question:
      "わたしは がっこう＿＿ いきます。",
    options: ["を", "に", "で", "が"],
    answer: "に",
    errorType: "Trợ từ",
    explanation:
      "Trợ từ に được dùng để chỉ đích đến khi sử dụng いきます.",
    formula:
      "Địa điểm + に + いきます",
  },

  {
    id: 2,
    level: "N5",
    question:
      "ごはん＿＿ たべます。",
    options: ["を", "に", "で", "へ"],
    answer: "を",
    errorType: "Trợ từ",
    explanation:
      "を đánh dấu đối tượng trực tiếp của hành động.",
    formula:
      "Danh từ + を + Động từ",
  },

  {
    id: 3,
    level: "N5",
    question:
      "わたしは がくせい＿＿。",
    options: ["です", "ます", "でした", "ません"],
    answer: "です",
    errorType: "Ngữ pháp",
    explanation:
      "Danh từ kết hợp với です để giới thiệu hoặc khẳng định.",
    formula:
      "N + です",
  },
];

function PracticePage() {

  const [index, setIndex] = useState(0);
  const [selected, setSelected] =
    useState("");

  const [result, setResult] =
    useState(null);

  const question = questions[index];


  function analyze() {

    if (!selected) {
      alert("Hãy chọn đáp án.");
      return;
    }

    const correct =
      selected === question.answer;

    setResult({
      correct,
      errorType:
        correct
          ? null
          : question.errorType,
      explanation:
        question.explanation,
      formula:
        question.formula,
    });
  }


  function nextQuestion() {

    setIndex(
      (index + 1) % questions.length
    );

    setSelected("");

    setResult(null);
  }


  return (
    <div className="page">

      <div className="page-heading">

        <div>

          <span className="page-badge">
            🤖 AI DIAGNOSIS
          </span>

          <h1>
            Kiểm tra & AI chẩn đoán lỗi
          </h1>

          <p>
            AI phân tích câu trả lời
            và xác định điểm cần cải thiện.
          </p>

        </div>

      </div>


      <div className="practice-layout">

        <div className="practice-card">

          <span className="question-number">
            CÂU {index + 1} / {questions.length}
          </span>

          <h2>
            {question.question}
          </h2>


          <div className="answer-grid">

            {question.options.map(
              (option) => (

                <button
                  key={option}
                  className={
                    selected === option
                      ? "answer-option selected"
                      : "answer-option"
                  }
                  onClick={() =>
                    setSelected(option)
                  }
                >
                  {option}
                </button>

              )
            )}

          </div>


          <button
            className="primary-button"
            onClick={analyze}
          >
            🤖 AI phân tích
          </button>


          {result && (

            <button
              className="secondary-button"
              onClick={nextQuestion}
            >
              Câu tiếp theo →
            </button>

          )}

        </div>


        <div className="ai-analysis-panel">

          {!result ? (

            <div className="ai-empty">

              <div>
                🤖
              </div>

              <h2>
                AI đang chờ
              </h2>

              <p>
                Chọn đáp án và nhấn
                “AI phân tích”.
              </p>

            </div>

          ) : (

            <>

              {result.correct ? (

                <div className="analysis-success">

                  <div>
                    ✓
                  </div>

                  <h2>
                    Chính xác!
                  </h2>

                  <p>
                    Bạn đã trả lời đúng.
                  </p>

                </div>

              ) : (

                <div>

                  <div className="analysis-error">
                    !
                  </div>

                  <span className="error-type">
                    {result.errorType}
                  </span>

                  <h2>
                    AI phát hiện lỗi
                  </h2>


                  <div className="analysis-block">

                    <strong>
                      🔎 Giải thích
                    </strong>

                    <p>
                      {result.explanation}
                    </p>

                  </div>


                  <div className="analysis-block">

                    <strong>
                      📐 Công thức
                    </strong>

                    <div className="formula-box">
                      {result.formula}
                    </div>

                  </div>


                  <button
                    className="primary-button"
                  >
                    🎯 Tạo bài luyện riêng
                  </button>

                </div>

              )}

            </>

          )}

        </div>

      </div>

    </div>
  );
}

export default PracticePage;
import { useParams, Link } from "react-router-dom";
import { lessons } from "../data/lessons";

const sampleVocabulary = [
  {
    word: "わたし",
    meaning: "Tôi",
  },
  {
    word: "がくせい",
    meaning: "Học sinh / sinh viên",
  },
  {
    word: "せんせい",
    meaning: "Giáo viên",
  },
  {
    word: "にほん",
    meaning: "Nhật Bản",
  },
  {
    word: "ともだち",
    meaning: "Bạn bè",
  },
  {
    word: "がっこう",
    meaning: "Trường học",
  },
];

function LessonDetailPage() {
  const { lessonId } = useParams();

  const lesson = lessons.find(
    (item) =>
      item.id === Number(lessonId)
  );

  if (!lesson) {
    return (
      <div className="page">
        <h1>Không tìm thấy bài học.</h1>
      </div>
    );
  }

  return (
    <div className="page">

      <Link
        to="/lessons"
        className="back-link"
      >
        ← Quay lại bài học
      </Link>


      <div className="lesson-detail-header">

        <span className="page-badge">
          {lesson.level} · BÀI{" "}
          {String(lesson.id).padStart(2, "0")}
        </span>

        <h1>
          {lesson.title}
        </h1>

        <p>
          {lesson.description}
        </p>

      </div>


      {/* TỪ VỰNG */}

      <section className="lesson-section">

        <div className="section-heading-left">
          <span>01</span>

          <div>
            <h2>📚 Từ vựng</h2>

            <p>
              Các từ trong bài được viết bằng
              Hiragana hoặc Katakana.
            </p>
          </div>
        </div>


        <div className="vocabulary-grid">

          {sampleVocabulary.map((item) => (

            <div
              className="vocabulary-card"
              key={item.word}
            >

              <div className="vocabulary-word">
                {item.word}
              </div>

              <div className="vocabulary-meaning">
                {item.meaning}
              </div>

              <button>
                🔊
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* NGỮ PHÁP */}

      <section className="lesson-section">

        <div className="section-heading-left">

          <span>02</span>

          <div>
            <h2>📖 Ngữ pháp</h2>

            <p>
              Công thức và cách sử dụng.
            </p>
          </div>

        </div>


        <div className="grammar-main-card">

          <div className="grammar-name">
            ～です
          </div>

          <div className="grammar-formula">
            N + です
          </div>

          <p>
            Dùng để giới thiệu,
            khẳng định hoặc mô tả.
          </p>


          <div className="lesson-example">

            <strong>
              わたしは がくせいです。
            </strong>

            <span>
              Tôi là sinh viên.
            </span>

          </div>

        </div>

      </section>


      {/* BÀI TẬP */}

      <section className="lesson-section">

        <div className="section-heading-left">

          <span>03</span>

          <div>
            <h2>📝 Bài tập củng cố</h2>

            <p>
              Kiểm tra từ vựng và ngữ pháp.
            </p>
          </div>

        </div>


        <div className="exercise-box">

          <h3>
            わたしは ______ です。
          </h3>

          <button>
            がくせい
          </button>

          <button>
            にほん
          </button>

          <button>
            せんせい
          </button>

          <button>
            ともだち
          </button>

        </div>


        <Link
          to={`/practice?lesson=${lesson.id}`}
          className="primary-button"
        >
          🤖 Làm bài & nhận AI phân tích
        </Link>

      </section>

    </div>
  );
}

export default LessonDetailPage;
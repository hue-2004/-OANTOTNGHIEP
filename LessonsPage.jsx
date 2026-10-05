import { useState } from "react";
import { Link } from "react-router-dom";

const lessons = Array.from(
  { length: 50 },
  (_, index) => {
    const number = index + 1;

    return {
      id: number,
      level: number <= 25 ? "N5" : "N4",
      title:
        number <= 25
          ? `Bài ${number} - Tiếng Nhật N5`
          : `Bài ${number} - Tiếng Nhật N4`,
      description:
        number <= 25
          ? "Từ vựng, ngữ pháp và bài tập cơ bản."
          : "Từ vựng, ngữ pháp và bài tập trình độ N4.",
    };
  }
);

function LessonsPage() {

  const [level, setLevel] = useState("N5");

  const currentLessons = lessons.filter(
    (lesson) => lesson.level === level
  );

  return (
    <div className="lessons-page">

      {/* HEADER */}

      <section className="lessons-header">

        <div className="lessons-header-inner">

          <div>

            <span className="lessons-badge">
              📖 BÀI HỌC JAPANESE AI
            </span>

            <h1>
              Học tiếng Nhật
              <br />
              <span>N5 → N4</span>
            </h1>

            <p>
              Lộ trình gồm 50 bài học được tổ chức
              từ cơ bản đến sơ trung cấp.
            </p>

          </div>


          {/* LEVEL */}

          <div className="lesson-level-switch">

            <button
              className={
                level === "N5"
                  ? "lesson-level active"
                  : "lesson-level"
              }
              onClick={() => setLevel("N5")}
            >
              N5
              <small>Bài 01 – 25</small>
            </button>

            <button
              className={
                level === "N4"
                  ? "lesson-level active"
                  : "lesson-level"
              }
              onClick={() => setLevel("N4")}
            >
              N4
              <small>Bài 26 – 50</small>
            </button>

          </div>

        </div>

      </section>


      {/* SUMMARY */}

      <section className="lessons-summary">

        <div className="lesson-summary-card">

          <div className="summary-icon">
            📚
          </div>

          <div>
            <strong>
              {level === "N5"
                ? "25 bài"
                : "25 bài"}
            </strong>

            <span>
              Lộ trình {level}
            </span>
          </div>

        </div>


        <div className="lesson-summary-card">

          <div className="summary-icon">
            🎯
          </div>

          <div>
            <strong>
              {level === "N5"
                ? "01 → 25"
                : "26 → 50"}
            </strong>

            <span>
              Phạm vi bài học
            </span>
          </div>

        </div>


        <div className="lesson-summary-card">

          <div className="summary-icon">
            🤖
          </div>

          <div>
            <strong>
              AI
            </strong>

            <span>
              Phân tích lỗi
            </span>
          </div>

        </div>

      </section>


      {/* LESSON LIST */}

      <section className="lesson-list-section">

        <div className="lesson-section-heading">

          <div>

            <span>
              {level === "N5"
                ? "N5 · BÀI 01 → 25"
                : "N4 · BÀI 26 → 50"}
            </span>

            <h2>
              Chọn bài học
            </h2>

          </div>

          <p>
            Học từ vựng → ngữ pháp →
            bài tập → AI phân tích.
          </p>

        </div>


        <div className="lesson-list-grid">

          {currentLessons.map(
            (lesson) => (

              <Link
                key={lesson.id}
                to={`/lessons/${lesson.id}`}
                className="lesson-item"
              >

                <div className="lesson-number-box">
                  {String(
                    lesson.id
                  ).padStart(2, "0")}
                </div>


                <div className="lesson-item-content">

                  <div className="lesson-item-top">

                    <span>
                      {lesson.level}
                    </span>

                    <small>
                      → 
                    </small>

                  </div>


                  <h3>
                    {lesson.title}
                  </h3>


                  <p>
                    {lesson.description}
                  </p>

                </div>

              </Link>

            )
          )}

        </div>

      </section>


      {/* BOTTOM INFO */}

      <section className="lessons-bottom">

        <div className="lessons-bottom-icon">
          ⛩
        </div>

        <div>

          <strong>
            Học theo lộ trình N5 → N4
          </strong>

          <p>
            Hoàn thành từng bài để xây dựng
            tiến độ cá nhân hóa.
          </p>

        </div>

      </section>

    </div>
  );
}

export default LessonsPage;
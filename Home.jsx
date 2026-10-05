import { Link } from "react-router-dom";
import japanHero from "../assets/japan-hero.png";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HEADER ================= */}

      <header className="main-header">

        <div className="header-inner">

          <Link to="/" className="logo-area">

            <div className="logo-box">
              日
            </div>

            <div className="logo-text">

              <div className="logo-title">
                Japanese<span>AI</span>
              </div>

              <div className="logo-subtitle">
                N5 → N4 | Learn with AI
              </div>

            </div>

          </Link>


          <nav className="main-nav">

            <Link
              to="/"
              className="nav-item active"
            >
              🏠 Trang chủ
            </Link>

            <Link
              to="/lessons"
              className="nav-item"
            >
              📖 Bài học
            </Link>

            <Link
              to="/vocabulary"
              className="nav-item"
            >
              🔤 Từ vựng
            </Link>

            <Link
              to="/kanji"
              className="nav-item"
            >
              漢 Kanji
            </Link>

            <Link
              to="/grammar"
              className="nav-item"
            >
              📘 Ngữ pháp
            </Link>

            <Link
              to="/practice"
              className="nav-item"
            >
              🤖 Kiểm tra AI
            </Link>

            <Link
              to="/kaiwa"
              className="nav-item"
            >
              💬 Kaiwa
            </Link>

            <Link
              to="/progress"
              className="nav-item"
            >
              🎯 Tiến độ
            </Link>

          </nav>


          <Link
            to="/login"
            className="login-button"
          >
            👤 Đăng nhập
          </Link>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero-section">

        <img
          src={japanHero}
          alt="Japanese landscape"
          className="hero-bg-image"
        />

        <div className="hero-dark-overlay"></div>


        {/* CỜ NHẬT */}

        <div className="flag-japan">
          <div className="flag-circle"></div>
        </div>


        <div className="hero-inner">

          {/* LEFT */}

          <div className="hero-left">

            <div className="hero-badge">
              🤖 AI JAPANESE LEARNING
            </div>

            <h1>
              Học tiếng Nhật
              <br />
              <span>từ N5 đến N4</span>
            </h1>

            <p>
              JapaneseAI giúp bạn học theo 50 bài học,
              luyện từ vựng, ngữ pháp, Kanji,
              hội thoại Kaiwa và nhận phân tích lỗi
              bằng AI.
            </p>


            <div className="hero-buttons">

              <Link
                to="/lessons"
                className="hero-primary-button"
              >
                🚀 Bắt đầu học →
              </Link>

              <Link
                to="/practice"
                className="hero-secondary-button"
              >
                🤖 Kiểm tra với AI
              </Link>

            </div>


            <div className="hero-stats">

              <div>
                <strong>50</strong>
                <span>Bài học</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Cá nhân hóa</span>
              </div>

              <div>
                <strong>N5 → N4</strong>
                <span>Lộ trình rõ ràng</span>
              </div>

            </div>

          </div>


          {/* RIGHT AI CARD */}

          <div className="hero-right">

            <div className="ai-card">

              <div className="ai-card-header">

                <div className="ai-avatar">
                  日
                </div>

                <div className="ai-name">

                  <strong>
                    Japanese AI
                  </strong>

                  <small>
                    AI Learning Assistant
                  </small>

                </div>

                <div className="online">
                  ● Online
                </div>

              </div>


              <div className="ai-progress-heading">

                <span>
                  Tiến độ N5
                </span>

                <strong>
                  72%
                </strong>

              </div>


              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{ width: "72%" }}
                ></div>

              </div>


              <div className="ai-suggestion">

                <div className="suggestion-icon">
                  💡
                </div>

                <div>

                  <strong>
                    AI đề xuất
                  </strong>

                  <p>
                    Bạn nên luyện thêm trợ từ
                    「は」 và 「が」.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SYSTEM ================= */}

      <section className="system-section">

        <div className="system-inner">


          {/* LEFT INTRO */}

          <div className="system-intro">

            <div className="system-label">
              ✦ HỆ THỐNG JAPANESE AI
            </div>

            <h2>
              Một hành trình học,
              <br />
              một hệ thống thông minh
            </h2>

            <p>
              Học N5 → N4 với nội dung được
              tổ chức thành bài học, luyện tập
              và AI cá nhân hóa.
            </p>

          </div>


          {/* RIGHT CARDS */}

          <div className="system-cards">


            <SystemCard
              icon="📖"
              iconClass="red"
              title="50 bài học"
              text={
                <>
                  N5 gồm bài 1–25,
                  <br />
                  N4 gồm bài 26–50.
                </>
              }
              link="/lessons"
            />


            <SystemCard
              icon="あ"
              iconClass="blue"
              title="Từ vựng"
              text={
                <>
                  Hiragana và Katakana,
                  <br />
                  không hiển thị Kanji.
                </>
              }
              link="/vocabulary"
            />


            <SystemCard
              icon="📄"
              iconClass="green"
              title="Ngữ pháp"
              text={
                <>
                  Công thức, giải thích,
                  <br />
                  ví dụ và bài tập.
                </>
              }
              link="/grammar"
            />


            <SystemCard
              icon="漢"
              iconClass="orange"
              title="Kanji riêng"
              text={
                <>
                  Kanji được tách thành
                  <br />
                  module học riêng.
                </>
              }
              link="/kanji"
            />


            <SystemCard
              icon="🤖"
              iconClass="purple"
              title="AI chẩn đoán lỗi"
              text={
                <>
                  Phân tích lỗi từ vựng,
                  <br />
                  ngữ pháp và trợ từ.
                </>
              }
              link="/practice"
            />


            <SystemCard
              icon="💬"
              iconClass="cyan"
              title="Kaiwa AI"
              text={
                <>
                  Luyện hội thoại tiếng Nhật
                  <br />
                  theo trình độ N5 hoặc N4.
                </>
              }
              link="/kaiwa"
            />

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="bottom-cta">

        <div className="cta-left">

          <div className="cta-icon">
            ⛩
          </div>

          <div>

            <strong>
              Bắt đầu hành trình N5 → N4
            </strong>

            <p>
              Cùng JapaneseAI chinh phục tiếng Nhật!
            </p>

          </div>

        </div>


        <Link
          to="/lessons"
          className="cta-button"
        >
          Bắt đầu học →
        </Link>

      </section>

    </div>
  );
}


function SystemCard({
  icon,
  iconClass,
  title,
  text,
  link,
}) {
  return (
    <Link
      to={link}
      className="system-card"
    >

      <div
        className={`system-icon ${iconClass}`}
      >
        {icon}
      </div>

      <div className="system-card-content">

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

      <span className="system-arrow">
        ›
      </span>

    </Link>
  );
}

export default Home;
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="brand">
          <div className="brand-mark">
            日
          </div>

          <div className="brand-text">
            <strong>
              Japanese<span>AI</span>
            </strong>

            <small>
              N5 → N4 | Learn with AI
            </small>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            🏠 Trang chủ
          </NavLink>

          <NavLink to="/lessons" className="nav-link">
            📖 Bài học
          </NavLink>

          <NavLink to="/kanji" className="nav-link">
            漢 Kanji
          </NavLink>

          <NavLink to="/practice" className="nav-link">
            ◎ Kiểm tra AI
          </NavLink>

          <NavLink to="/kaiwa" className="nav-link">
            💬 Kaiwa
          </NavLink>

          <NavLink to="/progress" className="nav-link">
            🎯 Tiến độ
          </NavLink>
        </nav>

        <Link to="/login" className="login-button">
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
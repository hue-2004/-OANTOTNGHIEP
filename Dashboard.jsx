function Dashboard() {
  return (
    <div className="page">

      <span className="page-badge">
        📊 DASHBOARD
      </span>

      <h1>
        Xin chào, Học viên! 👋
      </h1>

      <p>
        Theo dõi tiến độ N5 → N4
        và lộ trình do AI đề xuất.
      </p>

      <div className="stats-grid">

        <div className="stat-box">
          <strong>72%</strong>
          <span>Tiến độ N5</span>
        </div>

        <div className="stat-box">
          <strong>128</strong>
          <span>Từ vựng</span>
        </div>

        <div className="stat-box">
          <strong>45</strong>
          <span>Kanji</span>
        </div>

        <div className="stat-box">
          <strong>58%</strong>
          <span>Ngữ pháp</span>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
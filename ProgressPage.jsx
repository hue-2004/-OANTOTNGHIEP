const skills = [
  {
    name: "Từ vựng",
    value: 82,
  },
  {
    name: "Kanji",
    value: 70,
  },
  {
    name: "Ngữ pháp",
    value: 58,
  },
  {
    name: "Trợ từ",
    value: 43,
  },
  {
    name: "Kaiwa",
    value: 60,
  },
];

function ProgressPage() {

  const weakest = skills.reduce(
    (prev, current) =>
      current.value < prev.value
        ? current
        : prev
  );

  return (
    <div className="page">

      <div className="page-heading">

        <div>

          <span className="page-badge">
            🎯 PROGRESS
          </span>

          <h1>
            Tiến độ & lộ trình AI
          </h1>

          <p>
            Hệ thống phân tích kết quả
            để đề xuất nội dung tiếp theo.
          </p>

        </div>

      </div>


      <div className="progress-page-grid">

        <section className="dashboard-card">

          <h2>
            📊 Kỹ năng
          </h2>

          {skills.map((skill) => (

            <div
              className="skill-row"
              key={skill.name}
            >

              <div>
                <span>
                  {skill.name}
                </span>

                <strong>
                  {skill.value}%
                </strong>
              </div>

              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{
                    width:
                      `${skill.value}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </section>


        <section className="dashboard-card">

          <h2>
            🤖 AI Learning Path
          </h2>

          <div className="ai-path">

            <span>
              Điểm yếu hiện tại
            </span>

            <strong>
              {weakest.name}
            </strong>

            <p>
              Mức độ hiện tại: {weakest.value}%
            </p>

            <p>
              AI đề xuất ưu tiên luyện
              nhóm kiến thức này trước.
            </p>

            <button className="primary-button">
              Bắt đầu lộ trình
            </button>

          </div>

        </section>

      </div>

    </div>
  );
}

export default ProgressPage;
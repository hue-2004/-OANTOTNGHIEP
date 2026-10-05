export const grammarData = {
  N5: [
    {
      id: "N5-G01",
      title: "です",
      structure: "N + です",
      meaning: "Là / thì là",
      example: "私は学生です。",
      translation: "Tôi là sinh viên.",
      explanation:
        "Dùng để khẳng định hoặc giới thiệu danh tính, nghề nghiệp, trạng thái.",
      tags: ["です", "cơ bản"],
    },

    {
      id: "N5-G02",
      title: "ではありません",
      structure: "N + ではありません",
      meaning: "Không phải là",
      example: "私は先生ではありません。",
      translation: "Tôi không phải giáo viên.",
      explanation:
        "Dạng phủ định lịch sự của です.",
      tags: ["phủ định"],
    },

    {
      id: "N5-G03",
      title: "これ・それ・あれ",
      structure: "これ / それ / あれ",
      meaning: "Cái này / cái đó / cái kia",
      example: "これは本です。",
      translation: "Đây là quyển sách.",
      explanation:
        "Dùng để chỉ đồ vật theo khoảng cách với người nói và người nghe.",
      tags: ["chỉ định"],
    },

    {
      id: "N5-G04",
      title: "N の N",
      structure: "N1 の N2",
      meaning: "N2 thuộc về N1",
      example: "これは私の本です。",
      translation: "Đây là sách của tôi.",
      explanation:
        "Trợ từ の dùng để nối hai danh từ.",
      tags: ["の"],
    },

    {
      id: "N5-G05",
      title: "も",
      structure: "N + も",
      meaning: "Cũng",
      example: "私も学生です。",
      translation: "Tôi cũng là sinh viên.",
      explanation:
        "も thay thế は/が/を trong nhiều trường hợp để diễn đạt ý cũng.",
      tags: ["trợ từ"],
    },

    {
      id: "N5-G06",
      title: "を + Vます",
      structure: "N を Vます",
      meaning: "Làm hành động lên đối tượng",
      example: "ごはんを食べます。",
      translation: "Tôi ăn cơm.",
      explanation:
        "を đánh dấu đối tượng trực tiếp của hành động.",
      tags: ["trợ từ", "を"],
    },

    {
      id: "N5-G07",
      title: "に行きます",
      structure: "Địa điểm + に + 行きます",
      meaning: "Đi đến",
      example: "学校に行きます。",
      translation: "Tôi đi đến trường.",
      explanation:
        "に chỉ đích đến với 行きます.",
      tags: ["trợ từ", "に"],
    },

    {
      id: "N5-G08",
      title: "へ行きます",
      structure: "Địa điểm + へ + 行きます",
      meaning: "Đi về hướng",
      example: "日本へ行きます。",
      translation: "Tôi đi Nhật.",
      explanation:
        "へ nhấn mạnh hướng di chuyển.",
      tags: ["trợ từ", "へ"],
    },

    {
      id: "N5-G09",
      title: "～たいです",
      structure: "Vます bỏ ます + たいです",
      meaning: "Muốn làm gì",
      example: "日本へ行きたいです。",
      translation: "Tôi muốn đi Nhật.",
      explanation:
        "Diễn đạt mong muốn của người nói.",
      tags: ["mong muốn"],
    },

    {
      id: "N5-G10",
      title: "～てください",
      structure: "Vて + ください",
      meaning: "Hãy làm...",
      example: "見てください。",
      translation: "Hãy xem.",
      explanation:
        "Dùng để yêu cầu hoặc nhờ vả lịch sự.",
      tags: ["て-form"],
    },

    {
      id: "N5-G11",
      title: "～てもいいです",
      structure: "Vて + もいいです",
      meaning: "Được phép",
      example: "ここに座ってもいいです。",
      translation: "Có thể ngồi ở đây.",
      explanation:
        "Dùng để xin phép hoặc cho phép.",
      tags: ["て-form"],
    },

    {
      id: "N5-G12",
      title: "～てはいけません",
      structure: "Vて + はいけません",
      meaning: "Không được",
      example: "ここで写真を撮ってはいけません。",
      translation: "Không được chụp ảnh ở đây.",
      explanation:
        "Diễn đạt điều cấm.",
      tags: ["cấm"],
    },
  ],

  N4: [
    {
      id: "N4-G01",
      title: "～と思います",
      structure: "普通形 + と思います",
      meaning: "Tôi nghĩ rằng...",
      example: "明日は雨だと思います。",
      translation: "Tôi nghĩ ngày mai trời mưa.",
      explanation:
        "Dùng để nêu suy nghĩ hoặc ý kiến cá nhân.",
      tags: ["ý kiến"],
    },

    {
      id: "N4-G02",
      title: "～たことがあります",
      structure: "Vた + ことがあります",
      meaning: "Đã từng",
      example: "日本へ行ったことがあります。",
      translation: "Tôi đã từng đi Nhật.",
      explanation:
        "Diễn đạt kinh nghiệm từng xảy ra trong quá khứ.",
      tags: ["kinh nghiệm"],
    },

    {
      id: "N4-G03",
      title: "～たり～たりします",
      structure: "Vたり、Vたりします",
      meaning: "Làm những việc như...",
      example: "本を読んだり、音楽を聞いたりします。",
      translation: "Tôi đọc sách, nghe nhạc và làm những việc khác.",
      explanation:
        "Liệt kê một số hành động tiêu biểu.",
      tags: ["liệt kê"],
    },

    {
      id: "N4-G04",
      title: "～ながら",
      structure: "Vます + ながら",
      meaning: "Vừa... vừa...",
      example: "音楽を聞きながら勉強します。",
      translation: "Tôi vừa nghe nhạc vừa học.",
      explanation:
        "Hai hành động diễn ra đồng thời.",
      tags: ["đồng thời"],
    },

    {
      id: "N4-G05",
      title: "～ので",
      structure: "普通形 + ので",
      meaning: "Vì / bởi vì",
      example: "雨なので、出かけません。",
      translation: "Vì trời mưa nên tôi không ra ngoài.",
      explanation:
        "Dùng để nêu nguyên nhân một cách mềm hơn から.",
      tags: ["nguyên nhân"],
    },

    {
      id: "N4-G06",
      title: "～なければなりません",
      structure: "Vなければなりません",
      meaning: "Phải",
      example: "勉強しなければなりません。",
      translation: "Phải học.",
      explanation:
        "Diễn đạt nghĩa vụ hoặc điều bắt buộc.",
      tags: ["nghĩa vụ"],
    },

    {
      id: "N4-G07",
      title: "～たほうがいいです",
      structure: "Vた + ほうがいいです",
      meaning: "Nên làm",
      example: "もっと勉強したほうがいいです。",
      translation: "Bạn nên học nhiều hơn.",
      explanation:
        "Đưa ra lời khuyên.",
      tags: ["lời khuyên"],
    },

    {
      id: "N4-G08",
      title: "～かもしれません",
      structure: "普通形 + かもしれません",
      meaning: "Có lẽ / có thể",
      example: "明日は雨かもしれません。",
      translation: "Ngày mai có thể mưa.",
      explanation:
        "Diễn đạt khả năng chưa chắc chắn.",
      tags: ["khả năng"],
    },

    {
      id: "N4-G09",
      title: "～ことができます",
      structure: "V辞書形 + ことができます",
      meaning: "Có thể làm",
      example: "日本語を話すことができます。",
      translation: "Tôi có thể nói tiếng Nhật.",
      explanation:
        "Diễn đạt khả năng hoặc kỹ năng.",
      tags: ["khả năng"],
    },

    {
      id: "N4-G10",
      title: "～ようになります",
      structure: "V辞書形 + ようになります",
      meaning: "Trở nên có thể / bắt đầu",
      example: "日本語が話せるようになりました。",
      translation: "Tôi đã trở nên có thể nói tiếng Nhật.",
      explanation:
        "Diễn đạt sự thay đổi về khả năng hoặc trạng thái.",
      tags: ["thay đổi"],
    },

    {
      id: "N4-G11",
      title: "～てみます",
      structure: "Vて + みます",
      meaning: "Thử làm",
      example: "食べてみます。",
      translation: "Tôi sẽ thử ăn.",
      explanation:
        "Dùng khi thử thực hiện một hành động.",
      tags: ["thử"],
    },

    {
      id: "N4-G12",
      title: "～すぎます",
      structure: "Vます / A + すぎます",
      meaning: "Quá...",
      example: "このかばんは高すぎます。",
      translation: "Chiếc túi này quá đắt.",
      explanation:
        "Diễn đạt mức độ vượt quá mức bình thường.",
      tags: ["mức độ"],
    },
  ],
};
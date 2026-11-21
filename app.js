// Data for each organelle
const organelles = {
  "nhan": {
    title: "Nhân",
    role: "Trung tâm điều khiển tế bào",
    img: "images/nucleus.png",
    structure: [
      "Màng nhân kép có lỗ màng.",
      "Bên trong chứa chất nhiễm sắc (DNA) và hạch nhân."
    ],
    function: [
      "Chứa và bảo quản thông tin di truyền.",
      "Điều khiển các hoạt động sống của tế bào.",
      "Hạch nhân tổng hợp rRNA và tham gia hình thành ribosome."
    ],
    subs: [
      { name: "Màng nhân (màng ngoài & màng trong)", content: "Màng kép có lỗ màng cho phép trao đổi vật chất giữa nhân và tế bào chất." },
      { name: "Nhân con (hạch nhân)", content: "Nơi tổng hợp rRNA và lắp ráp các tiểu đơn vị của ribosome." },
      { name: "Chất nhiễm sắc", content: "Gồm dị nhiễm sắc và thường nhiễm sắc, chứa DNA liên kết với protein histon." },
      { name: "Dịch nhân", content: "Môi trường bên trong nhân, chứa các chất hòa tan và hỗ trợ các phản ứng." },
      { name: "Lỗ màng nhân", content: "Cho phép RNA và protein ra vào nhân một cách chọn lọc." }
    ]
  },
  "mang-nhan": {
    title: "Màng nhân",
    role: "Bao bọc và bảo vệ vật liệu di truyền",
    img: "images/nucleus.png",
    structure: ["Màng kép (màng ngoài và màng trong) có lỗ màng."],
    function: ["Ngăn cách chất nhân với tế bào chất.", "Điều khiển sự trao đổi vật chất qua lỗ màng."],
    subs: []
  },
  "ribosome": {
    title: "Ribosome",
    role: "Nhà máy tổng hợp protein",
    img: "images/ribosome.png",
    structure: [
      "Không có màng bao bọc.",
      "Gồm rRNA (chiếm 80–90%) và protein.",
      "Có 2 tiểu đơn vị: tiểu phần lớn và tiểu phần nhỏ.",
      "Dạng hình cầu, đường kính khoảng 150 Å."
    ],
    function: ["Là nơi diễn ra quá trình tổng hợp protein."],
    subs: [
      { name: "Tiểu phần lớn", content: "Chứa trung tâm xúc tác peptide transferase, giúp nối các amino acid." },
      { name: "Tiểu phần nhỏ", content: "Nhận biết và gắn mRNA, khởi đầu quá trình dịch mã." }
    ]
  },
  "luoi-noi-chat-hat": {
    title: "Lưới nội chất hạt",
    role: "Tổng hợp và vận chuyển protein",
    img: "images/er.png",
    structure: ["Có ribosome bám trên màng.", "Hệ thống ống và túi dẹp nối thông nhau."],
    function: ["Tổng hợp, biến đổi và vận chuyển protein."],
    subs: []
  },
  "luoi-noi-chat-tron": {
    title: "Lưới nội chất trơn",
    role: "Tổng hợp lipid và khử độc",
    img: "images/er.png",
    structure: ["Có ít hoặc không có ribosome."],
    function: ["Tổng hợp lipid, chuyển hóa đường, khử độc, dự trữ Ca²⁺."],
    subs: []
  },
  "luoi-noi-chat": {
    title: "Lưới nội chất",
    role: "Hệ thống tổng hợp và vận chuyển",
    img: "images/er.png",
    structure: [
      "Hệ thống màng gồm các ống và túi dẹp nối thông nhau.",
      "Gồm 2 loại: lưới nội chất hạt và lưới nội chất trơn."
    ],
    function: [],
    table: [
      ["Loại", "Cấu tạo", "Chức năng"],
      ["Lưới nội chất hạt", "Có ribosome bám trên màng", "Tổng hợp, vận chuyển protein"],
      ["Lưới nội chất trơn", "Có ít hoặc không có ribosome", "Tổng hợp lipid, chuyển hóa đường, khử độc, dự trữ Ca²⁺"]
    ],
    subs: [
      { name: "Xoang lưới nội chất", content: "Khoảng trống bên trong hệ thống màng, nơi protein và lipid được vận chuyển." },
      { name: "Ribosome bám", content: "Nơi tổng hợp protein tiết hoặc protein màng." }
    ]
  },
  "golgi": {
    title: "Bộ máy Golgi",
    role: "Phân loại và đóng gói",
    img: "images/golgi.png",
    structure: ["Các túi dẹp màng xếp chồng, tách rời nhau.", "Có mặt cis (nhận) và mặt trans (xuất)."],
    function: ["Chế biến, hoàn thiện, đóng gói và phân phối protein, lipid đến các vị trí cần thiết hoặc xuất bào."],
    subs: [
      { name: "Mặt cis", content: "Mặt nhận túi vận chuyển từ lưới nội chất." },
      { name: "Mặt trans", content: "Mặt xuất túi tiết và túi vận chuyển đến đích." },
      { name: "Các túi dẹt (cisternae)", content: "Nơi protein được biến đổi (gắn đường, cắt bớt...)." },
      { name: "Túi tiết / túi vận chuyển", content: "Mang sản phẩm đến màng tế bào hoặc các bào quan khác." }
    ]
  },
  "lysosome": {
    title: "Lysosome",
    role: "Túi tiêu hóa và tái chế",
    img: "images/lysosome.png",
    structure: ["Túi có màng đơn, chứa enzyme thủy phân."],
    function: [
      "Phân giải thức ăn, bào quan già và tế bào bị tổn thương.",
      "Tái chế các thành phần có thể sử dụng lại."
    ],
    subs: [
      { name: "Màng lysosome", content: "Bảo vệ tế bào chất khỏi enzyme tiêu hóa bên trong." },
      { name: "Enzyme thủy phân", content: "Phân giải protein, lipid, carbohydrate, nucleic acid." },
      { name: "Protein vận chuyển", content: "Giúp vận chuyển sản phẩm phân giải ra ngoài lysosome." }
    ]
  },
  "khong-bao": {
    title: "Không bào",
    role: "Túi chứa đa năng",
    img: "images/vacuole.png",
    structure: ["Túi có màng đơn, chứa dịch không bào; thường lớn ở tế bào thực vật."],
    function: [
      "Dự trữ nước, ion, chất dinh dưỡng và sắc tố.",
      "Điều hòa áp suất thẩm thấu, duy trì sức trương.",
      "Có thể chứa enzyme tiêu hóa hoặc chất thải."
    ],
    subs: [
      { name: "Màng không bào (tonoplast)", content: "Kiểm soát sự ra vào của các chất." },
      { name: "Dịch bào", content: "Chứa nước, ion, đường, sắc tố, chất thải..." },
      { name: "Không bào trung tâm", content: "Đặc trưng của tế bào thực vật trưởng thành, chiếm phần lớn thể tích tế bào." }
    ]
  },
  "peroxisome": {
    title: "Peroxysome (Peroxisome)",
    role: "Bào quan giải độc",
    img: "images/peroxisome.png",
    structure: ["Dạng hình cầu, có màng đơn, chứa enzyme."],
    function: [
      "Phân giải H₂O₂, góp phần bảo vệ tế bào.",
      "Chuyển hóa lipid.",
      "Ở thực vật, glyoxysome tham gia chuyển hóa acid béo."
    ],
    subs: [
      { name: "Màng peroxisome", content: "Bao bọc và kiểm soát trao đổi chất." },
      { name: "Vùng lõi / tinh thể enzyme", content: "Chứa các enzyme như catalase, oxidase." }
    ]
  },
  "ti-the": {
    title: "Ti thể (Ty thể)",
    role: "Nhà máy năng lượng",
    img: "images/mitochondria.png",
    structure: [
      "Có 2 lớp màng: màng ngoài trơn nhẵn, màng trong gấp nếp tạo mào.",
      "Chất nền chứa enzyme, DNA dạng vòng và ribosome."
    ],
    function: ["Là nơi diễn ra hô hấp tế bào, tổng hợp ATP cung cấp năng lượng cho hoạt động sống."],
    subs: [
      { name: "Màng ngoài", content: "Thông qua porin, cho phép nhiều phân tử nhỏ đi qua." },
      { name: "Màng trong / Mào", content: "Chứa chuỗi truyền electron và ATP synthase." },
      { name: "Chất nền (matrix)", content: "Chứa enzyme chu trình Krebs, DNA ty thể, ribosome." },
      { name: "DNA ty thể", content: "Mã hóa một số protein của chuỗi hô hấp." },
      { name: "Xoang gian màng", content: "Nơi tích tụ H⁺ tạo gradient proton." }
    ]
  },
  "luc-lap": {
    title: "Lục lạp",
    role: "Bào quan quang hợp",
    img: "images/chloroplast.png",
    structure: [
      "Có 2 lớp màng, trong suốt giúp ánh sáng đi qua dễ dàng.",
      "Bên trong có hệ thống túi dẹt thylakoid chứa sắc tố quang hợp ở màng, xếp chồng thành granum → thực hiện pha sáng.",
      "Chất nền (stroma) có enzyme, DNA và ribosome → thực hiện pha tối."
    ],
    function: ["Hấp thụ năng lượng ánh sáng, thực hiện quang hợp, tổng hợp chất hữu cơ."],
    subs: [
      { name: "Màng ngoài & màng trong", content: "Bao bọc lục lạp, kiểm soát trao đổi chất." },
      { name: "Thylakoid / Hạt grana", content: "Nơi xảy ra phản ứng phụ thuộc ánh sáng (pha sáng)." },
      { name: "Stroma (chất nền)", content: "Nơi xảy ra chu trình Calvin (pha tối)." },
      { name: "Phiến stroma", content: "Nối các grana với nhau." }
    ]
  },
  "te-bao-chat": {
    title: "Tế bào chất và bộ khung xương tế bào",
    role: "Môi trường sống và khung nâng đỡ",
    img: "images/cytoskeleton.png",
    structure: [],
    function: [],
    blocks: [
      {
        title: "a. Tế bào chất",
        structure: ["Gồm bào tương và các bào quan."],
        function: ["Là nơi diễn ra phần lớn hoạt động sống và phản ứng chuyển hóa của tế bào."]
      },
      {
        title: "b. Bộ khung xương tế bào",
        structure: ["Gồm vi ống, vi sợi và sợi trung gian."],
        function: ["Nâng đỡ, duy trì hình dạng tế bào, neo giữ bào quan, hỗ trợ vận chuyển và phân bào, hình thành nên trung thể."]
      }
    ],
    subs: [
      { name: "Vi ống", content: "Ống rỗng từ tubulin, tham gia vận chuyển, hình thành thoi phân bào, cấu trúc lông/roi." },
      { name: "Vi sợi (microfilament)", content: "Từ actin, giúp co cơ, thay đổi hình dạng tế bào, phân bào." },
      { name: "Sợi trung gian", content: "Cung cấp độ bền cơ học, neo giữ bào quan." }
    ]
  },
  "trung-the": {
    title: "Trung thể",
    role: "Tổ chức vi ống và thoi phân bào",
    img: "images/centrosome.png",
    structure: ["Gồm 2 trung tử vuông góc nhau, mỗi trung tử có các bộ ba vi ống xếp thành vòng."],
    function: ["Tổ chức vi ống, hình thành thoi phân bào ở tế bào động vật."],
    subs: [
      { name: "Trung tử", content: "Cấu trúc hình trụ từ 9 bộ ba vi ống." },
      { name: "Chất quanh trung tử", content: "Nơi khởi đầu sự lắp ráp vi ống." }
    ]
  },
  "mang-te-bao": {
    title: "Màng tế bào",
    role: "Hàng rào bảo vệ và kiểm soát",
    img: "images/membrane.png",
    structure: [
      "Theo mô hình khảm động, gồm lớp kép phospholipid và protein màng; ngoài ra có cholesterol, carbohydrate.",
      "Protein xuyên màng: nằm xuyên qua lớp phospholipid.",
      "Protein bám màng: liên kết với một phía của màng."
    ],
    function: [
      "Bao bọc, ngăn cách tế bào với môi trường.",
      "Kiểm soát chọn lọc các chất ra vào tế bào.",
      "Tiếp nhận và truyền tín hiệu.",
      "Nhận diện, liên kết tế bào và duy trì hình dạng tế bào."
    ],
    subs: [
      { name: "Lớp kép phospholipid", content: "Tạo hàng rào kỵ nước, cho phép khuếch tán chất tan trong lipid." },
      { name: "Protein xuyên màng", content: "Kênh, bơm, thụ thể vận chuyển và truyền tín hiệu." },
      { name: "Protein bám màng", content: "Thường gắn với cytoskeleton hoặc enzyme." },
      { name: "Carbohydrate (glycoprotein/glycolipid)", content: "Nhận diện tế bào, gắn kết." }
    ]
  },
  "mang-sinh-chat": {
    title: "Màng sinh chất",
    role: "Hàng rào bảo vệ và kiểm soát",
    img: "images/membrane.png",
    structure: [
      "Theo mô hình khảm động, gồm lớp kép phospholipid và protein màng; ngoài ra có cholesterol, carbohydrate."
    ],
    function: [
      "Bao bọc, ngăn cách tế bào với môi trường.",
      "Kiểm soát chọn lọc các chất ra vào tế bào.",
      "Tiếp nhận và truyền tín hiệu."
    ],
    subs: []
  },
  "thanh-te-bao": {
    title: "Thành tế bào",
    role: "Bảo vệ và định hình",
    img: "images/cellwall.png",
    structure: [
      "Thực vật: chủ yếu cellulose (xenlulozo), ngoài ra có hemicellulose, pectin, lignin.",
      "Nấm: chủ yếu chitin."
    ],
    function: ["Bảo vệ, nâng đỡ và định hình tế bào."],
    subs: [
      { name: "Lớp cutin", content: "Lớp ngoài cùng, hạn chế mất nước." },
      { name: "Thành phần xenlulozo", content: "Sợi bền chắc tạo khung xương chính." },
      { name: "Hemicellulose & Pectin", content: "Liên kết các sợi cellulose, tạo độ đàn hồi." },
      { name: "Lignin", content: "Làm cứng thành tế bào ở mô nâng đỡ." }
    ]
  },
  "long-roi": {
    title: "Lông và roi",
    role: "Bộ phận vận động, truyền tín hiệu",
    img: "images/cilia.png",
    structure: ["Các cấu trúc dạng sợi nhỏ nhô ra khỏi màng tế bào, được cấu tạo từ vi ống."],
    function: [
      "Giúp tế bào di chuyển hoặc tạo dòng chất lỏng.",
      "Một số lông có vai trò tiếp nhận và truyền tín hiệu."
    ],
    subs: [
      { name: "Roi (flagellum)", content: "Dài, thường ít, giúp tế bào bơi." },
      { name: "Lông nhung / lông chuyển", content: "Ngắn, nhiều, tạo dòng chảy hoặc cảm nhận." }
    ]
  },
  "nhan-con": {
    title: "Nhân con",
    role: "Tổng hợp rRNA",
    img: "images/nucleus.png",
    structure: ["Vùng đặc bên trong nhân."],
    function: ["Tổng hợp rRNA và tham gia hình thành ribosome."],
    subs: []
  },
  "lap-bot": {
    title: "Lạp bột",
    role: "Dự trữ tinh bột",
    img: "images/plant-cell.png",
    structure: ["Bào quan không màu, chứa tinh bột."],
    function: ["Dự trữ tinh bột ở tế bào thực vật."],
    subs: []
  }
};

// Map some aliases
organelles["nhan"] = organelles["nhan"];
// already defined

function showHome() {
  document.getElementById("home").classList.add("active");
  document.getElementById("detail").classList.remove("active");
  window.scrollTo(0, 0);
}

function showDetail(key) {
  const data = organelles[key];
  if (!data) {
    alert("Chưa có dữ liệu chi tiết cho bộ phận này.");
    return;
  }
  const container = document.getElementById("detailContent");
  let html = `
    <h2 contenteditable="false">${data.title}</h2>
    <p class="role" contenteditable="false">${data.role}</p>
    <div class="main-img">
      <img src="${data.img}" alt="${data.title}">
    </div>
  `;

  if (data.structure && data.structure.length) {
    html += `<div class="detail-block"><h3 contenteditable="false">Cấu tạo</h3><ul contenteditable="false">`;
    data.structure.forEach(s => html += `<li>${s}</li>`);
    html += `</ul></div>`;
  }

  if (data.function && data.function.length) {
    html += `<div class="detail-block"><h3 contenteditable="false">Chức năng</h3><ul contenteditable="false">`;
    data.function.forEach(f => html += `<li>${f}</li>`);
    html += `</ul></div>`;
  }

  if (data.table) {
    html += `<div class="detail-block"><h3 contenteditable="false">So sánh hai loại lưới nội chất</h3>
      <table class="er-table"><thead><tr>`;
    data.table[0].forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    for (let i = 1; i < data.table.length; i++) {
      html += `<tr>`;
      data.table[i].forEach(c => html += `<td>${c}</td>`);
      html += `</tr>`;
    }
    html += `</tbody></table></div>`;
  }

  if (data.blocks) {
    data.blocks.forEach(b => {
      html += `<div class="detail-block"><h3 contenteditable="false">${b.title}</h3>`;
      if (b.structure.length) {
        html += `<p><strong>Cấu tạo:</strong></p><ul contenteditable="false">`;
        b.structure.forEach(s => html += `<li>${s}</li>`);
        html += `</ul>`;
      }
      if (b.function.length) {
        html += `<p><strong>Chức năng:</strong></p><ul contenteditable="false">`;
        b.function.forEach(f => html += `<li>${f}</li>`);
        html += `</ul>`;
      }
      html += `</div>`;
    });
  }

  if (data.subs && data.subs.length) {
    html += `<div class="sub-parts"><h3 contenteditable="false">Các thành phần cấu tạo (nhấp để xem / ẩn)</h3>`;
    data.subs.forEach((s, idx) => {
      html += `
        <div class="sub-part" id="sub-${idx}">
          <div class="sub-part-title" onclick="toggleSub(${idx})">${s.name}</div>
          <div class="sub-part-body" contenteditable="false">${s.content}</div>
        </div>`;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
  document.getElementById("home").classList.remove("active");
  document.getElementById("detail").classList.add("active");
  window.scrollTo(0, 0);
}

function toggleSub(idx) {
  const el = document.getElementById(`sub-${idx}`);
  if (el) el.classList.toggle("open");
}

function toggleEdit() {
  const btn = document.getElementById("editBtn");
  const isEdit = document.body.classList.toggle("edit-mode");
  btn.classList.toggle("active", isEdit);
  btn.textContent = isEdit ? "💾 Đang sửa" : "✏️ Edit";

  // Toggle contenteditable on all marked elements
  document.querySelectorAll("[contenteditable]").forEach(el => {
    el.setAttribute("contenteditable", isEdit ? "true" : "false");
  });
}

// Wire buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".organelle-list button").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-org");
      showDetail(key);
    });
  });

  // Zoom on image click
  document.querySelectorAll(".cell-img-wrap img").forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("zoomed");
      // slight dim siblings? simple scale is enough
    });
  });
});

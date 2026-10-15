const fortunes = [
  {level:"ดีมาก", text:"สิ่งที่ตั้งใจไว้กำลังจะสำเร็จ ลงมือทำต่อไปได้เลย"},
  {level:"ดีมาก", text:"มีข่าวดีเข้ามาในสัปดาห์นี้ เตรียมรับโอกาสไว้"},
  {level:"ดี", text:"โชคเล็ก ๆ กำลังมา ใจเย็น ๆ แล้วจะเห็นเอง"},
  {level:"ดี", text:"คนรอบข้างพร้อมช่วยเหลือ อย่าลืมขอความช่วยเหลือ"},
  {level:"ดี", text:"การเรียนหรือการงานราบรื่น ทบทวนอีกนิดจะยิ่งดี"},
  {level:"กลาง ๆ", text:"ยังไม่ใช่เวลาตัดสินใจใหญ่ รออีกสักนิดดีกว่า"},
  {level:"กลาง ๆ", text:"ทุกอย่างเรื่อย ๆ ใช้เวลาพักผ่อนให้เต็มที่"},
  {level:"กลาง ๆ", text:"มีอุปสรรคเล็กน้อย แต่แก้ได้ถ้าวางแผนก่อน"},
  {level:"ควรระวัง", text:"ระวังการใช้จ่ายเกินตัว คิดให้ดีก่อนซื้อ"},
  {level:"ควรระวัง", text:"ระวังเรื่องการสื่อสาร พูดช้าลงอีกนิดจะดี"},
  {level:"ควรระวัง", text:"อย่าเพิ่งรีบเชื่อข่าวลือ ตรวจสอบก่อนเสมอ"},
  {level:"ดี", text:"งานที่ค้างอยู่จะคลี่คลาย ทำทีละอย่างก็พอ"}
];

const cup = document.getElementById("cup");
const siamsiResult = document.getElementById("siamsiResult");
const siamsiCount = document.getElementById("siamsiCount");
let count = 0;

document.getElementById("shakeBtn").addEventListener("click", function () {
  cup.classList.remove("shake");
  void cup.offsetWidth;
  cup.classList.add("shake");
  siamsiResult.textContent = "กำลังเขย่า...";
  setTimeout(function () {
    const n = Math.floor(Math.random() * fortunes.length);
    const f = fortunes[n];
    siamsiResult.innerHTML = "<strong>เลขที่ " + (n + 1) + " : " + f.level + "</strong><br>" + f.text;
    count++;
    siamsiCount.textContent = count;
  }, 700);
});

document.getElementById("coinBtn").addEventListener("click", function () {
  const q = document.getElementById("question").value.trim();
  const out = document.getElementById("coinResult");
  if (q === "") {
    out.textContent = "กรุณาพิมพ์คำถามก่อนทอยเหรียญ";
    return;
  }
  const yes = Math.random() < 0.5;
  out.innerHTML = "คำถาม: " + escapeHtml(q) + "<br><strong>" + (yes ? "ใช่ ✅" : "ไม่ใช่ ❌") + "</strong>";
});

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, function (c) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
  });
}

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "โหมดมืด" : "โหมดสว่าง";
});

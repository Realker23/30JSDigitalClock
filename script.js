const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  const now = new Date();
  dateArray = now.toString().split(" ");
  const time = dateArray[4].split(":");
  const [h, m, s] = time;
  hr.innerText = h;
  min.innerText = m;
  sec.innerText = s;
}, 1000);

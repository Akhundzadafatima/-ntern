let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");

const prenexIcons = document.querySelectorAll(
  ".calendar-navigation .vectorNext"
);
const preLastIcons = document.querySelectorAll(
  ".calendar-navigation .vectorLast"
);

// Months array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const specialDays = {
  2: { "8 March" : "Qadınlar günü" },
  3: { "17 April": "Aldatma günü" },
  4: { "28 May": "Müstəqillik günü" },
  7: { "12 August": "My Birthday!" },
  11: { "31 December": "Yeni il" },
};

const manipulate = () => {
  let lastdate = new Date(year, month + 1, 0).getDate();

  let lit = "";
  for (let i = 1; i <= lastdate; i++) {
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";

    let specialDay =
      specialDays[month] && specialDays[month][i] ? specialDays[month][i] : "";
    lit += `<li class="${isToday}">${i} ${
      specialDay ? `- ${specialDay}` : ""
    }</li>`;
  }

  currdate.innerText = `${months[month]} ${year}`;
  day.innerHTML = lit;
};

manipulate();

prenexIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    month = icon.id === "calendar-prev" ? month - 1 : month + 1;
    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }
    manipulate();
  });
});
preLastIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    month = icon.id === "calendar-prev" ? month - 1 : month - 1;

    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }

    manipulate();
  });
});
const specialDaysModal = document.getElementById("specialDaysModal");
const modalMonth = document.getElementById("modalMonth");
const specialDaysList = document.getElementById("specialDaysList");

currdate.addEventListener("click", () => {
  modalMonth.innerText = months[month];
  specialDaysList.innerHTML =
    Object.entries(specialDays[month] || {})
      .map(([day, name]) => `<li> ${day}: ${name}</li>`)
      .join("") || "<li>Bu ayda özəl gün yoxdur.</li>";

  specialDaysModal.style.display = "block";
});

window.addEventListener("click", (event) => {
  if (event.target === specialDaysModal) {
    specialDaysModal.style.display = "none";
  }
});






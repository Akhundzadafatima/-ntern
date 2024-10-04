let timee = 30;
const timeButton = document.getElementById("button1");
const startButton = document.getElementById("button2");
const scoreButton = document.getElementById("scoreButton");
const hintButton = document.getElementById("hintButton");
const div = document.querySelector(".div");

let score = 0;
const names = [
  { name: "elnure" },
  { name: "zehra" },
  { name: "kerim" },
  { name: "behruz" },
  { name: "fatime" },
];

let newNameIndex = 0;
let start = false;


startButton.addEventListener("click", () => {
  if (!start) { 
    start = true; 
    timeButton.textContent = ` ${timee}`;
    
    const timeCount = setInterval(() => {
      if (timee > 0) {
        timee--;
        timeButton.textContent = ` ${timee}`;
      } else {
        clearInterval(timeCount);
        alert("Vaxt bitti!");
        resetGame();
      }
    }, 1000);
  }
  })


document.querySelectorAll("#button2")[1].addEventListener("click", () => {
  if (start) {
    newNameIndex = (newNameIndex + 1) % names.length;
    const newName = names[newNameIndex].name;
    div.innerHTML = "";
    for (let i = 0; i < newName.length; i++) {
      const miniBox = document.createElement("span");
      miniBox.classList.add("miniBox");
      miniBox.textContent = "_";
      div.appendChild(miniBox);
    }
  }
});


document.querySelectorAll("#button2")[2].addEventListener("click", () => {
  if (!start) return;
  const currentName = names[newNameIndex].name;
  const miniBoxes = document.querySelectorAll(".miniBox");
  const secretIndex = [...miniBoxes].flatMap((box, index) =>
    box.textContent === "_" ? index : []
  );

  if (secretIndex.length > 0) {
    const randomIndex =
      secretIndex[Math.floor(Math.random() * secretIndex.length)];
    miniBoxes[randomIndex].textContent = currentName[randomIndex];
    score -= 20;
    scoreButton.textContent = `Score: ${score}`;
  }
});


document.querySelectorAll("td").forEach((td) => {
  td.addEventListener("click", () => {
    if (!start) return;

    const clickLetter = td.textContent;
    const currentName = names[newNameIndex].name;

    if (currentName.includes(clickLetter)) {
      score += 10;
      scoreButton.textContent = `Score: ${score}`;
      const miniBoxes = document.querySelectorAll(".miniBox");
      currentName.split("").forEach((letter, index) => {
        if (letter === clickLetter) {
          miniBoxes[index].textContent = letter;
        }
      });
    } else {
      score -= 10;
      scoreButton.textContent = `Score: ${score}`;
    }
  });
});

function resetGame() {
  timee = 30;
  score = 0;
  start = false;
  scoreButton.textContent = `Score: ${score}`;
  div.innerHTML = "";
  timeButton.textContent = `Time: ${timee}s`;
}

// scoreButton.textContent = `Score: ${score}`;

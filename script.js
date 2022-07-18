import RockPaperScissorsManager from "./class/RockPaperScissorsManager.js";

const wrapperBody = document.querySelector(".wrapper-body");
const preloaderElem = wrapperBody.querySelector(".preloader");
const options = [
  {
    mainIcon: "✊",
    icon: "✋",
    winStr: "Камень побеждает ножницы",
    losingStr: "Камень побеждается бумагой",
    draw: "Нету победителей",
  },
  {
    mainIcon: "✋",
    icon: "✌",
    winStr: "Бумага побеждает камень",
    losingStr: "Бумагу бьют ножницами",
    draw: "Нету победителей",
  },
  {
    mainIcon: "✌",
    icon: "✊",
    winStr: "Ножницы побеждают бумагу",
    losingStr: "Ножницы избиты камнем",
    draw: "Нету победителей",
  },
];
const countPointWin = 5;

const rockPaperScissorsManager = new RockPaperScissorsManager(
  options,
  countPointWin,
  preloaderElem
);

rockPaperScissorsManager.startGame(wrapperBody);

wrapperBody.addEventListener("contextmenu", (event) => event.preventDefault());
wrapperBody.addEventListener("dragstart", (event) => event.preventDefault());
wrapperBody.addEventListener("selectstart", (event) => event.preventDefault());

import Board from "./Board.js";
import RockPaperScissors from "./RockPaperScissors.js";
import preloader from "../preloader.js";

class RockPaperScissorsManager {
  get initGame() {
    return this.#board.init();
  }

  #board;
  #rockPaperScissors;
  #preloaderElement;

  constructor(options, countPointWin, preloaderElement) {
    this.#board = new Board(options, countPointWin);
    this.#rockPaperScissors = new RockPaperScissors(
      options,
      this.#board,
      countPointWin
    );
    this.#preloaderElement = preloaderElement;
  }

  #addEvents(elem) {
    if (!elem) return;

    elem.insertAdjacentHTML("beforeend", this.initGame);

    this.#eventButtons();
    this.#eventRestart();
  }

  startGame(elem) {
    this.#addEvents(elem);

    preloader().finally(() => {
      this.#preloaderElement.style.opacity = "0";

      setTimeout(() => {
        this.#preloaderElement.remove();
      }, 800);
    });
  }

  #eventRestart() {
    document.body.addEventListener("click", (event) => {
      const target = event.target;

      if (!target.classList.contains("button-restart")) return;

      target.parentElement.remove();

      this.#board.rockPaperScissors.outerHTML = this.initGame;
    });
  }

  #eventButtons() {
    document.body.addEventListener("click", (event) => {
      const target = event.target;
      const element = target.closest(".buttons_button");

      if (!element) return;

      this.#rockPaperScissors.render(element);
    });
  }
}

export default RockPaperScissorsManager;

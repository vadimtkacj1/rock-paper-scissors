class Board {
  get rockPaperScissors() {
    return document.querySelector("." + this.#nameClassBoard);
  }

  get contentHeaderMain() {
    return this.rockPaperScissors.querySelector(".content_header-main");
  }

  get contentHeader() {
    return this.rockPaperScissors.querySelector(".content_header");
  }

  get playersPlayerFirstIcon() {
    return this.rockPaperScissors.querySelector(
      ".players_player-first .player_icon"
    );
  }

  get playersPlayerLastIcon() {
    return this.rockPaperScissors.querySelector(
      ".players_player-last .player_icon"
    );
  }

  get playersPlayerFirstCount() {
    return this.rockPaperScissors.querySelector(
      ".players_player-first .player_count"
    );
  }

  get playersPlayerLastCount() {
    return this.rockPaperScissors.querySelector(
      ".players_player-last .player_count"
    );
  }

  #nameClassBoard = "rock-paper-scissors";
  #options;
  #countPointWin;

  constructor(options, countPointWin) {
    this.#options = options;
    this.#countPointWin = countPointWin;
  }

  init() {
    return `<div class="${this.#nameClassBoard}">
        <div class="${this.#nameClassBoard}_header">КАМЕНЬ НОЖНИЦЫ БУМАГА</div>
        <div class="${this.#nameClassBoard}_content">
          <div class="content_header-main">Выберите свое оружие</div>
          <div class="content_header">
            Первый, кто наберет ${this.#countPointWin} очков, побеждает в игре.
          </div>
          <div class="content_players">
            <div class="players_player-first players_player">
              <div class="player_icon">❔</div>
              <div class="player-first_count player_count">Игрок: 0</div>
            </div>
            <div class="players_player-last players_player">
              <div class="player_icon">❔</div>
              <div class="player-last_count player_count">Компьютер: 0</div>
            </div>
          </div>
          ${this.#createButtons()}
        </div>
      </div>`;
  }

  #createButtons() {
    const elemButtons = document.createElement("div");
    elemButtons.classList.add("content_buttons");

    this.#options.forEach((elem, index) => {
      const elemButton = document.createElement("div");
      elemButton.classList.add("buttons_button");
      elemButton.dataset.index = index;

      const elemButtonIcon = document.createElement("div");
      elemButtonIcon.classList.add("buttons_button__icon");
      elemButtonIcon.textContent = elem.mainIcon;

      elemButton.append(elemButtonIcon);
      elemButtons.append(elemButton);
    });

    return elemButtons.outerHTML;
  }
}

export default Board;

class RockPaperScissors {
  #playerCountWin = 0;
  #computerCountWin = 0;
  #countPointWin;
  #options;
  #board;

  constructor(options, board, countPointWin = 5) {
    this.#options = options;
    this.#board = board;
    this.#countPointWin = countPointWin;
  }

  #randomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  #setElementsBoardTextContent(elem, content) {
    this.#board[elem].textContent = content;
  }

  render(elem) {
    const indexElement = elem.dataset.index;
    const playerObjOptions = this.#options[indexElement];
    const computerObjOptions = this.#options[this.#randomIndex(this.#options)];

    const [popUpStr, keyForGetStr] = this.#playRound(
      playerObjOptions,
      computerObjOptions
    );

    this.#setElementsBoardTextContent(
      "playersPlayerFirstIcon",
      playerObjOptions.mainIcon
    );
    this.#setElementsBoardTextContent(
      "playersPlayerLastIcon",
      computerObjOptions.mainIcon
    );
    this.#setElementsBoardTextContent(
      "playersPlayerFirstCount",
      "Игрок: " + this.#playerCountWin
    );
    this.#setElementsBoardTextContent(
      "playersPlayerLastCount",
      "Компьютер: " + this.#computerCountWin
    );
    this.#setElementsBoardTextContent("contentHeaderMain", popUpStr);
    this.#setElementsBoardTextContent(
      "contentHeader",
      playerObjOptions[keyForGetStr]
    );

    if (this.#computerCountWin === this.#countPointWin) {
      this.#popUpWindow("Ты проиграл!");
      this.#resetPlayersCountWin();
    }

    if (this.#playerCountWin === this.#countPointWin) {
      this.#popUpWindow("Ты выиграл!");
      this.#resetPlayersCountWin();
    }
  }

  #resetPlayersCountWin() {
    this.#computerCountWin = 0;
    this.#playerCountWin = 0;
  }

  #popUpWindow(textContent) {
    const divParent = document.createElement("div");
    const divHeading = document.createElement("div");
    const divButton = document.createElement("div");

    divParent.classList.add("wrapper-win");
    divHeading.classList.add("win_heading");
    divButton.classList.add("win_button");
    divButton.classList.add("button-restart");

    divHeading.textContent = textContent;
    divButton.textContent = "Играть снова";

    divParent.append(divHeading);
    divParent.append(divButton);

    document.body.append(divParent);

    setTimeout(() => {
      divParent.style.opacity = "1";
    }, 100);
  }

  #playRound(playerOne, playerTwo) {
    const playerOneMainIcon = playerOne.mainIcon;
    const playerTwoMainIcon = playerTwo.mainIcon;
    const playerOneIcon = playerOne.icon;
    const playerTwoIcon = playerTwo.icon;

    if (playerOneMainIcon === playerTwoMainIcon) {
      return ["Ничья!", "draw"];
    }

    if (playerOneIcon === playerTwoMainIcon) {
      this.#computerCountWin += 1;

      return ["Ты проиграл!", "losingStr"];
    }

    if (playerOneMainIcon === playerTwoIcon) {
      this.#playerCountWin += 1;

      return ["Ты победил!", "winStr"];
    }
  }
}

export default RockPaperScissors;

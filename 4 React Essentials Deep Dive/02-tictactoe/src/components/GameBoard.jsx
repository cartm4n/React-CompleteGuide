const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // Derive game board state from turns prop
  if (turns.length > 0) {
    gameBoard = initialGameBoard.map((row) => [...row]); // Deep copy
    let count = 0;
    turns.forEach((turn) => {
      count++;
      const { row, col } = turn.square;
      gameBoard[row][col] = turn.player;
    });
    console.log(`GameBoard derived state updated with ${count} turns.`);
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   console.log(`handleSelectSquare(): Row: ${rowIndex}, Col: ${colIndex}`);
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map((innerArray => [...innerArray]))];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     console.log(updatedGameBoard);
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

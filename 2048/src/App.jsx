import { useState } from "react";
import React from "react";

function App() {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  // Initialize
  const initialize = () => {
    // console.log("CALLING INITIALIZE");

    let newGrid = cloneDeep(data);
    console.log(newGrid);

    addNumber(newGrid);
    console.table(newGrid);
    addNumber(newGrid);
    console.table(newGrid);
    setData(newGrid);
  };
  // AddNumber - Add an item
  const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
      if (gridFull) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if (newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
      if (attempts > 50) {
        gridFull = true;
        let gameOverr = checkIfGameOver();
        if (gameOverr) {
          alert("game over");
          // setGameOver(true);
        }
        // setGameOver(true);
      }
    }
  };

  const Block = ({ num }) => {
    const { blockStyle } = style;

    return (
      <div
        style={{
          ...blockStyle,
          background: getColors(num),
          color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
        }}
      >
        {num !== 0 ? num : ""}
      </div>
    );
  };

  const style = {
    blockStyle: {
      height: 80,
      width: 80,
      background: "lightgray",
      margin: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 45,
      fontWeight: "800",
      color: "white",
    },
    newGameButton: {
      padding: 10,
      background: "#846F5B",
      color: "#F8F5F0",
      width: 95,
      borderRadius: 7,
      fontWeight: "900",
      marginLeft: "auto",
      marginBottom: "auto",
      cursor: "pointer",
    },
    tryAgainButton: {
      padding: 10,
      background: "#846F5B",
      color: "#F8F5F0",
      width: 80,
      borderRadius: 7,
      fontWeight: "900",
      cursor: "pointer",
      margin: "auto",
      marginTop: 20,
    },
    gameOverOverlay: {
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      borderRadius: 5,
      background: "rgba(238,228,218,.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div
      style={{
        background: "#AD9D8F",
        width: "max-content",
        margin: "auto",
        padding: 5,
        borderRadius: 5,
        marginTop: 0,
      }}
    >
      {data.map((row, oneIndex) => {
        return (
          <div style={{ display: "flex" }} key={oneIndex}>
            {row.map((digit, index) => (
              <Block num={digit} key={index} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;

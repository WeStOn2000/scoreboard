import React from "react";
import Header from "./header";
import Player from "./Player";
import addPlayerForm from "./addPlayerForm";



const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, alpha) => {
   setPlayers(prevPlayers => prevPlayers.map(player => {
    if(player.id === id){
    return{
      name : player.name,
      score: player.score + alpha,
      id: player.id
    }
    }
    return player;
   }));
}

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        players={players}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      )}
      <addPlayerForm />
    </div>
  );

}

export default App;

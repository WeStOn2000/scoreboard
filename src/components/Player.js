import React,{memo} from "react";
import Counter from "./Counter";
import { PropTypes } from "prop-types";
import Icon from "./icon";

const Player = ({removePlayer, id, name, score, changeScore, isHighScore}) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore}/>
          {name}
        </span>
  
        <Counter 
        score={score}
        id={id}
        changeScore={changeScore}
        />
      </div>
    );
  }
  
 Player.propTypes={
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
    isHighScore: PropTypes.bool.isRequired
 }

  const playerPropsAreEqual =(prevProps, nextProps) => {
    return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
  }

export default memo(Player, playerPropsAreEqual);
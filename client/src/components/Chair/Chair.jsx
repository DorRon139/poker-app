import React from "react";
import Player from "../Player/Player";

import "./chair.css";
import { useSelector } from "react-redux";

const Chair = ({ player, isCurrentUser }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <React.Fragment>
      {player.isFreeChair ? (
        <div className="chair-container"></div>
      ) : (
        <Player
          player={player}
          isCurrentUser={currentUser._id === player._id}
          key={player._id}
        />
      )}
    </React.Fragment>
  );
};

export default Chair;

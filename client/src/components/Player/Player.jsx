import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card";

import "./player.css";

const Player = ({ player, isCurrentUser }) => {
  const { _id, name, coins, profilePic, hand } = player;

  return (
    <React.Fragment>
      <div className="player-container">
        <div className="box">
          <div className={`semicircle`}></div>
          <div className={`semicircle`}></div>
          <div className={`semicircle`}></div>
          <div className="content">
            <img src={profilePic} />
          </div>
        </div>
        {isCurrentUser && (
          <div className="cards-container">
            {hand &&
              hand.map((card, index) => {
                const { suit, value } = card;
                return (
                  <div className={`card-${index}`} key={`${suit}${value}`}>
                    <Card suit={suit} value={value} key={`${suit}${value}`} />
                  </div>
                );
              })}
          </div>
        )}
        <div className="player-details">
          <span>
            {name} {coins}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Player;

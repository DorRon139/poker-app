import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShuffleDeck,
  setDealerTag,
  dealCards,
  resetGame,
} from "../../app/room/poker-room.slice";
import Chair from "../Chair/Chair";
import { io } from "socket.io-client";

import "./table.css";
import { MAX_PLAYERS_IN_TEXAS_HOLDEM } from "../../consts";

const socket = io("http://localhost:3040");

const Table = () => {
  const [round, setRound] = useState(0);
  const [playersToRender, setPlayersToRender] = useState([]);
  const dispatch = useDispatch();
  const { communityCards, players } = useSelector((state) => state.pokerRoom);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    // TODO: find another solution
    // const freeChairsNumber = MAX_PLAYERS_IN_TEXAS_HOLDEM - players.length;
    // const freeChairObj = {
    //   _id: "7542",
    //   freeChair: true,
    // };
    // const freeChairs = Array(freeChairsNumber).fill(freeChairObj);
    const indexOfCurrentUser = players.findIndex(
      (player) => player._id === currentUser._id
    );
    const fromCurrentUser = players.slice(indexOfCurrentUser);
    const tillCurrentUser = players.slice(0, indexOfCurrentUser);

    setPlayersToRender([...fromCurrentUser, ...tillCurrentUser]);
  }, [players]);

  useEffect(() => {
    dispatch(resetGame(round));
    dispatch(setShuffleDeck());
    dispatch(setDealerTag());
    dispatch(dealCards());
  }, []);

  useEffect(() => {
    socket.on("show-card", ({ value, suit }) => {
      setCARDS([...CARDS, { value, suit }]);
    });
  }, [socket]);
  return (
    <div className="table-content">
      <div className="players-container">
        {playersToRender &&
          playersToRender.map((player, index) => {
            return (
              <div className={`chair deg-${index}`} key={player._id}>
                <Chair player={player} isCurrentUser={true} key={player._id} />
              </div>
            );
          })}
        <div className="table-shape"></div>
      </div>
    </div>
  );
};

export default Table;

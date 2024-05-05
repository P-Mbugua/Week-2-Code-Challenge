import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botsArmy, setBotsArmy] = useState([]);
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const handleRelease = (botId) => {
    setBotsArmy(botsArmy.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} handleRelease={handleRelease} />
      <BotCollection bots={bots} botsArmy={botsArmy} setBotsArmy={setBotsArmy} />
    </div>
  );
}

export default BotsPage;

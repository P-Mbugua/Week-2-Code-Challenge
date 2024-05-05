// BotCollection.js
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, botsArmy, setBotsArmy }) {
  const handleEnlist = (bot) => {
    // Check if the bot is already in the army
    const isBotInArmy = botsArmy.some((b) => b.id === bot.id);
    // If the bot is not already in the army, add it
    if (!isBotInArmy) {
      setBotsArmy([...botsArmy, bot]);
    }
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots &&
          bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              botsArmy={botsArmy}
              setBotsArmy={setBotsArmy}
              handleEnlist={handleEnlist} // Pass handleEnlist function
            />
          ))}
      </div>
    </div>
  );
}

export default BotCollection;

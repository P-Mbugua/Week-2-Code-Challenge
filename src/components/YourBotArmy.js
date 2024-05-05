import React from "react";
import BotArmyCard from "./BotArmyCard";

function YourBotArmy({ botsArmy, handleRelease }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botsArmy.map((bot) => (
            <BotArmyCard key={bot.id} bot={bot} handleRelease={handleRelease} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;



import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, setBotsArmy, botsArmy, handleEnlist }) {
  const handleRelease = () => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setBotsArmy(botsArmy.filter((b) => b.id !== bot.id));
        } else {
          console.error("Failed to release bot:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error releasing bot:", error);
      });
  };

  return (
    <div className="ui column">
      <div className="ui card" onClick={() => handleEnlist(bot)}> {/* Call handleEnlist when clicked */}
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;

import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <span className="player">
        {isEditing ? <input className="player-name" defaultValue={name}/> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={()=>setIsEditing(!isEditing)}>{isEditing? "Save" :"Edit"}</button>
    </li>
  );
}

import React from "react";
import "./style.scss";

export default function App() {
  return (
    <div>
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
}

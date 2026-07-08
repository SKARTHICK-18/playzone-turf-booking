import React from "react";

const grounds = [
  {
    id: 1,
    name: "Ground A",
    available: true,
  },
  {
    id: 2,
    name: "Ground B",
    available: false,
  },
  {
    id: 3,
    name: "Ground C",
    available: true,
  },
  {
    id: 4,
    name: "Ground D",
    available: true,
  },
];

function GroundSelection({
  selectedGround,
  setSelectedGround,
}) {
  return (
    <div className="ground-container">

      <h2>Select Ground</h2>

      <div className="field">

        <div className="field-title">
          FOOTBALL TURF
        </div>

        <div className="ground-layout">

          {grounds.map((ground) => (

            <div
              key={ground.id}
              className={`ground-card
                ${
                  !ground.available
                    ? "booked-ground"
                    : ""
                }
                ${
                  selectedGround === ground.name
                    ? "selected-ground"
                    : ""
                }`}
              onClick={() => {
                if (ground.available) {
                  setSelectedGround(
                    ground.name
                  );
                }
              }}
            >
              {ground.name}
            </div>

          ))}

        </div>

      </div>

      <div className="ground-legend">

        <div>
          <span className="box available"></span>
          Available
        </div>

        <div>
          <span className="box selected"></span>
          Selected
        </div>

        <div>
          <span className="box booked"></span>
          Booked
        </div>

      </div>

    </div>
  );
}

export default GroundSelection;
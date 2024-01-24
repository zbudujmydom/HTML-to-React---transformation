import React from "react";
import Box from "./Box";
import "./Offers.css";
import BoxHeading from "./BoxHeading";

const Offer = () => {
  const boxes = [
    { id: 1, isNew: true },
    { id: 2, isNew: false },
    { id: 3, isNew: false },
    { id: 4, isNew: false },
    { id: 5, isNew: false },
    { id: 6, isNew: false },
  ];

  return (
    <section id="offer" className="offer">
      <div className="main-container">
        <BoxHeading text="Czym zajmuję się nasza firma?" />
        <div className="offer-boxes">
          {boxes.map((box) => (
            <Box key={box.id} isNew={box.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;

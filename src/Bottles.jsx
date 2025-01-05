import { useEffect, useState } from "react";
import Botle from "./Botle";
import { addTOLS } from "./localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [addTOcard, setaddTocard] = useState([]);
  const handaladdbottle = (bottle) => {
    const newadded = [...addTOcard, bottle];
    setaddTocard(newadded);
    addTOLS(bottle.id);
  };
  const handleRemoveCard = (bottle) => {
    const remainingCard = addTOcard.filter((item) => item.id !== bottle.id);
    setaddTocard(remainingCard); // Update state to remove the bottle
  };

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div>
      <h1>WelCome To Our Shop </h1>
      <div className="card-bottle">
        <h3>Total Added: {addTOcard.length} </h3>
        {addTOcard.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} alt="" srcSet="" />
            <button onClick={() => handleRemoveCard(bottle)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="all-bollte">
        {bottles.map((bottle) => (
          <Botle
            key={bottle.id}
            bottle={bottle}
            handaladdbottle={handaladdbottle}
          ></Botle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;

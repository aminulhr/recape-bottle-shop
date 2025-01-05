import { useEffect, useState } from "react";
import Botle from "./Botle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [addTOcard, setaddTocard] = useState([]);
  const handaladdbottle = (bottle) => {
    const newadded = [...addTOcard, bottle];
    setaddTocard(newadded);
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
          <img src={bottle.img} alt="" srcSet="" />
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

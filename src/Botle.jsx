import "./bottol.css";
const Botle = ({ bottle, handaladdbottle }) => {
  console.log(bottle);
  const { name, price, img } = bottle;
  return (
    <div>
      <div>
        <h3>{name} </h3>
        <h6>Price {price} </h6>
        <img className="bottle" src={img} alt="" srcSet="" />
        <br /> <button onClick={() => handaladdbottle(bottle)}>Add Cart</button>
      </div>
    </div>
  );
};

export default Botle;

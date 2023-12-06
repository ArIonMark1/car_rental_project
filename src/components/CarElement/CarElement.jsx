import css from './CarElement.module.css';

const CarElement = () => {
  return (
    <>
      <div className={css.machineCard}>
        <img className="cardImage" href="#" alt="car" />
        <div className="cardContent">
          <h2 className="contentTitle">Machine Name, year cost</h2>
          <p className="contentData">
            Kiev | Ukraine | Luxury Car Rentals | Enclave | Power liftgate...
          </p>
        </div>

        <button>Learn more</button>
      </div>
    </>
  );
};

export default CarElement;

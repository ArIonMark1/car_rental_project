import css from './ModalContent.module.css';

export const ModalContent = () => {
  return (
    <div className="modalContent">
      <div className={css.carImg}>
        <img src="#" alt="car" />
      </div>
      <div className={css.generalInfo}>
        <p className={css.generalInfo__title}>
          Buick
          <span>
            <a href="#"> Enclave</a>
          </span>
          , 2008
        </p>
        <ul className={css.generalInfo__list}>
          <li>Kiev</li>
          <li>Ukraine</li>
          <li>Id: 9582</li>
          <li>Year: 2008</li>
          <li>Type: Suv</li>
          <li>Fuel Consumption: 10.5</li>
          <li>Engine Size: 3.6L V6</li>
        </ul>
        <p className={css.generalInfo__description}>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </p>
      </div>

      <div className={css.accesories}>
        <p className={css.accesories__title}>
          Accessories and functionalities:
        </p>
        <ul className={css.accesories__list}>
          <li>Leather seats</li>
          <li>Panoramic sunroof</li>
          <li>Power liftgate</li>
          <li>Premium audio system</li>
          <li>Remote start</li>
          <li>Blind-spot monitoring</li>
        </ul>
      </div>

      <div className={css.conditions}>
        <p className={css.condition__header}>Rental Conditions: </p>
        <ul className={css.condition__list}>
          <li>
            Minimum age : <span className={css.element_value}>25</span>
          </li>
          <li>Valid driver’s license</li>
          <li>Security deposite required </li>
          <li>
            Mileage: <span className={css.element_value}>5,858</span>
          </li>
          <li>
            Price: <span className={css.element_value}>40$</span>
          </li>
        </ul>
      </div>
      <button className={css.rent__button}>Rental card</button>
    </div>
  );
};

// export default ModalContent;

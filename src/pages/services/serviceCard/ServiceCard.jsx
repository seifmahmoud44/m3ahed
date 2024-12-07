import classes from "./serviceCard.module.css";

const ServiceCard = ({ serviceImg, seviceName, ServiceDescription }) => {
  return (
    <>
      <div className={classes.serviceCard}>
        <div className={classes.serviceImg}>
          <img src={serviceImg} />
        </div>
        <div className={classes.serviceContent}>
          <h3>{seviceName}</h3>
          <p>{ServiceDescription}</p>
        </div>
        <button>المزيد</button>
      </div>
    </>
  );
};

export default ServiceCard;

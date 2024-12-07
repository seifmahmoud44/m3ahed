import ServiceCard from "./serviceCard/ServiceCard";
import classes from "./services.module.css";

const Services = () => {


  // https://m3afed.e3lanotopia.software


  return (
    <>
      <div className={classes.servicesContainer}>
        <ServiceCard
          serviceImg="https://via.placeholder.com/150"
          seviceName="Service 1"
          ServiceDescription="لوريم ايبسوم دولار سيت اميت لوريم ايبسوم دولار سيت اميت لوريم ايبسوم دولار سيت اميت"
        />
      </div>
    </>
  );
};

export default Services;

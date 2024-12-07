import classes from "./foundation.module.css";
import HijabWomen from "../../../../public/hijab-icon.svg";
import Men from "../../../../public/muslim.svg";
import School from "../../../../public/bxs-school.svg";
import RotationCube from "../rotationCube/RotationCube";

const Foundation = () => {
  return (
    <>
      <section id="about" className={classes.section2}>
        <div className={classes.panner}>
          <div className={classes.contentSection2}>
            <div className={classes.box}>
              <p>تأسيس معاهد معلمات القرآن و تطويرها</p>
              <img src={HijabWomen} />
            </div>
            <div className={classes.box}>
              <p>تأسيس المجمعات والحلقات القرآنية الرجالية وتطويرها</p>
              <img src={Men} />
            </div>
            <div className={classes.box}>
              <p>تأسيس المدارس و الدور النسائية وتطويرها</p>
              <img src={School} />
            </div>
          </div>
        </div>

        <RotationCube />
      </section>
    </>
  );
};

export default Foundation;

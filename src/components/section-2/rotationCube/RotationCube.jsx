import classes from "./rotationCube.module.css";

const RotationCube = () => {
  return (
    <div className={classes.animation}>
      <div className={classes.dotLtr}></div>
      <div className={classes.dotRotation}></div>
    </div>
  );
};

export default RotationCube;

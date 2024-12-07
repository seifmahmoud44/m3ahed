import classes from "./newsPageIcon.module.css";
import { Link } from "react-router-dom";

const NewsPageIcon = ({ imageBackground, headLine, path }) => {
  return (
    <>
      <Link to={path} className={`${classes.newasIconCard} block`}>
        <div className={classes.overlay}></div>
        <img src={imageBackground} />
        <p> {headLine} </p>
        <CustomLink className={classes.button}>
          <span>المزيد</span>
        </CustomLink>
      </Link>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default NewsPageIcon;

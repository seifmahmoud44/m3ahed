import classes from "./newsCard.module.css";
import { Link } from "react-router-dom";

const NewsCard = ({ imagPath, auther, title, date, words, id }) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.img}>
          <div className={classes.overlay}></div>
          <img src={imagPath} alt="" />
        </div>

        <div className={classes.text}>
          <p className={classes.auhter}> {title}</p>
          {/* <p className={classes.h3}> {} </p> */}
          <p className={classes.p}>{date}</p>

          <p className={classes.word50}>{words}</p>

          <CustomLink className={classes.more} to={`/newsDetales/${id}`}>
            <p>المزيد</p>
          </CustomLink>
        </div>
      </div>
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

export default NewsCard;

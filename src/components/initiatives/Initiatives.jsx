import { Link } from "react-router-dom";
import classes from "./initiatives.module.css";

const Initiatives = () => {
  return (
    <div id="Initiatives">
      <h1 className={classes.section1H1}>المبادرات</h1>
      <div className={classes.cardContainer}>
        {/* <Routes> */}
        <div className={classes.card}>
          <div className={classes.backgroundEfect}></div>
          <img src="../../../public/download.png" alt="" />
          <br />

          <h2>جائزة الموسى</h2>

          <p>
            تبنّى وقف الشيخين سعد وعبدالعزيز الموسى الخيري ومركز معاهد
            للاستشارات التربوية والتعليمية جائزة الموسى للتميُّز في المدارس
            والمعاهد القرآنية، بوصفها جائزة وطنية تُعنى بالمدارس والمعاهد
            القرآنية من خلال تجويد أدائها المؤسسي وتميُّزه
          </p>

          <br />

          {/* <a href="/librarie" className={classes.btn}>
            المزيد
          </a> */}
        </div>
        <div className={classes.card}>
          <div className={classes.backgroundEfect}></div>
          <img src="../../../public/download 9.png" alt="" />
          <br />
          <h2> الدبلومات الأكاديمية</h2>

          <p>
            مركز معاهد للاستشارات التربوية والتعليمية يستهدف كافة عناصر العمل
            التربوي والتعليمي في مجال تعليم القرآن الكريم؛ من خلال إعداد وثائق
            ومناهج الدبلومات الأكاديمية، ويستهدف التطبيق المعاهد القرآنية، وما
            في حكمها؛ من مشاريع وبرامج ومبادرات داخل المملكة وخارجها.
          </p>
          <br />
          {/* <CustomLink className={classes.test123} to="/Diplomats">
            <p>المزيد</p>
          </CustomLink> */}
        </div>
        <div className={classes.card}>
          <div className={classes.backgroundEfect}></div>
          <div className={classes.cardImg}>
            <img src="../../../public/download (3).jfif" alt="" />
          </div>
          <br />

          <h2> برنامج النمو المهنى</h2>

          <p>
            برنامج النمو المهني والتربوي لمنسوبات المعاهد القرآنية، يهدف إلى
            بناء خطة تشغيلية لتنمية مهارات وقدرات منسوبات المعاهد والإشراف على
            تنفيذها.
          </p>
          <br />

          {/* <CustomLink className={classes.test123} to="/CareerGrowth">
            <p>المزيد</p>
          </CustomLink> */}
        </div>
        {/* </Routes> */}
      </div>
    </div>
  );
};

// function CustomLink({ to, children, ...props }) {
//   return (
//     <Link to={to} {...props}>
//       {children}
//     </Link>
//   );
// }

export default Initiatives;

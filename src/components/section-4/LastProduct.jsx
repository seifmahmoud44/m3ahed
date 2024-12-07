import classes from "./lastProduct.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../../pages/products/productCard/ProductCard";

const LastProduct = () => {
  return (
    <section className={classes.lastProductHome}>
      <p className={classes.section4Title}>آخر منتجاتنا</p>
      <div className={classes.cards}>
        <ProductCard
          productImg="https://via.placeholder.com/150"
          productName="Product 1"
          productDescription="لوريم ايبسوم دولار سيت اميت لوريم ايبسوم دولار سيت اميت لوريم ايبسوم دولار سيت اميت"
        />
        <CustomLink className={classes.btn} to="/products">
          <p>المزيد</p>
        </CustomLink>
      </div>
    </section>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default LastProduct;

import classesProduct from './products.module.css'
import ProductCard from './productCard/ProductCard'
const Products = () => {
  return (
    <>
    <div className={classesProduct.productsContainer}>
        <ProductCard
          productImg="https://via.placeholder.com/150"
          productName="Product 1"
          productDescription="لوريم ايبسوم دولار سيت اميت لوريم ايبسوم دولار سيت اميت لوريم ايبسوم دولار سيت اميت"
        />
      </div>
    </>
  )
}

export default Products
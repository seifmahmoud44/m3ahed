import classesProductCard from './productCard.module.css'

const ProductCard = ({productImg, productName, productDescription}) => {
    return (
        <>
          <div className={classesProductCard.productCard}>
            <div className={classesProductCard.productImg}>
              <img src={productImg} />
            </div>
            <div className={classesProductCard.productContent}>
              <h3>{productName}</h3>
              <p>{productDescription}</p>
            </div>
            <button>المزيد</button>
          </div>
        </>
      );
}

export default ProductCard
import styles from './product.module.css';

const ProductSection = () =>{
  return (
    <section className={styles.productSection}>
      <h2 className='font-serif text-2xl font-bold '>Featured Products</h2>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img src="https://i.pinimg.com/736x/c0/71/85/c0718578291c7e2c090544b9e3a4adeb.jpg" alt="Product 1" className={styles.image}  />
          <p className={styles.boxPrice}>$29.99</p>
        </div>
        <div className={styles.box}>
          <img src="https://i.pinimg.com/control/564x/e1/1c/ad/e11cad5458c19dafac74baeb6fcd054c.jpg" alt="Product 2" className={styles.image} />
          <p className={styles.boxPrice}>$39.99</p>
        </div>
        <div className={styles.box}>
          <img src="https://i.pinimg.com/736x/8e/d4/29/8ed4295912f66410c8d01da91db2f7d8.jpg" alt="Product 3" className={styles.image} />
          <p className={styles.boxPrice}>$49.99</p>
        </div>
        <div className={styles.box}>
          <img src="https://i.pinimg.com/control/564x/c2/63/37/c26337c2864638e4b88c9f5bf96b9d04.jpg" alt="Product 4" className={styles.image} />
          <p className={styles.boxPrice}>$59.99</p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

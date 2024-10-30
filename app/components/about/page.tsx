import styles from './about.module.css';

const AboutSection = () =>{
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2 className={styles.title}>About Our Products</h2>
        <p className={styles.description}>
          At our store, we are committed to providing the best quality products to our customers.
          Each product is carefully crafted and selected to ensure durability and style. From casual wear
          to premium items, we have something for everyone.
        </p>
      </div>
      
      <div className={styles.imageGrid}>
        <img src="https://i.pinimg.com/564x/7a/1e/55/7a1e55212999242625ee21dc4f33aff6.jpg" alt="Product 1" className={styles.image} />
        <img src="https://i.pinimg.com/control/564x/23/a2/77/23a277aaf463a5a035a8af6559d63317.jpg" alt="Product 2" className={styles.image} />
        <img src="https://i.pinimg.com/736x/7d/c1/72/7dc172160f7b11d6131d72c36a0c84e2.jpg" alt="Product 3" className={styles.image} />
        <img src="https://i.pinimg.com/736x/24/05/c8/2405c8950f4a2dea670dc93647347c6d.jpg" alt="Product 4" className={styles.image} />
      </div>
    </section>
  );
};

export default AboutSection;

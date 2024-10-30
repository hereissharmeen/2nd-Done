import styles from './services.module.css';

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.servicesContainer}>
        
        {/* Service Card 1 */}
        <div className={styles.serviceCard}>
          <img 
            src="https://i.pinimg.com/control/564x/bb/d8/0e/bbd80eedc7586f5a58c6dcdabc505f7b.jpg" 
            alt="Service 1" 
            className={styles.serviceImage} 
          />
          <h3 className={styles.serviceTitle}>Service Title 1</h3>
          <p className={styles.serviceDescription}>
            Brief description of Service 1. Explain what makes it valuable.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className={styles.serviceCard}>
          <img 
            src="https://i.pinimg.com/control/564x/9b/5e/f6/9b5ef67d94762dc13d3c5b7e30ad7c5e.jpg" 
            alt="Service 2" 
            className={styles.serviceImage} 
          />
          <h3 className={styles.serviceTitle}>Service Title 2</h3>
          <p className={styles.serviceDescription}>
            Brief description of Service 2. Explain what makes it valuable.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className={styles.serviceCard}>
          <img 
            src="https://i.pinimg.com/control/564x/cd/59/f4/cd59f499a60965f70cf79baff1b6808d.jpg" 
            alt="Service 3" 
            className={styles.serviceImage} 
          />
          <h3 className={styles.serviceTitle}>Service Title 3</h3>
          <p className={styles.serviceDescription}>
            Brief description of Service 3. Explain what makes it valuable.
          </p>
        </div>

        {/* Add more services as needed */}
        
      </div>
    </section>
  );
};

export default ServicesSection;

import styles from './hero.module.css';

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/dreamy-aesthetic-cosmetic-product-with-fresh-background_23-2151382851.jpg?t=st=1729361317~exp=1729364917~hmac=0a056859a65314451a427a5a9dd9764e6eeda918537f8d7795ce687c38ee1e30&w=740')`,
      }}>
      <p>Unlock Your Skin's Natural</p>
      <h2>Beauty</h2>
    </section>
  );
};

export default Hero;


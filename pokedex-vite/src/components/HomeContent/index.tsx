import styles from './index.module.css'
import BannerCompleteDesktop from '../../assets/BannerCompleteDesktop.png' 

export const HomeContent = () => {
    return (
        <section className={styles.section}>
            <article className={styles.article}>
                <h1>Find <span className={styles.title}>all your favorite</span> Pokemon</h1>
                <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                <section className={styles.button_container}>
                    <button className={styles.button}>See pokemons</button>
                </section>
            </article>
            <img src={BannerCompleteDesktop} alt="Banner Pikachu com as pokebolas" />
            <img src={BannerCompleteDesktop} alt="" />
        </section>
    )
}
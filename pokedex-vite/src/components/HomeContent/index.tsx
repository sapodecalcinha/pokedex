import styles from './index.module.css'
import BannerCompleteDesktop from '../../assets/BannerCompleteDesktop.png' 
import { Link } from 'react-router-dom'
import { Header } from '../Header'

export const HomeContent = () => {
    return (
        <>
        <Header/>
        <section className={styles.section}>
            <article className={styles.article}>
                <h1>Find <span className={styles.title}>all your favorite</span> Pokemon</h1>
                <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                <section>
                    <button className={styles.button}><Link to="pokedex">See pokemons </ Link ></button>
                </section>
            </article>
            <img className={styles.img_desk} src={BannerCompleteDesktop} alt="Banner Pikachu com as pokebolas" />
            <img className={styles.img_mobi} src={BannerCompleteDesktop} alt="Banner Pikachu com as pokebolas mobile" />
        </section>
        </>
    )
}
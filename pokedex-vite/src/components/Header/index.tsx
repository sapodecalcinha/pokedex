import styles from './index.module.css'
import Logo from '../../assets/Logo.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={Logo} alt="Logo Pokémon" />
            <article className={styles.article}>
                <a className={styles.a} href="#">Home</a>
                <a href="#">Pokédex</a>
                <a href="#">Legendaries</a>
                <a href="#">Documentation</a>
            </article>
        </header>
    )
}
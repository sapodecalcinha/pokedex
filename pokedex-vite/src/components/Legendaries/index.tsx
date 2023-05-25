import styles from './index.module.css'
import mew from '../../assets/mew.png'

export const Legendaries = () => {
    return (
        <section className={styles.section}>
            <article className={styles.article}>
                <div className={styles.title}>
                    <h1>Legendaries</h1>
                    <hr className={styles.line}/>
                </div>
            </article>
                <article className={styles.article_pokemon}>
                    <img className={styles.img} src={mew} alt="Pokemon mew" />
                    <article className={styles.article_pokemon_info}>
                        <h2>Mew</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                            natoque penatibus et magnis dis parturient montes, nascetur 
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. </p>
                    </article>
                </article>
        </section>
    )
}
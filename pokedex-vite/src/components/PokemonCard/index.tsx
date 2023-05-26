import styles from './index.module.css'

export const PokemonCard = () => {
    return (
        <section className={styles.section}>
            <article className={styles.card_article}>
                <h1>Quilava</h1>
                <div className={styles.card_article_props}>
                    <div className={styles.card_article_direction_column}>
                        <p>Attack</p>
                        <div className={styles.card_article_back_num}>
                            <p>49</p>
                        </div>
                    </div>
                    <div className={styles.card_article_direction_column}>
                        <p>Defense</p>
                        <div className={styles.card_article_back_num}>
                            <p>49</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
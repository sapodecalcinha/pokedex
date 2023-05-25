import styles from './index.module.css'

export const Pokedex =  () => {
    return (
        <section className={styles.section}>
            <article className={styles.title}>
                <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
            </article>
            <input type="text" placeholder='Encuentra tu pokémon...' />
            <section>
                
            </section>

        </section>
    )
}
import styles from './index.module.css'
import { Header } from '../Header'
import { PokemonCard } from '../PokemonCard'

export const Pokedex =  () => {
    return (
        <>
        <Header/>
        <section className={styles.section}>
            <article className={styles.title}>
                <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
            </article>
            <input type="text" placeholder='Encuentra tu pokémon...' />
            <article>
                
            </article>
        </section>
        <section>
            <PokemonCard/>
        </section>
        </>
    )
}
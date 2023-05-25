import styles from './index.module.css'
import { Header } from '../Header'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'

export const Pokedex =  () => {
    return (
        <>
        <section className={styles.section}>
            <article className={styles.title}>
                <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
            </article>
            <input type="text" placeholder='Encuentra tu pokémon...' />
            <article>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>

                    </MenuButton>
                </Menu>
            </article>
        </section>
        </>
    )
}
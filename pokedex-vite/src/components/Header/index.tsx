import styles from './index.module.css'
import Logo from '../../assets/Logo.svg'
import Burguer from '../../assets/BurgenBtn.svg'
import {Menu, MenuButton, MenuList, MenuItem  } from '@chakra-ui/react'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={Logo} alt="Logo Pokémon" />
            <article className={styles.article}>
                <a className={styles.a} href="/">Home</a>
                <a href="pokedex">Pokédex</a>
                <a href="legendaries">Legendaries</a>
                <a href="#">Documentation</a>
            </article>

            <article className={styles.menu}>
                <Menu>
                    <MenuButton>
                        <img src={Burguer} alt="Burguer Button" />
                    </MenuButton>
                    <MenuList className={styles.teste}>
                        <MenuItem className={styles.teste}>
                            <img src={Logo} alt="Logo Pokemon" />
                            <a href="#">Home</a>
                            <a href="#">Pokédex</a>
                            <a href="#">Legendaries</a>
                            <a href="#">Documentation</a>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </article>
        </header>
    )
}
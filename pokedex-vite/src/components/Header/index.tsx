import styles from './index.module.css'
import Logo from '../../assets/Logo.svg'
import Burguer from '../../assets/BurgenBtn.svg'
import {Menu, MenuButton, MenuList, MenuItem  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={Logo} alt="Logo Pokémon" />
            <article className={styles.article}>
                <a className={styles.a} href="#"><Link to="/">Home </Link></a>
                <a href="#"><Link to="/pokedex">Pokédex</Link></a>
                <a href="#"><Link to="/legendaries">Legendaries</Link></a>
                <a href="https://pokeapi.co/docs/v2#pokemon-section">Documentation</a>
            </article>

            <article className={styles.menu}>
                <Menu>
                    <MenuButton>
                        <img src={Burguer} alt="Burguer Button" />
                    </MenuButton>
                    <MenuList className={styles.teste}>
                        <MenuItem className={styles.teste}>
                            <img src={Logo} alt="Logo Pokemon" />
                            <a href="#"><Link to="/"><span>Home</span> </Link></a>
                            <a href="#"><Link to="pokedex">  <span>Pokedéx</span> </Link></a>
                            <a href="#"><Link to="legendaries"><span>Legendaries</span></Link></a>
                            <a href="https://pokeapi.co/docs/v2#pokemon-section">
                                <span>Documentation</span>
                            </a>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </article>
        </header>
    )
}

import styles from './index.module.css'

type PokeTypesProps = {
    type: string[];
}

export const PokeTypes = ({ type }: PokeTypesProps) => {
    return (
<article className={type.includes('grass') || type.includes('bug') ? styles.poke_type_container_green :
 type.includes('stile') ||  type.includes('dark') ||  type.includes('rock')  ? styles.poke_type_container_gray :
  type.includes('water') ||  type.includes('ice') ? styles.poke_type_container_blue : 
  type.includes('fire') ||  type.includes('fighting') ||  type.includes('dragon') ? styles.poke_type_container_red :
  type.includes('normal') ||  type.includes('gosth') ? styles.poke_type_container_light_blue :
  type.includes('poison') ||  type.includes('psychic') ||  type.includes('fairy') ||  type.includes('ghost') ? styles.poke_type_container_purple :
  type.includes('ground') ? styles.poke_type_container_brown :
   styles.poke_type_container_yellow
 }
  >

            <span className={styles.poke_type_text}>
                {type}
            </span>
        </article>
    )

}
import style from './card.module.sass'
import { cardProps } from './_types/card.types'

export const Card = ({ title, content, position }: cardProps) => {
    // cons attribute
    return (
        <div className={style.card}>
            <div data-position={position} className=""><h2>{title}</h2></div>
            <p className="">{content}</p>
        </div >
    )
}

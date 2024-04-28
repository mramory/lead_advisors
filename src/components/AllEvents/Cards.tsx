import { Card } from "./Card"
import s from "../../styles/AllEvents/Cards.module.scss"

export const Cards = () => {
    return(
        <div className={s.container}>
            {Array.from({length: 8}).map((_, idx) => (
                <Card idx={idx} key={idx} />
            ))}
        </div>
    )
}
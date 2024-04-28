import clsx from "clsx"
import s from "../../styles/AllEvents/Card.module.scss"

export const Card = ({idx}: {idx: number}) => {
    const openFull = () => {
        document.querySelectorAll('[id ^= "card_"]').forEach(el => el.classList.remove(s.appear))
        document.querySelectorAll('[id ^= "card_container_"]').forEach(el => el.classList.remove(s.width_full))
        document.querySelector(`#card_${idx}`)?.classList.toggle(s.appear)
        document.querySelector(`#card_container_${idx}`)?.classList.toggle(s.width_full)
    }
    return(
        <div id={`card_container_${idx}`} className={clsx(s.container, idx === 1 && s.width_full)}>
            <div onClick={() => openFull()} className={s.mini_box}>
                <p>Hawaiian party</p>
                <span>01</span>
            </div>
            <div id={`card_${idx}`} className={clsx(s.full_box, idx === 1 && s.appear)}>
                <div className={s.info}>
                    <h2>Hawaiian party</h2>
                    <span>13.02.2023</span>
                    <button>More information</button>
                </div>
            </div>
        </div>
    )
}
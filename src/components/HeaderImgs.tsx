import leftImgLg from "../assets/ui//header/left_vector_lg.svg"
import leftImgMd from "../assets/ui//header/left_vector_md.svg"
import leftImgSm from "../assets/ui//header/left_vector_sm.svg"
import rightImgLg from "../assets/ui/header/right_vector_lg.svg"
import rightImgMd from "../assets/ui/header/right_vector_md.svg"
import rightImgSm from "../assets/ui/header/right_vector_sm.svg"
import s from "../styles/HeaderImgs.module.scss"
import { clsx } from 'clsx';

export const HeaderImgs = ({isLoaded}: {isLoaded: boolean}) => {
    return(
        <>
            <picture className={clsx(s.img_left, isLoaded && s.animLeft)}>
                <source media="(min-width: 1200px)" srcSet={leftImgLg} />
                <source media="(min-width: 768px)" srcSet={leftImgMd} />
                <img src={leftImgSm} alt="head" />
            </picture>
            <picture className={clsx(s.img_right, isLoaded && s.animRight)}>
                <source media="(min-width: 1200px)" srcSet={rightImgLg} />
                <source media="(min-width: 768px)" srcSet={rightImgMd} />
                <img src={rightImgSm} alt="head" />
            </picture>
        </>
    )
}
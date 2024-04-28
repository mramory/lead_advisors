import s from "../styles/Footer.module.scss";
import sApp from "../styles/App.module.scss";
import sAllEv from "../styles/AllEvents/Page.module.scss"
import arrow from "../assets/ui/arrow-right.svg"
import { Input } from "./forms/Input";
import clsx from "clsx";

export const Footer = ({isLoaded}: {isLoaded: boolean}) => {
  const scrollToAllEvents = () => {
    document.querySelector("#AllEvPage")?.classList.add(sAllEv.appear)
    let scrollDistance = window.innerHeight;
    document.querySelector("#all_ev_header")?.classList.add(sAllEv.animUp)
    window.scrollBy(0, scrollDistance);
    document.querySelector("#mainPage")?.classList.add(sApp.disappear)
  }
  return (
    <footer className={clsx(s.container, isLoaded && s.anim)}>
      <Input />
      <button onClick={() => scrollToAllEvents()} className={s.other_events_btn}>
        <p>Other Events</p>
        <img className={s.arrow_down} src={arrow} />
      </button>
    </footer>
  );
};

import { createFileRoute } from "@tanstack/react-router";
import { HeaderImgs } from "../components/HeaderImgs";
import { MainPart } from "../components/MainPart";
import { Footer } from "../components/Footer";

import s from "../styles/App.module.scss";
import { useEffect, useState } from "react";
import { AllEventsSheet } from "../components/AllEvents/Page";

export const Route = createFileRoute("/")({
  component: () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      window.addEventListener('storage', () => {
        setIsLoaded(true)
    })
    }, [])

    if(!isLoaded) return null
    return (
      <>
      <div id="mainPage" className={s.wrapper}>
        <HeaderImgs isLoaded={isLoaded} />
        <MainPart isLoaded={isLoaded} />
        <Footer isLoaded={isLoaded} />
      </div>
      <AllEventsSheet />
      </>
    );
  },
});

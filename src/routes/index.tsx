import { Title } from "@solidjs/meta";
import { onMount } from "solid-js";
import gsap from "gsap";
import Cloud from "../components/Cloud";
import "./index.scss";

export default function Home() {
  onMount(() => {
    gsap.from(".title", { duration: 1, opacity: 0 });
    gsap.from(".capsule", { duration: 1, opacity: 0, delay: 0.5 });
  });

  return (
    <main class="container">
      <Title>🙈</Title>
      <div class="capsule-title">
        <img class="title" src={"/title.png"} alt="title" />
        <div class="capsule">
          <img src={"/subtitle.png"} alt="title" />
        </div>
      </div>

      <div class="atractions">
        <img class="angel" src={"/cupid.png"} alt="cupid" />
        <h2 class="giu" >GIÜBERTI (LONG SET) </h2>
        <h3 class="others">LOWEZ • LAGE • OINHAS • CH4INA CUBO • SALLEM</h3>
        <h6 class="andMore"> E MUITO MAIS</h6>
        {/* TODO: fazzer mãos */}
        {/* <img src={"/hands.png"} alt="hands" /> */}
      </div>

      <Cloud id="cloud1" />
      <Cloud id="cloud2" />
      <Cloud id="cloud3" />
      <Cloud id="cloud4" />
    </main>
  );
}

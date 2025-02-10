import { onMount } from "solid-js";
import gsap from "gsap";
import "./Cloud.scss";

export default function Cloud(props: { id: any }) {
  const cloudId = props.id; // Use provided id or generate a random one
  const cloudImages = ["/cloud.png", "/cloud2.png", "/cloud3.png"]; // Array of cloud images
  const randomImage = cloudImages[Math.floor(Math.random() * cloudImages.length)]; // Randomly select an image

  const animateCloud = () => {
    console.log("animatei");
    const duration = Math.random() * 6 + 9; // Random duration between 5 and 10 seconds
    const scale = Math.random() * 0.6 + 0.8; // Random scale between 0.8 and 1.2
    const direction = Math.random() > 0.5 ? 1 : -1; // Random direction
    const top = Math.random() * 100; // Random top position between 0% and 100%
    const shadowMarginTop = Math.random() * 20 + 5; // Random margin-top between -10px and 10px

    gsap.fromTo(
      `.${cloudId}`,
      {
        x: direction * (window.innerWidth + 100), // Start off-screen
        scale,
        top: `${top}%`,
      },
      {
        x: -direction * (window.innerWidth + 100), // End off-screen on the other side
        duration,
        ease: "linear",
        onComplete: animateCloud, // Restart animation with new values
      }
    );

    document.querySelector(`.shadow.${cloudId}`)?.setAttribute("style", `margin-top: ${shadowMarginTop}px`);
  };

  onMount(() => {
    animateCloud();
  });

  return (
    <>
      <img class={`cloud ${cloudId}`} src={randomImage} alt="cloud" />
      <img class={`cloud shadow ${cloudId}`} src={randomImage} alt="cloud" />
    </>
  );
}

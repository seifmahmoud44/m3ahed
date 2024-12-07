import classes from "./slider.module.css";
import SlideShow from "./carousel/SlideShow";
export default function Slider() {
  const slides = [
    { url: "https://g.top4top.io/p_3155igm8n1.png", title: "beach" },
    { url: "https://i.top4top.io/p_3155z4nyx1.png", title: "boat" },
    { url: "https://f.top4top.io/p_3155fiolf1.png", title: "forest" },
  ];
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };
  return (
    <>
      <section className={classes.section1}>
        <div className={classes.carouselOverlay}></div>
        <div style={containerStyles}>
          <SlideShow slides={slides} />
        </div>
      </section>
    </>
  );
}

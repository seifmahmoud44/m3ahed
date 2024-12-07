import { useEffect, useState } from "react";
import clsses from  "./curser.module.css";
import { motion } from "framer-motion";

const Cursor = ({ scaling }) => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{
          x: largecircle.x - 22,
          y: largecircle.y - 22,
          transition: { type: "spring", mass: .3 },
        }}
        className={clsses.largeCircle}
        style={{ scale: scaling ? 0.01 : 1 }}></motion.div>
      <motion.div
        animate={{
          x: smallcircle.x - 8,
          y: smallcircle.y - 8,
          transition: { type: "spring", mass: .01 },
        }}
        className={clsses.smallCircle}></motion.div>
    </div>
  );
};

export default Cursor;
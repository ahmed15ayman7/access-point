import React from "react";
import { motion } from "framer-motion";
import "./from.css";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../../redux/types/filterType";
import { Like2Play } from "../../../assets/audios/SoundPlay";

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

export default function Switch({ label, name, toglison, setNumPro }) {
  let dispatch = useDispatch();
  let products = useSelector((s) => s.getDate.products);
  const toggleSwitch = () => {
    setNumPro(0);
    toglison === false
      ? dispatch({ type: Filter, products: products, name: name })
      : dispatch({ type: Filter, products: products, name: "" });
    Like2Play();
  };

  return (
    <div className="switch-form mb-3">
      <div className={`switch ${toglison}`} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
      <h4>{label}</h4>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

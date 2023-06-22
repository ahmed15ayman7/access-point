import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { items } from "./ItemsMagic";
import { WaterPlay, ErrorPlay } from "../../assets/audios/SoundPlay";
import "./about.css";
import { Row } from "react-bootstrap";

export const AboutMagic = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <Row
      style={{ justifyContent: "space-evenly" }}
      className="p-lg-5 m-lg-5 p-md-4 m-md-4 p-1 m-1 pt-5 mt-5 ">
      {items.map((item) => (
        <motion.div
          layoutId={item.id}
          className="col-lg-5 col-md-8 col-12 mb-2 item pt-3 pb-3"
          onClick={() => {
            setSelectedId(item.id);
            WaterPlay();
          }}>
          <motion.h3>{item.title}</motion.h3>
          <motion.h5>{item.subtitle}</motion.h5>
        </motion.div>
      ))}

      <AnimatePresence>
        {items.map((item) =>
          item.id === selectedId
            ? selectedId && (
                <motion.div className="item-selected" layoutId={selectedId}>
                  <div className="div-details p-3">
                    <motion.h2>{item.title}</motion.h2>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.p>{item.details}</motion.p>
                    <motion.button
                      className="btn-delete btn rounded-pill"
                      style={{ border: "none !important" }}
                      onClick={() => {
                        setSelectedId(null);
                        ErrorPlay();
                      }}>
                      <i className="fa-solid fa-xmark" />
                    </motion.button>
                  </div>
                </motion.div>
              )
            : null
        )}
      </AnimatePresence>
    </Row>
  );
};

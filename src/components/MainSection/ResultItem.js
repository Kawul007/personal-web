import React from "react";
import { motion } from "framer-motion";
import Item from "antd/lib/list/Item";
function ResultItem({ item }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="result"
    >
      <img src={item.image}></img>
      <span>
        {item.date}&nbsp;&nbsp;&nbsp;{item.type}
      </span>
      <h4>{item.title}</h4>
    </motion.div>
  );
}

export default ResultItem;

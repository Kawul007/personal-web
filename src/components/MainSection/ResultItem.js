import React from "react";
import { motion } from "framer-motion";
import Item from "antd/lib/list/Item";
import {ResoultWrapper} from "./MainSection.style"
function ResultItem({ item }) {
  return (
    <ResoultWrapper>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="result"
      >
        <img className="img" src={item.image}></img>
        <span>
          {item.date}&nbsp;&nbsp;&nbsp;{item.type}
        </span>
        <h4>{item.title}</h4>
      </motion.div>
    </ResoultWrapper>
  );
}

export default ResultItem;

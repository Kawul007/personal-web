import React, { useEffect, useState } from "react";
import { BtnWrapper } from "./MainSection.style";
const FilterBtn = ({ setActiveBtn, activeBtn, setFiltered, blog }) => {
  useEffect(() => {
    if (activeBtn === 0) {
      setFiltered(blog);
      return;
    }
    const filtered = blog.filter((item) =>
     item.name.includes(activeBtn)
    );
    setFiltered(filtered);
    console.log(filtered);
  }, [activeBtn]);

  return (
    <BtnWrapper>
      <div className="btn-container">
        <button
          className={activeBtn === 0 ? "active" : ""}
          onClick={() => setActiveBtn(0)}
        >
          全部内容
        </button>
        <button
          className={activeBtn === 28 ? "active" : ""}
          onClick={() => setActiveBtn(28)}
        >
          前端相关
        </button>
        <button
          className={activeBtn === 35 ? "active" : ""}
          onClick={() => setActiveBtn(35)}
        >
          后端相关
        </button>
        <button
          className={activeBtn === 30 ? "active" : ""}
          onClick={() => setActiveBtn(30)}
        >
          其他内容
        </button>
      </div>
    </BtnWrapper>
  );
};

export default FilterBtn;

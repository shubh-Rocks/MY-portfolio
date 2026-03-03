import React from "react";

const Node = () => {
  return (
    <div className="flex  -right-72 flex-col absolute items-center w-fit">
    
      <div className="bg-[#8cc84b] text-white px-1 pt-0.5 md:px-2 md:py-1 rounded-full font-medium text-[12px] shadow-lg">
        Node.js
      </div>
      <div
        className="w-0 h-0 
        border-l-[10px] border-l-transparent 
        border-r-[10px] border-r-transparent 
        border-t-[10px] border-t-[#8cc84b] 
        -mt-[1px]"
      ></div>
    </div>
  );
};

export default Node;

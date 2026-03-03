import React from "react";

const ReactTag = () => {
  return (
    <div className="flex flex-col  -right-53 absolute  items-center w-fit">
      <div className="bg-[#61dafb] text-white px-1 pt-0.5 md:px-2 md:py-1 rounded-full font-medium text-[12px] shadow-lg">
        React.js
      </div>

      <div
        className="w-0 h-0 
        border-l-[10px] border-l-transparent 
        border-r-[10px] border-r-transparent 
        border-t-[10px] border-t-[#61dafb] 
        -mt-[1px]"
      ></div>
    </div>
  );
};

export default ReactTag;

import React from "react";
import Badge from "../ui/Badge";

export default function NewsDetail() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6 text-[14px]">
        <span className="text-black">Главная</span>
        <span className="text-[#999999] text-[10px]">❯</span>
        <span className="text-[#999999]">Caterpillar</span>
      </div>
    </div>
  );
}

import type { StepDetailProps } from "@/types/crm";
import React from "react";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

const StepDetail: React.FC<StepDetailProps> = ({
  contactName,
  phone,
  tags,
  productName,
  amount,
  createdAt,
}) => {
  return (
    <Link
      to="/access-contacts"
      className="rounded-xl border border-[#3F3F464D] bg-neutral-600 px-3 py-4 flex flex-col gap-[10px] text-neutral-50 w-[222px]"
    >
      <div className="flex items-center gap-2">
        <img src="/white-circle.png" alt="Contact Icon" />
        <span className="text-sm">{contactName}</span>
      </div>
      <p className="text-sm">{phone}</p>
      <div className="flex gap-1">
        {tags.map((tag, idx) => (
          <Badge className="capitalize" key={idx}>
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-t border-b border-[#3F3F464D] py-2">
        <span className="text-sm">{productName}</span>
        <div className="flex items-center gap-2">
          <img src="/coin.svg" alt="Coin Icon" />
          <span className="text-sm">{amount}</span>
        </div>
      </div>
      <span className="text-sm">{createdAt}</span>
    </Link>
  );
};

export default StepDetail;

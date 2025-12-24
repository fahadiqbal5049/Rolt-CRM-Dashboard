import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  as?: "th" | "td";
  className?: string;
};

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ as: Component = "td", className = "", ...props }, ref) => {
    const baseStyles =
      "whitespace-break-spaces text-[14px] break-words px-2 text-left";

    const cellStyles = cn(
      baseStyles,
      {
        "font-semibold text-neutral-50 py-3 sm:py-4": Component === "th",
        "font-normal text-neutral-50 py-2 sm:py-3": Component === "td",
      },
      className
    );

    return <Component ref={ref} className={cellStyles} {...props} />;
  }
);

TableCell.displayName = "TableCell";

export default TableCell;

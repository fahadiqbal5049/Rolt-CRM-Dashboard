import React from "react";
import clsx from "clsx";
import * as Icons from "../../ui/shared/Icons";

interface Props {
  styles?: string;
  placeholder?: string;
}

const Search: React.FC<Props> = ({ styles = "w-[417px] min-h-[40px]", placeholder }: Props) => {
  return (
    <div
      className={clsx(
        "gap-2 rounded-[6px]  border border-neutral-500 bg-neutral-600 px-3 flex justify-start items-center",
        styles
      )}
    >
      <Icons.search className="w-[16px] h-[16px]" />
      <input
        type="text"
        placeholder={placeholder}
        className="grow-1 text-[16px] font-normal text-neutral-400 w-full h-full border-none focus:outline-none"
      />
    </div>
  );
};

export default Search;

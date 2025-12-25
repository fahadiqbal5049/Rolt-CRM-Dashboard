import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import MoreFilter from "../ui/shared/MoreFilter";
import Search from "../ui/shared/Search";

const CrmHeader = () => {
  return (
    <div className=" mt-[32px] mb-[52px]  max-w-[723px] flex flex-wrap gap-[15px]  items-center ">
      {" "}
      <Select>
        <SelectTrigger className="w-full  max-w-[280px] h-[42px]  ">
          <SelectValue placeholder="Funnel 1" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="funil1">Funnel 1</SelectItem>
            <SelectItem value="funil2">Funnel 2</SelectItem>
            <SelectItem value="funil3">Funnel 3</SelectItem>
            <SelectItem value="funil4">Funnel 4</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Search styles="w-full  h-[40px] max-w-[280px]  " placeholder="Search" />
      <div className="  w-fit text-nowrap flex  items-center ">
        <MoreFilter />
      </div>
    </div>
  );
};

export default CrmHeader;

import React from "react";
import FilterHeader from "@/components/contatos/FilterHeader";
import Table from "@/components/ui/shared/table/Table";
import TableBody from "@/components/ui/shared/table/TableBody";
import TableCell from "@/components/ui/shared/table/TableCell";
import TableHeader from "@/components/ui/shared/table/TableHeader";
import TableRow from "@/components/ui/shared/table/TableRow";
import { Switch } from "@/components/ui/switch";
import TableEdit from "@/components/contatos/TableEdit";
import ScrollArea from "@/components/ui/shared/ScrollArea";

const Contacts: React.FC = () => {
  return (
    <div className="w-full flex h-[calc(100dvh-160px)] flex-col ">
      <h2 className="text-[26px] mb-[10px] sm:text-[30px] font-semibold text-neutral-50">
        Contacts
      </h2>
      {/* filter header ------------------> */}
      <FilterHeader />
      {/* contacts table -----------> */}
      <div className="flex-1 min-h-0 mt-3">
        <ScrollArea
          classNames={{
            root: "w-full max-h-full overflow-auto border-[1px] border-[#3F3F464D] rounded-[12px] bg-gray-500",
          }}
        >
          <Table className="min-w-[900px]">
            <TableHeader className="border-b-[1px] border-[#3F3F464D]">
              <TableRow>
                {[
                  "Contact",
                  "Phone",
                  "Created",
                  "Assistant",
                  "State",
                  "Actions",
                ].map((item, index) => {
                  return (
                    <TableCell key={index} as="th">
                      <div className="flex justify-start items-center gap-1">
                        <p>{item}</p>
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array(17)
                .fill(0)
                .map((_, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell as="td" className="">
                        <div className="flex items-center gap-2">
                          <div className="w-[40px] h-[40px] rounded-full bg-neutral-50"></div>
                          <p>Lorem ipsum</p>
                        </div>
                      </TableCell>

                      <TableCell as="td" className="">
                        +55 (00) 00000-0000
                      </TableCell>
                      <TableCell as="td" className="">
                        00/00/0000
                      </TableCell>
                      <TableCell as="td" className="">
                        Assistant name
                      </TableCell>
                      <TableCell as="td">
                        <Switch id="state" />
                      </TableCell>
                      <TableCell as="td">
                        <TableEdit />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Contacts;

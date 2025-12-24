import React from "react";
import Table from "@/components/ui/shared/table/Table";
import TableBody from "@/components/ui/shared/table/TableBody";
import TableRow from "@/components/ui/shared/table/TableRow";
import TableCell from "@/components/ui/shared/table/TableCell";
import ScrollArea from "@/components/ui/shared/ScrollArea";
import clsx from "clsx";

const AssistentesTable: React.FC = () => {
  return (
    <div className="w-full flex gap-4 flex-col ">
      <h1 className="text-[24px] font-semibold text-neutral-50">Assistants</h1>
      <ScrollArea
        classNames={{
          root: "w-full  max-h-[300px] md:max-h-[350px] overflow-auto border-[1px] border-[#3F3F464D] rounded-[12px] bg-[#20202040]",
        }}
      >
        <Table className="min-w-[350px]">
          <TableBody>
            {AssistentesData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-col">
                      <div className="flex justify-start items-center gap-2">
                        <div
                          className={clsx(
                            "w-[7px] h-[7px] rounded-full",
                            item.status === "active"
                              ? "bg-green-500"
                              : "bg-orange-400"
                          )}
                        ></div>
                        <p>Active</p>
                      </div>
                      <p>10 contacts</p>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default AssistentesTable;

export const AssistentesData = [
  {
    name: "SDR Prospecting",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "SDR Prospecting",
    status: "in-active",
    value: "10 contacts",
  },
  {
    name: "SDR Prospecting",
    status: "in-active",
    value: "10 contacts",
  },
  {
    name: "SDR Prospecting",
    status: "in-active",
    value: "10 contacts",
  },
  {
    name: "SDR Prospecting",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "SDR Prospecting",
    status: "active",
    value: "10 contacts",
  },
];

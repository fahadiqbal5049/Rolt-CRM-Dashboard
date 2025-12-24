import React from "react";
import Table from "@/components/ui/shared/table/Table";
import TableBody from "@/components/ui/shared/table/TableBody";
import TableRow from "@/components/ui/shared/table/TableRow";
import TableCell from "@/components/ui/shared/table/TableCell";
import TableHeader from "@/components/ui/shared/table/TableHeader";
import ScrollArea from "@/components/ui/shared/ScrollArea";

const CampaignsTable: React.FC = () => {
  return (
    <div className="w-full flex gap-4 flex-col ">
      <h1 className="text-[24px] font-semibold text-neutral-50">Campaigns</h1>
      <ScrollArea
        classNames={{
          root: "w-full max-h-[300px] md:max-h-[350px] overflow-auto border-[1px] border-[#3F3F464D] rounded-[12px] bg-[#20202040]",
        }}
      >
        <Table className="min-w-[350px]">
          <TableHeader className="border-b-[1px] border-[#3F3F464D]">
            <TableRow>
              <TableCell className="text-[20px] text-white font-semibold">
                <p className="py-2">

                Campaigns
                </p>
              </TableCell>
              <TableCell className="text-[20px] text-white font-semibold">
                Total Contacts
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {AssistentesData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell> 
                    <p className="py-1">

                    {item.name}
                    </p>
                    
                    </TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default CampaignsTable;

export const AssistentesData = [
  {
    name: "Campaign 1",
    value: "100",
  },
  {
    name: "Campaign 1",
    value: "100",
  },
  {
    name: "Campaign 1",
    value: "100",
  },
  {
    name: "Campaign 1",
    value: "100",
  },
  {
    name: "Campaign 1",
    value: "100",
  },
  {
    name: "Campaign 1",
    value: "100",
  },
  {
    name: "Campaign 1",
    value: "100",
  },
];

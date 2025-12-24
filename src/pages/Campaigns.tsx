import React from "react";
import FilterHeader from "@/components/campaigns/FilterHeader";
import ScrollArea from "@/components/ui/shared/ScrollArea";
import Table from "@/components/ui/shared/table/Table";
import TableBody from "@/components/ui/shared/table/TableBody";
import TableCell from "@/components/ui/shared/table/TableCell";
import TableHeader from "@/components/ui/shared/table/TableHeader";
import TableRow from "@/components/ui/shared/table/TableRow";
import { Switch } from "@/components/ui/switch";
import clsx from "clsx";
import CampaignsEditorOption from "@/components/campaigns/CampaignsEditorOption";

const Campaigns: React.FC = () => {
  return (
    <div className="w-full flex h-[calc(100dvh-160px)] flex-col">
      <h2 className="text-[26px] mb-[10px] sm:text-[30px] font-semibold text-neutral-50">
        Campaigns
      </h2>
      <FilterHeader />
      <div className="flex-1 min-h-0 mt-3">
      <ScrollArea
        classNames={{
          root: "w-full max-h-full overflow-auto border-[1px] border-[#3F3F464D] rounded-[12px] bg-gray-500",
        }}
      >
        <Table className="min-w-[350px]">
          <TableHeader className="border-b-[1px] border-[#3F3F464D]">
            <TableRow>
              <TableCell className="text-neutral-50 font-semibold">
                <p className="py-2">Campaign</p>
              </TableCell>
              <TableCell className="text-neutral-50 font-semibold">
                Status
              </TableCell>
              <TableCell className="text-neutral-50 font-semibold">
                State
              </TableCell>
              <TableCell className="text-neutral-50 font-semibold">
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CampaignsData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-[40px] h-[40px] rounded-full bg-neutral-50"></div>
                      {item.name}
                    </div>
                  </TableCell>
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
                  <TableCell>
                    <Switch
                      activeColor="data-[state=checked]:bg-[#22c55e]"
                      inactiveColor="data-[state=unchecked]:bg-[#3F3F46]"
                      thumbColor="bg-white"
                    />
                  </TableCell>
                  <TableCell as="td">
                    <CampaignsEditorOption />
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

export default Campaigns;

export const CampaignsData = [
  {
    name: "Campaign 1",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 2",
    status: "in-active",
    value: "10 contacts",
  },
  {
    name: "Campaign 3",
    status: "in-active",
    value: "10 contacts",
  },
  {
    name: "Campaign 4",
    status: "in-active",
    value: "10 contacts",
  },
  {
    name: "Campaign 5",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
  {
    name: "Campaign 6",
    status: "active",
    value: "10 contacts",
  },
];

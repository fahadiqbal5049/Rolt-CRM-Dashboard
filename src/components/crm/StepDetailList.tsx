import React, { useState } from "react";
import StepDetail from "./StepDetail";
import {
  stepDetailsList1,
  stepDetailsList2,
  stepDetailsList3,
  stepDetailsList4,
  stepDetailsList5,
} from "@/data/crmData";
import type { StepDetailProps } from "@/types/crm";
import { DndContext } from "@dnd-kit/core";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { DragEndEvent } from "@dnd-kit/core";

type ItemWithID = {
  id: string;
  data: StepDetailProps;
};

const DraggableStepDetail: React.FC<{ item: ItemWithID }> = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: item.id,
  });

  const style = {
    transform: transform ? CSS.Translate.toString(transform as import("@dnd-kit/utilities").Transform) : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <StepDetail {...item.data} />
    </div>
  );
};

const StepDetailList: React.FC = () => {
  const [columns, setColumns] = useState<ItemWithID[][]>(() => [
    stepDetailsList1.map((d, i) => ({ id: `item-1-${i}`, data: d })),
    stepDetailsList2.map((d, i) => ({ id: `item-2-${i}`, data: d })),
    stepDetailsList3.map((d, i) => ({ id: `item-3-${i}`, data: d })),
    stepDetailsList4.map((d, i) => ({ id: `item-4-${i}`, data: d })),
    stepDetailsList5.map((d, i) => ({ id: `item-5-${i}`, data: d })),
  ]);

  const findColumnIndex = (id: string): number | null => {
    for (let colIdx = 0; colIdx < columns.length; colIdx++) {
      if (columns[colIdx].some((item) => item.id === id)) {
        return colIdx;
      }
    }
    return null;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const draggedId = String(active.id);
    const dropZoneId = String(over.id);

    if (!dropZoneId.startsWith("column-")) {
      return;
    }

    const toColumnIdx = Number(dropZoneId.replace("column-", ""));
    const fromColumnIdx = findColumnIndex(draggedId);

    if (fromColumnIdx === null || fromColumnIdx === toColumnIdx) {
      return;
    }

    setColumns((prevCols) => {
      const newCols = prevCols.map((col) => [...col]);

      const itemIndex = newCols[fromColumnIdx].findIndex((it) => it.id === draggedId);
      const [moved] = newCols[fromColumnIdx].splice(itemIndex, 1);

      newCols[toColumnIdx].push(moved);

      return newCols;
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex pb-3 flex-wrap gap-4 min-w-[1200px]">
        {columns.map((colItems, colIdx) => (
          <DroppableColumn key={colIdx} colIdx={colIdx} colItems={colItems} />
        ))}
      </div>
    </DndContext>
  );
};

type DroppableColumnProps = {
  colIdx: number;
  colItems: ItemWithID[];
};

const DroppableColumn: React.FC<DroppableColumnProps> = ({ colIdx, colItems }) => {
  const columnId = `column-${colIdx}`;
  const { setNodeRef } = useDroppable({
    id: columnId,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        flex flex-col gap-4 
        rounded-lg 
        min-w-[220px]
         
      `}
    >
      {colItems.map((item) => (
        <DraggableStepDetail key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StepDetailList;

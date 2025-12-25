import ScrollArea from "../ui/shared/ScrollArea";
import StepDetailList from "./StepDetailList";
import StepsList from "./StepsList";

const CrmMain = () => {
  return (
    <div>
      <ScrollArea>
        <div className=" flex flex-col gap-4 ">
          <StepsList />
          <StepDetailList />
        </div>
      </ScrollArea>
    </div>
  );
};

export default CrmMain;

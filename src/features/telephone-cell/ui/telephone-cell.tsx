import { Telephone } from "@/widgets/telephone/lib/telephone-cells";
import clsx from "clsx";

const TelephoneCell = ({ item, index }: { item: Telephone; index: number }) => {
  return (
    <div
      className={clsx(
        item.cell === 0 && "text-end",
        " border-[2px] border-black px-[30px] py-[12px]"
      )}
    >
      <p>{item.cell}</p>
    </div>
  );
};

export default TelephoneCell;

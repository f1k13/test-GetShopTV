import { Telephone } from "@/widgets/telephone/lib/telephone-cells";
import clsx from "clsx";

const TelephoneCell = ({
  item,
  value,
  setValue,
}: {
  item: Telephone;
  index: number;
  value: string;
  setValue: (value: string) => void;
}) => {
  const onKeyPress = (key: number) => {
    setValue(String([...value, key, ...value.slice(key, key)]));
  };
  
  return (
    <div
      onClick={() => onKeyPress(item.cell)}
      className={clsx(
        "border-[2px] border-black px-[30px] py-[12px] flex items-center gap-[10px]"
      )}
    >
      {item.cell}
    </div>
  );
};

export default TelephoneCell;

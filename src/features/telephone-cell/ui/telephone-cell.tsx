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
    const newValue = String([...value, key, ...value.slice(key, key)]);
    const updatedValue = newValue.replace(/,/g, "");
    setValue(updatedValue);
  };

  return (
    <div
      onClick={() => onKeyPress(item.cell)}
      className={clsx(
        "border-[2px] cursor-pointer transition duration-0 border-black px-[30px] py-[12px] flex items-center gap-[10px] hover:bg-black hover:text-white hover:transinsition-all hover:duration-150"
      )}
    >
      {item.cell}
    </div>
  );
};

export default TelephoneCell;

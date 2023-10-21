import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { TelephoneCell } from "@/features/telephone-cell/ui";
import { TelephoneCells } from "../lib/telephone-cells";
import { TelephoneController } from "@/features/telephon-controller/ui";
import clsx from "clsx";
import { useStore } from "effector-react";
import { $errorNumber } from "@/entities/error-number";
import { disabledEvent } from "@/entities/disabled";
const Telephone = () => {
  const [value, setValue] = useState<string>("");
  const isErrorNumber = useStore($errorNumber);
  const onBackspace = () => {
    setValue(value.slice(0, -1));
    disabledEvent(false);
  };
  useEffect(() => {
    if (value.length >= 10) disabledEvent(true);
  }, [value]);
  return (
    <div className="bg-mainBG flex flex-col items-center w-[380px] h-[720px] ">
      <label htmlFor="input" className="text-26px font-normal mt-[71px]">
        Введите ваш номер
      </label>
      <label htmlFor="input" className="text-26px font-normal ">
        мобильного телефона
      </label>
      <InputMask
        id="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        mask="+7(999)999-99-99"
        placeholder="+7(___)___-__-__"
        className={clsx(
          "w-full text-center z-20 bg-transparent text-32px font-bold text-black outline-none placeholder:text-black placeholder:text-32px placeholder:font-bold",
          isErrorNumber && "text-errorColor"
        )}
      />
      <p className="text-14px text-black w-[315px] text-center">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className="flex flex-wrap flex-row-reverse justify-center w-[270px] gap-[10px] mt-[33px]">
        {TelephoneCells.map((item, index) => (
          <TelephoneCell
            setValue={setValue}
            value={value}
            index={index}
            item={item}
            key={index}
          />
        ))}
        <button
          onClick={onBackspace}
          className={clsx(
            "px-[45px] py-[12px] border-[2px] border-black hover:bg-black hover:text-white hover:transinsition-all hover:duration-150  transition duration-0 cursor-pointer"
          )}
        >
          Стереть
        </button>
      </div>
      <TelephoneController value={value} />
    </div>
  );
};

export default Telephone;

import { useState } from "react";
import InputMask from "react-input-mask";
import { TelephoneCell } from "@/features/telephone-cell/ui";
import { TelephoneCells } from "../lib/telephone-cells";
const Telephone = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-mainBG w-[380px] h-[720px] ">
      <form className="w-full flex flex-col items-center justify-center ">
        <label
          htmlFor="input"
          className="text-26px font-normal mt-[71px] w-full text-center"
        >
          Введите ваш номер
        </label>
        <label
          htmlFor="input"
          className="text-26px font-normal text-center w-[300px]"
        >
          мобильного телефона
        </label>
        <InputMask
          id="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          mask="+7(999)999-99-99"
          placeholder="+7(___)___-__-__"
          className="w-full text-center z-20 bg-transparent text-32px font-bold text-black outline-none placeholder:text-black placeholder:text-32px placeholder:font-bold "
        />
        <div className="grid grid-cols-3 gap-[10px] mt-[33px] grid-rows-3">
          {TelephoneCells.map((item, index) => (
            <TelephoneCell index={index} item={item} key={index} />
          ))}
          
        </div>
      </form>
    </div>
  );
};

export default Telephone;

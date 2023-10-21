import { useState } from "react";
import InputMask from "react-input-mask";
import { TelephoneCell } from "@/features/telephone-cell/ui";
import { TelephoneCells } from "../lib/telephone-cells";
const Telephone = () => {
  const [value, setValue] = useState<string>("");
  const onBackspace = () => {
    setValue(value.slice(0, -1));
  };
  return (
    <div className="bg-mainBG w-[380px] h-[720px] ">
      <div className="w-full flex flex-col items-center justify-center ">
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
          className="w-full text-center z-20 bg-transparent text-32px font-bold text-black outline-none placeholder:text-black placeholder:text-32px placeholder:font-bold "
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
            className="px-[45px] py-[12px] border-[2px] border-black"
          >
            Стереть
          </button>
        </div>
      </div>
    </div>
  );
};

export default Telephone;

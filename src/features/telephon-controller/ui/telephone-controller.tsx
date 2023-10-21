import { CheckIcon } from "@/shared/ui/icons";
import clsx from "clsx";
import { useState } from "react";

const TelephoneController = ({
  setIsDisabled,
  isDisabled,
  value,
  setIsErrorPhoneNumber,
  IsErrorPhoneNumber,
}: {
  setIsDisabled: (value: boolean) => void;
  isDisabled: boolean;
  value: string;
  setIsErrorPhoneNumber: (value: boolean) => void;
  IsErrorPhoneNumber: boolean;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const hasRepeatedDigits = /(.)\1{6,}/.test(value);
  const check = () => {
    setIsVisible(!isVisible);
  };
  const submit = () => {
    if (value.length >= 10) setIsDisabled(true);
    if (hasRepeatedDigits) {
      setIsErrorPhoneNumber(true);
    } else {
      setIsErrorPhoneNumber(false);
    }
  };
  return (
    <div className="mt-[33px] w-full flex flex-col items-center">
      <div className="flex items-center">
        {IsErrorPhoneNumber && <p>Неверный номер</p>}
        <div
          onClick={() => check()}
          className="w-[40px] h-[40px] border-[2px] border-black flex items-center "
        >
          {isVisible && <CheckIcon />}
        </div>
        <p className="w-[190px]  text-center  text-textSecondaryColor text-14px font-normal">
          Согласие на обработку персональных данных
        </p>
      </div>
      <button
        onClick={submit}
        className={clsx(
          "bg-transparent mt-[25px] px-[45px] py-[12px] border-[2px] outline-none border-borderColor cursor-not-allowed text-16px",
          isDisabled &&
            isVisible &&
            "cursor-pointer hover:bg-black hover:text-white hover:border-none hover:text-16px"
        )}
      >
        Подтвердить номер
      </button>
    </div>
  );
};

export default TelephoneController;

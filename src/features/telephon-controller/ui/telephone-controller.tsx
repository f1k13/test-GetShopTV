import { $errorNumber, errorNumberEvent } from "@/entities/error-number";
import { useStore } from "effector-react";
import { useState } from "react";
import TelephoneCheck from "./telephone-check.tsx";
import { $disabled, disabledEvent } from "@/entities/disabled";
import clsx from "clsx";

const TelephoneController = ({ value }: { value: string }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isErrorNumber = useStore($errorNumber);
  const isDisabled = useStore($disabled);
  const hasRepeatedDigits = /(.)\1{6,}/.test(value);
  const submit = () => {
    if (value.length >= 10) disabledEvent(true);
    if (hasRepeatedDigits) {
      errorNumberEvent(true);
    } else {
      errorNumberEvent(false);
    }
  };
  return (
    <div className="mt-[33px] w-full flex flex-col items-center">
      {isErrorNumber === true ? (
        <p className="text-14px text-errorColor uppercase font-medium">
          Неверно введён номер
        </p>
      ) : (
        <TelephoneCheck isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
      <button
        onClick={submit}
        className={clsx(
          "bg-transparent mt-[25px] px-[45px] py-[12px] border-[2px] outline-none border-borderColor cursor-not-allowed text-16px font-medium text-borderColor",
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

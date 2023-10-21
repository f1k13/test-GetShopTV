import { CheckIcon } from "@/shared/ui/icons";

const TelephoneCheck = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}) => {
  
  const check = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center">
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
    </div>
  );
};

export default TelephoneCheck;

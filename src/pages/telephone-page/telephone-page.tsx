import { TelephoneCloseScreen } from "@/features/telephone-close-screen/ui";
import { Telephone } from "@/widgets/telephone/ui";

const TelephonePage = () => {
  return (
    <div className="bg-telephone relative bg-auto flex bg-no-repeat w-full h-full">
      <Telephone />
      <div className="absolute left-[61%] top-[20px] ">
        <TelephoneCloseScreen />
      </div>
    </div>
  );
};

export default TelephonePage;

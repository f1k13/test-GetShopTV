import { TelephonePage } from "@/pages/telephone-page";
import { TELEPHONE_ROUTE } from "./paths";

type RouteType = {
  path: string;
  Component: () => JSX.Element;
};

export const routes: RouteType[] = [
  {
    path: TELEPHONE_ROUTE,
    Component: TelephonePage,
  },
];

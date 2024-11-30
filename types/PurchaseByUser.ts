import { userProps } from "@/types/user";
import { PropertyProps } from "./Properties";

export type PurchaseByUserProps = {
  property: PropertyProps[];
  user: userProps;
};

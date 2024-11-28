import { userProps } from "@/types/user";
import { PropertyProps } from "./Properties";

export type PurchaseProps = {
  property: PropertyProps[];
  user: userProps;
};

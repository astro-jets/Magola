import { userProps } from "@/types/user";
import { PropertyProps } from "./Properties";

export type claimProps = {
  _id: string;
  status: string;
  message: string;
  createdAt: string;
  property: PropertyProps;
  user: userProps;
};

import { userProps } from "@/types/user";
import { PropertyProps } from "./Properties";

export type LeaseProps = {
  property: PropertyProps;
  user: userProps;
  createdAt: string;
  _id: string;
};

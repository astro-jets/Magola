import { userProps } from "@/types/user";

export type PropertyProps = {
  _id?: string;
  name: string;
  price: string;
  createdAt?: string;
  updatedAt?: string;
  path: string;
  details: string;
  tags?: string[];
  user?: userProps;
};

import { Device } from "./device";
import { User } from "./user";

export interface School{
  id: number;
  name: string;
  principal: User;
  email: string;
  phoneNumber: string;
  address: string;
}

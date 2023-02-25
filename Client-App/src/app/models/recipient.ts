import { Device } from "./device";
import { User } from "./user";

export interface Recipient{

  id: number;
  name: string;
  recipientLeader: User;
  email: string;
  phoneNumber: string;
  address: string;
  recipientLeaderForeignKey: number;
  recipientType:string
}

import { Donor } from "./user";
import { Recipient } from "./recipient";

export interface Report{

  id: number;
  description: string;
  topic: string;
  fileString: string;
  recipient: Recipient;
  recipientForeignKey: number;
  donor: Donor;
  donorForeignKey: number;
}

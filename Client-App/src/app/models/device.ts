import { Recipient } from "./recipient";

export interface Device{

  id: number;
  description: string;
  serialNumber: string;
  type: string;
  brand: string;
  quantity: string;
  recipient: Recipient;
  recipientForeignKey: number;
}


import { Donor } from "./user";
import { Recipient } from "./recipient";

export interface InternetDonation{

  id: number;
  description: string;
  year: string;
  recipient: Recipient;
  recipientForeignKey: number;
  donor: Donor;
  donorForeignKey: number;
}

import { Recipient } from "./recipient";

export interface Photo{
    id: number;
    fileString: string;
    recipient:Recipient;
    recipientForeignKey: number;
    description: string;
}

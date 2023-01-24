import { School } from "./school";

export interface Device{
  id: number;
  description: string;
  serialNumber: string;
  type: string;
  brand: string;
  quantity: string;
  school: School;
}

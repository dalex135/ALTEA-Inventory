import { Device } from "./device";

export interface School{
  id: number;
  name: string;
  principal: number;
  emailAddress: string;
  phoneNumber: string;
  devices: Device[]
}

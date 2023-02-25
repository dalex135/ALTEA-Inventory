export interface User{
    id: number;
    name: string;
    userName: string,
    password: string;
    phoneNumber: string;
    email: string;
    userType: string;
}

export interface Donor extends User{
  donorType:String;
}

export interface RecipientLeader extends User{
  donorType:String;
}

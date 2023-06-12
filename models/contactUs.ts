import Conference from "./conf";

export default interface Contact {
  ConfId: string;
  Conf: Conference;
  Title: string;
  Name: string;
  Designation: string;
  ImgLink?: string;
  Institute: string;
  ProfileLink: string;
  Phone: string;
  Email: string;
  Fax?: string;
  feature: boolean;
  sequence: number;
  LocationDes?: string;
  LocatinLink?: string;
}

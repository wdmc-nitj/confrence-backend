import Conference from "./conf";

export default interface Announcement {
  ConfId: string;
  Conf: Conference;
  Title: string;
  MetaDescription?: string;
  Description: string;
  feature: boolean;
  sequence: number;
  New: boolean;
  hidden: boolean;
  Link?: string;
}
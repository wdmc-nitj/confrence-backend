export default interface ContactUs {
  id: string;
  confId: string;
  title: string;
  name: string;
  designation: string;
  imgLink?: string;
  institute: string;
  profileLink: string;
  phone: string;
  email: string;
  fax?: string;
  feature: boolean;
  sequence: number;
  createdAt: Date;
  updatedAt: Date;
}

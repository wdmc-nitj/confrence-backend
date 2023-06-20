export default interface Announcement {
  confId: string;
  title: string;
  metaDescription?: string;
  description: string;
  feature: boolean;
  sequence: number;
  new: boolean;
  hidden: boolean;
  link?: string;
}
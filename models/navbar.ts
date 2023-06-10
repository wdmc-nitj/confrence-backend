interface navbar {
    mainHeadingName: string;
    mainHeadingLink: string;
    subheading: subheading[];
  }
  
  interface subheading {
    name: string;
    link: string;
    order: number;
    show: boolean;
  }
  
  export default navbar;
  
export interface bannerDataProp {
  title: string;
  items: bannerItemProp[];
}

export interface bannerItemProp {
  id?: string;
  title?: string;
  link?: string;
  desk: string;
  mob: string;
  alt?: string;
}
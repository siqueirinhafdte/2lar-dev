type Info = {
  title: string;
  textFirst: string;
  textSecond: string;
  textLink: string;
  urlLink: string;
};

type Topics = {
  altText: string;
  urlImage: string;
  titleTopic: string;
};

export interface DescriptionProps {
  title: string;
  topics: Topics[];
  subTitle: string;
  infos: Info[];
}

type Title = {
  titleFirst: string;
  titleSec: string;
  highTitle: string;
};
type Description = {
  firstParagraph: string;
  secondParagraph: string;
};

export interface HomeMainBannerProps {
  title: Title;
  textButton: string;
  urlVideo: string;
  shortDescription: string;
  subTitle: string;
  description: Description;
}

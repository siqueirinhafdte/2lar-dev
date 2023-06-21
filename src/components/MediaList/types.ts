type UrlMediaItem = {
  url: string;
  alt: string;
  redirectLink: string;
};
type Title = {
  titlefirst: string;
  titlelast: string;
};
export interface MediaListProps {
  items: UrlMediaItem[];
  title: Title;
}

export interface BestDestinationSlideProps {
  position?: string;
  title?: string;
  description?: string;
  urlImg: string;
}

export interface BestDestinationProps {
  title: string;
  data: BestDestinationSlideProps[];
  slidesPerView: number;
}

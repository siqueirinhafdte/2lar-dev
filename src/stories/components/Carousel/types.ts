export interface CarouselProps {
  data: ListIcon[];
  slidesPerView: number;
}

export interface ListIcon {
  label: string;
  icon: React.ReactNode;
  pathname?: string;
}

export interface TakeVacationProps {
  title: string;
  cards: {
    title: string;
    urlImg: string;
    redirectLink: string;
  }[];
  onClickHowItsWorksButton: CallableFunction;
}

import { format, parseISO } from 'date-fns';

export const transformToDatePtBrFromEng = (currentDate: string, divisor = '/') => {
  const day = currentDate.split(divisor)[0];
  const month = currentDate.split(divisor)[1];
  const year = currentDate.split(divisor)[2];

  const date = parseISO(`${year}-${month}-${day}`);
  return format(date, 'yyyy-MM-dd');
};

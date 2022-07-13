import { format, parseISO } from 'date-fns';
export const compareDate = (expDate) => {
  let expiry_date = new Date(expDate);
  let current_date = new Date();
  return expiry_date >= current_date;
};

export const formatDate = (givenDate) => {
  const result = parseISO(givenDate);
  return givenDate ? format(result, 'dd MMM yyyy') : 'NA';
};

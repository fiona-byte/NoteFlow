import { format } from "date-fns";

export const dateFormatter = (dateStr: Date) => {
  return format(dateStr, "do MMMM yyyy");
};

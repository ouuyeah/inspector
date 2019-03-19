import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function(date, formatStr) {
  return format(parseISO(date), formatStr, {
    locale: es,
  });
}

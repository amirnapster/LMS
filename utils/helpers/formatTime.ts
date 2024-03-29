import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

type InputValue = Date | string | number | null;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: InputValue) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: InputValue) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
export function durationToString(a :number,hour :string,minute : string){
  if(a<60)
  return '-'
  if(a<3600)
  return `${Math.floor(((a/60)%60)).toFixed(0)} ${minute}`
  return `${(Math.floor(a / 3600)).toFixed(0)} ${hour} ${Math.floor(((a/60)%60)).toFixed(0)} ${minute}`
}

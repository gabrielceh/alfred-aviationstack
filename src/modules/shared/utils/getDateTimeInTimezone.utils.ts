import {dayjs} from "@/config/dayjs";
import { isValidTimezone } from "./isValidTimezone.utils";

export function getDateTimeInTimezone(tz: string) {
  if(!isValidTimezone(tz)){
    return "Zona horaria no válida";
  }
  return dayjs().tz(tz).format("DD/MM/YYYY, HH:mm:ss");
}
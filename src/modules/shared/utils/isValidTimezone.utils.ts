export function isValidTimezone(timezone: string) {  
  if(!timezone) return false;
  
  const supported = Intl.supportedValuesOf("timeZone");
  return supported.includes(timezone);
}
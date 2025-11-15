export interface AirportResponse {
  id:              string;
  gmt:             string | null;
  airport_id:      string;
  iata_code:       string;
  city_iata_code:  string | null;
  icao_code:       string | null;
  country_iso2:    string | null;
  geoname_id:      string | null;
  latitude:        string | null;
  longitude:       string | null;
  airport_name:    string;
  country_name:    string | null;
  phone_number:    string | null;
  timezone:        string | null;
}
"use client";

import { useEffect, useState } from "react";
import { Airport } from "@/modules/airports/domain/entities";
import { getDateTimeInTimezone } from "@/modules/shared/utils";

import { CardLayout } from "../../../layout";
import { ClockCircleIcon, GlobalIcon } from "@/assets/icons";
import { HeaderCardAirportIcon } from "../HeaderCardAirportIcon/HeaderCardAirportIcon";
import { InfoPair } from "@/modules/shared/components";

interface AirportTimezoneCardProps {
  airport: Airport;
}

export  function AirportTimezoneCard({airport}:AirportTimezoneCardProps) {
  const [dateTimeToShow, setDateTimeToShow] = useState<string>("--:--");

  useEffect(() => {
    if (!airport.timezone) return;

    const result = getDateTimeInTimezone(airport.timezone);
    Promise.resolve().then(() => {
      setDateTimeToShow(result);
    });
  }, [airport.timezone]);

  return (
    <div className="flex flex-col gap-8">
      <CardLayout className="flex flex-col gap-8">
        <HeaderCardAirportIcon text="Zona horaria" icon={<GlobalIcon width={32} height={32}/>}/>
  
        <section className="flex flex-col gap-4">
          <InfoPair label="Zona Horaria:" value={airport.timezone || 'No disponible'}/>
          <InfoPair label="GMT:" value={airport.gmt || 'No disponible'}/>
        </section>
      </CardLayout>
      
      <CardLayout className="flex flex-col gap-8">
        <HeaderCardAirportIcon text="Hora local" icon={<ClockCircleIcon width={32} height={32}/>}/>
  
        <section className="flex flex-col gap-4">
          <p className="text-xl">{dateTimeToShow}</p>
        </section>
      </CardLayout>
    </div>
  )
}

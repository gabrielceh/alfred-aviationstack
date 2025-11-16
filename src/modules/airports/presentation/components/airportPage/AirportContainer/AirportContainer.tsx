"use client";

import { Airport } from "@/modules/airports/domain/entities";
import { Tabs } from "@/modules/shared/components";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { AirportGeneralInfoCard } from "../AirportGeneralInfoCard/AirportGeneralInfoCard";
import { AirportLocationCard } from "../AirportLocationCard/AirportLocationCard";
import { AirportTimezoneCard } from "../AirportTimezoneCard/AirportTimezoneCard";

interface AirportContentProps {
  airport: Airport;
}

export  function AirportContainer({airport}:AirportContentProps) {
  const tabItems = useMemo(()=>([
      {value: "general", label: "General", component: <AirportGeneralInfoCard  airport={airport}/>,},
      {value: "location", label: "Ubicación", component: <AirportLocationCard airport={airport}/>,},
      {value: "timezone", label: "Zona horaria",component: <AirportTimezoneCard airport={airport}/>,},
      {value: "statistics", label: "Estadísticas",component: <p>Estadísticas</p>, isDisabled: true},
    ]),[airport]);

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const tab = useMemo(() => {
    const query = searchParams.get('tab') 
    return query || tabItems[0].value;
  }, [tabItems, searchParams]);

  const selectedTabValue = useMemo(()=>{
    return tabItems.find((item)=>item.value === tab)?.value || tabItems[0].value;
  },[tab, tabItems])

  const onHanldeTabChange = (value:string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", value);
    const newUrl = `${pathname}?${params.toString()}`;
    if(window){
      window.history.replaceState(null, "", newUrl);
    }
  }


  return (
    <main>
      <Tabs items={tabItems} selectedTabValue={selectedTabValue} onChange={onHanldeTabChange}/>
    </main>
  )
}


import { IconText } from "./IconText"
import {  CalendarDays, Home, LocateFixed, Map } from 'lucide-react';

export const ContainerIconText = () => {
    return (
        <>
            <div className="mt-10 p-1 flex flex-col justify-center items-center gap-8">
              <IconText icon={<Home />} state={true} text={'Dashboard'}/>
              <IconText icon={<Map />} text={'Map'}/>
              <IconText icon={<LocateFixed />} text={'Saved Location'}/>
              <IconText icon={<CalendarDays/>} text={'Calendar'}/>
            </div>
        </>
    )
} 
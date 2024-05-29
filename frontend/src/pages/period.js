import moment from "moment";






export const ovulationDay = (startDate, endDate,today,prev ,cycleLength) => {
    
        if (today.isBetween(startDate,endDate))
            {
                const daysSincePeriodStart = today.diff(startDate, "days");
                const ovulationDay = startDate.add(Math.floor(cycleLength /2), "days");
                // console.log(ovulationDay);
                return today.diff(ovulationDay, "days");
            }
        else{
            const daysSincePeriod = prev.diff(today, "days");
            const ovulationDay = prev.add(Math.floor(cycleLength /2), "days");
            return today.diff(ovulationDay, "days");
        }
    }


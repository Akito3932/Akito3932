

"use strict";
import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import '../Period.css'
// import PopupButton from "./Popup";



const Phase=[
    {
        phase:"Menstrual Phase",
        symptoms:"Cramps,Headache,Backache,Heavy Bleeding"
    },
    {
        phase:"Follicular Phase",
        symptoms:"Light Bleeding,Low Energy"
    },
    {
        phase:"Ovulation Phase",
        symptoms:"High Energy,High Libido"
    },
    {
        phase:"Luteal Phase",
        symptoms:"Cramps,Headache,Backache,Heavy Bleeding"
    }
]
const phasesWithSymptoms = [
    {
      phase: "Menstrual Phase",
      "Menstrual Phase": ["Cramps", "Fatigue", "Mood swings", "Headaches","Heavy Bleeding","Food cravings"]
    },
    {
      phase: "Follicular Phase",
      "Follicular Phase": ["Increased energy", "Improved mood", "Heightened libido","Light bleeding","Low energy","Bloating"]
    },
    {
      phase: "Ovulation Phase",
      "Ovulation Phase": ["Light spotting", "Increased libido", "Breast tenderness","High energy","High libido","Mood swings"]
    },
    {
      phase: "Luteal Phase",
      "Luteal Phase": ["Bloating", "Breast tenderness", "Mood swings", "Food cravings","Cramps","Headache","Backache","Heavy Bleeding"]
    }
  ];
  console.log(phasesWithSymptoms["MenstrualPhase"]);
  const menstrualPhaseSymptoms = phasesWithSymptoms.find(phaseObj => phaseObj.phase === "Menstrual Phase");

console.log(menstrualPhaseSymptoms["MenstrualPhase"]); // This will print the array of symptoms for the Menstrual Phase

  const phasesWithSuggestions = [
    {
      phase: "Menstrual Phase",
      "Menstrual Phase": ["Rest", "Hydrate", "Warmth", "Relax", "Gentle exercise", "Self-care"]
    },
    {
      phase: "Follicular Phase",
      "Follicular Phase": ["Energy boost", "Try new things", "Socialize", "Outdoor activities", "Creative projects", "Healthy habits"]
    },
    {
      phase: "Ovulation Phase",
      "Ovulation Phase": ["Try to conceive if desired","Healthy diet", "Stay active", "Enjoy intimacy", "Self-expression", "Confidence boost"]
    },
    {
      phase: "Luteal Phase",
      "Luteal Phase": ["Manage stress", "Healthy snacks", "Gentle exercise", "Mindfulness practices", "Rest and relax", "Limit caffeine"]
    }
  ];
  
  console.log(phasesWithSuggestions);
  
  






const Heading = ({ date, changeMonth, resetDate }) => (
  <nav className="calendar--nav">
    <a onClick={() => changeMonth(date.month() - 1)}>&#8249;</a>
    <h1 onClick={() => resetDate()}>
      {date.format("MMMM")} <small>{date.format("YYYY")}</small>
    </h1>
    <a onClick={() => changeMonth(date.month() + 1)}>&#8250;</a>
  </nav>
);

const Day = ({ currentDate, date, startDate, endDate, onClick }) => {
  let className = [];

  if (moment().isSame(date, "day")) {
    className.push("active");
  }

  if (date.isSame(startDate, "day")) {
    className.push("start");
  }

  if (date.isBetween(startDate, endDate, "day")) {
    className.push("between");
  }

  if (date.isSame(endDate, "day")) {
    className.push("end");
  }

  if (!date.isSame(currentDate, "month")) {
    className.push("muted");
  }

  return (
    <span
      onClick={() => onClick(date)}
      currentDate={date}
      className={className.join(" ")}
    >
      {date.date()}
    </span>
  );
};

const Days = ({ date, startDate, endDate, onClick }) => {
  const thisDate = moment(date);
  const daysInMonth = moment(date).daysInMonth();
  const firstDayDate = moment(date).startOf("month");
  const previousMonth = moment(date).subtract(1, "month");
  const previousMonthDays = previousMonth.daysInMonth();
  const nextsMonth = moment(date).add(1, "month");
  let days = [];
  let labels = [];

  for (let i = 1; i <= 7; i++) {
    labels.push(<span className="label">{moment().day(i).format("ddd")}</span>);
  }

  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <Day
        key={moment(previousMonth).format("DD MM YYYY")}
        onClick={(date) => onClick(date)}
        currentDate={date}
        date={moment(previousMonth)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i);

    days.push(
      <Day
        key={moment(thisDate).format("DD MM YYYY")}
        onClick={(date) => onClick(date)}
        currentDate={date}
        date={moment(thisDate)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  const daysCount = days.length;
  for (let i = 1; i <= 42 - daysCount; i++) {
    nextsMonth.date(i);
    days.push(
      <Day
        key={moment(nextsMonth).format("DD MM YYYY")}
        onClick={(date) => onClick(date)}
        currentDate={date}
        date={moment(nextsMonth)}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  return (
    <nav className="calendar--days">
      {labels.concat()}
      {days.concat()}
    </nav>
  );
};


// 

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      startDate: moment().subtract(5, "day"),
      endDate: moment().add(3, "day"),
    };
  }

  resetDate() {
    this.setState({
      date: moment(),
    });
  }

  changeMonth(month) {
    const { date } = this.state;

    date.month(month);

    this.setState(date);
  }

  changeDate(date) {
    let { startDate, endDate, cycleLength } = this.state;
  
    if (
      startDate === null ||
      date.isBefore(startDate, "day") ||
      !startDate.isSame(endDate, "day")
    ) {
      startDate = moment(date);
      endDate = moment(date);
    } else if (date.isSame(startDate, "day") && date.isSame(endDate, "day")) {
      startDate = null;
      endDate = null;
    } else if (date.isAfter(startDate, "day")) {
      endDate = moment(date);
    }
    cycleLength=28;
    
    // (Calculate the difference in days between start and end dates
    if (endDate===null)
    {cycleLength = 28;
    endDate = moment(startDate).add(cycleLength - 1, "days");}


    if (endDate !== null && startDate !== null)
    cycleLength = endDate.diff(startDate, "days")+1;
  
    // Calculate the next period date by adding the cycle length to the end date
    const prevPeriodDate = moment(startDate).subtract(cycleLength, "days");
    const nextPeriodDate = moment(endDate).add(1, "days");
    const today=moment();
    // const ovuD=ovulationDay(startDate,endDate,moment(),prevPeriodDate,cycleLength);
    let status=""
    let chances=""
    let days=""
    let daysSincePeriodStart=0;
    let daysUntilPeriodEnd=0;
    let phase="Follicular Phase";
    // let stDate=startDate;
    if (today.isBetween(startDate, endDate)) {
        daysSincePeriodStart = today.diff(startDate, "days")+1;
        daysUntilPeriodEnd = endDate.diff(today, "days")+1;
        const ovulationDay = moment(startDate).add(Math.floor(cycleLength / 2)-1, "days"); // Create a new moment object
        // const ovulationDay = moment(startDate).add(14, "days"); // Alternatively, if ovulation always occurs on the 14th day
        console.log(ovulationDay,cycleLength,Math.floor(cycleLength / 2),daysSincePeriodStart);
        if (today.diff(ovulationDay, "days") ===0) {
            status = "Ovulation Day";
            chances='High'
            phase="Ovulation Phase";
   
    
        // status = "period";
        } else if (today.isBefore(ovulationDay, "days")) {
        status = `Ovulation in ${Math.abs(today.diff(ovulationDay, "days"))+1} days`;
        chances='Medium'
        if (Math.abs(today.diff(ovulationDay, "days"))<=5){
            phase="Menstrual Phase";
        }
        }
        else if (today.isAfter(ovulationDay, "days")) {
        status = "Safe Period";
        phase="Luteal Phase";
        chances='Low'
        }
    }
   else {
         daysSincePeriodStart = Math.abs(today.diff(prevPeriodDate, "days"))+1;
         daysUntilPeriodEnd = Math.abs(endDate.diff(today, "days"))+1;
        const ovulationDay = moment(prevPeriodDate).add(Math.floor(cycleLength / 2)-1, "days"); // Create a new moment object
        // const ovulationDay = moment(startDate).add(14, "days"); // Alternatively, if ovulation always occurs on the 14th day
        console.log(ovulationDay,cycleLength,Math.floor(cycleLength / 2),daysSincePeriodStart,prevPeriodDate);
        if (today.diff(ovulationDay, "days") ===0) {
            status = "Ovulation Day";
            chances='High'
            phase="Ovulation Phase";
   
    
        // status = "period";
        } else if (today.isBefore(ovulationDay, "days")) {
        status = `Ovulation in ${Math.abs(today.diff(ovulationDay, "days"))+1} days`;
        if (Math.abs(today.diff(ovulationDay, "days"))<=5){
            phase="Menstrual Phase";
            
        }
        chances='Medium'
        }
        else if (today.isAfter(ovulationDay, "days")) {
        status = "Safe Period";
        phase="Luteal Phase";
        chances='Low'
        }
    }
    days=(daysSincePeriodStart>daysUntilPeriodEnd)?[{"item":"Will begin in",days:daysUntilPeriodEnd}]:[{"item":"Period Ongiong Current Day-",days:daysSincePeriodStart}];
    console.log(days);

    this.setState({
      startDate,
      endDate,
      cycleLength,
      nextPeriodDate, // Include next period date in state
      status,
      chances,
      days,
      phase
    });
  }

  
  render() {
    const { date, startDate, endDate ,cycleLength ,status ,chances,days,phase} = this.state;
  
    return (
        <>
        {/* // <><PopupButton/> */}
        <div className="body-pd lg:flex lg:justify-center lg:pl-0 lg:pt-10 p-10">
      <div className="wrapper-pd lg:flex">
        <div className="calendar-pd md:w-l h-[400px] lg:mr-5">
          <Heading
            date={date}
            changeMonth={(month) => this.changeMonth(month)}
            resetDate={() => this.resetDate()}
          />

          <Days
            onClick={(date) => this.changeDate(date)}
            date={date}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div className="data-container lg:w-[50%] lg:mt-0 mt-[20%] pr-0">
          <div className="info">
           Ovulation Update : {status} <br />
            Status : <span className="period-days span-pd">{endDate && days && (days[0].item+"  "+days[0].days+" "+"Days")} </span>
            <br />
            Probability : <b>{chances} </b> <span className="span-pd">{chances && chances!=="" && (<>Pregnancy chance</>)}</span>
            <br />
            Phase : <b>{phase} </b> <span className="span-pd">{phase && phase!=="" && (<>Phase of Menstrual Cycle</>)}</span>
          </div>
          <div class="lg:flex">
          <div class="list-pd lg:mr-4">
            <h3 class="list-title-pd fe-title text-black">Symptoms <span className="span-pd text-white">{phase}</span> </h3>
            {phase && phasesWithSymptoms.find(phaseObj => phaseObj.phase === phase)[phase]?.map((item, index) => {
    console.log(item, index);
    return (
        <p className="list-item-pd" key={index}>
            {index + 1}<span className="span-pd"> {item}</span>
        </p>
    );
})
  }


            
            

                
                


          </div>
          <div class="list-pd lg:mt-0 mt-4">
            <h3 class="list-title-pd fe-title text-black">Suggestions</h3>
            
            {phase && phasesWithSuggestions.find(phaseObj => phaseObj.phase === phase)[phase]?.map((item, index) => {
    console.log(item, index);
    return (
        <p className="list-item-pd" key={index}>
            {index + 1}<span className="span-pd"> {item}</span>
        </p>
    );
})
  }
        

          </div>
        </div>
        </div>
      </div>
      </div>
      </>);
  }
}

export default Calendar;
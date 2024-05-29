// import React from 'react'

// const PeriodTracker = () => {
//   return (
//     <div>PeriodTracker</div>
//   )
// }

// export default PeriodTracker

// "use strict";
// import React from "react";
// import ReactDOM from "react-dom";
// import moment from "moment";
// import { useState } from "react";
// import "../Period.css";
// const Heading = ({ date, changeMonth, resetDate }) => (
//   <nav className="calendar--nav">
//     <a onClick={() => changeMonth(date.month() - 1)}>&#8249;</a>
//     <h1 onClick={() => resetDate()}>
//       {date.format("MMMM")} <small>{date.format("YYYY")}</small>
//     </h1>
//     <a onClick={() => changeMonth(date.month() + 1)}>&#8250;</a>
//   </nav>
// );

// const CycleLength=[
//     {
//         day:1,
//         start:1,
//         end:1 
//     },
//     {
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     },{
//         day:1,
//         start:1,
//         end:1 
//     }

// ]



// const Day = ({ currentDate, date, startDate, endDate, onClick }) => {
//   let className = [];

//   if (moment().isSame(date, "day")) {
//     className.push("active");
//   }

//   if (date.isSame(startDate, "day")) {
//     className.push("start");
//   }

//   if (date.isBetween(startDate, endDate, "day")) {
//     className.push("between");
//   }

//   if (date.isSame(endDate, "day")) {
//     className.push("end");
//   }

//   if (!date.isSame(currentDate, "month")) {
//     className.push("muted");
//   }

//   return (
//     <span
//       onClick={() => onClick(date)}
//       currentDate={date}
//       className={className.join(" ")+"span-pd"}
//     >
//       {date.date()}
//     </span>
//   );
// };

// const Days = ({ date, startDate, endDate, onClick }) => {
//   const thisDate = moment(date);
//   const daysInMonth = moment(date).daysInMonth();
//   const firstDayDate = moment(date).startOf("month");
//   const previousMonth = moment(date).subtract(1, "month");
//   const previousMonthDays = previousMonth.daysInMonth();
//   const nextsMonth = moment(date).add(1, "month");
//   let days = [];
//   let labels = [];

//   for (let i = 1; i <= 7; i++) {
//     labels.push(<span className="label span-pd">{moment().day(i).format("ddd")}</span>);
//   }

//   for (let i = firstDayDate.day(); i > 1; i--) {
//     previousMonth.date(previousMonthDays - i + 2);

//     days.push(
//       <Day
//         key={moment(previousMonth).format("DD MM YYYY")}
//         onClick={(date) => onClick(date)}
//         currentDate={date}
//         date={moment(previousMonth)}
//         startDate={startDate}
//         endDate={endDate}
//       />
//     );
//   }

//   for (let i = 1; i <= daysInMonth; i++) {
//     thisDate.date(i);

//     days.push(
//       <Day
//         key={moment(thisDate).format("DD MM YYYY")}
//         onClick={(date) => onClick(date)}
//         currentDate={date}
//         date={moment(thisDate)}
//         startDate={startDate}
//         endDate={endDate}
//       />
//     );
//   }

//   const daysCount = days.length;
//   for (let i = 1; i <= 42 - daysCount; i++) {
//     nextsMonth.date(i);
//     days.push(
//       <Day
//         key={moment(nextsMonth).format("DD MM YYYY")}
//         onClick={(date) => onClick(date)}
//         currentDate={date}
//         date={moment(nextsMonth)}
//         startDate={startDate}
//         endDate={endDate}
//       />
//     );
//   }

//   return (
//     <nav className="calendar--days">
//       {labels.concat()}
//       {days.concat()}
//     </nav>
//   );
// };

// class PeriodTracker extends React.Component {

    
//   constructor(props) {
//     super(props);

//     this.state = {
//       date: moment(),
//       startDate: moment().subtract(5, "day"),
//       endDate: moment().add(3, "day"),
//     };
//   }

//   resetDate() {
//     this.setState({
//       date: moment(),
//     });
//   }

//   changeMonth(month) {
//     const { date } = this.state;

//     date.month(month);

//     this.setState(date);
//   }

//   changeDate(date) {
//     let { startDate, endDate } = this.state;

//     if (
//       startDate === null ||
//       date.isBefore(startDate, "day") ||
//       !startDate.isSame(endDate, "day")
//     ) {
//       startDate = moment(date);
//       endDate = moment(date);
//     } else if (date.isSame(startDate, "day") && date.isSame(endDate, "day")) {
//       startDate = null;
//       endDate = null;
//     } else if (date.isAfter(startDate, "day")) {
//       endDate = moment(date);
//     }

//     this.setState({
//       startDate,
//       endDate,
//     });
//   }

//   render() {
//     const { date, startDate, endDate } = this.state;
//     console.log(this.state);
    


//     return (
//       <div className="body-pd lg:flex lg:justify-center lg:pl-0 lg:pt-10 p-10">
//         <div className="wrapper-pd lg:flex">
//         <div className="calendar-pd md:w-l h-[400px] lg:mr-5">
//           <Heading
//             date={date}
//             changeMonth={(month) => this.changeMonth(month)}
//             resetDate={() => this.resetDate()}
//           />

//           <Days
//             onClick={(date) => this.changeDate(date)}
//             date={date}
//             startDate={startDate}
//             endDate={endDate}
//           />
//         </div>
//         <div className="data-container lg:w-[50%] lg:mt-0 mt-[20%] pr-0">
//           <div className="info">
//             Period in <br />
//             <span className="period-days span-pd">10 Days</span>
//             <br />
//             <b>Low </b> <span className="span-pd">chance of getting pregnant</span>
//           </div>
//           <div class="list-pd">
//             <h3 class="list-title-pd fe-title">Period Stats</h3>
           
//             {
//                 // for(let i=0;i<10;i++){
//                 //     <p class="list-item-pd">
//                 //         Avg Day <span className="span-pd">start-end</span>
//                 //     </p>
//                 // }
//                     CycleLength.map((item,index)=>{
//                         return(
//                             <p class="list-item-pd">
//                                 Avg Day {item.day}<span className="span-pd"> {item.start}-{item.end}</span>
//                             </p>
//                         )
//                     })
//             }
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default PeriodTracker;

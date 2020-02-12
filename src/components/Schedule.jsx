import React from "react";
import './Schedule.css';
import Daily from "./Daily";
import { Link } from 'react-router-dom';


const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];


function Schedule() {
return (
  <div>
  <Link to="/">Schedule</Link> | <Link to="/year">View Season Produce</Link>
  <div className="schedule">
  {marketSchedule.map((daily, index) =>
    <Daily day = {daily.day}
    hours = {daily.hours}
    location = {daily.location}
    booth = {daily.booth}
    key = {index}/>
    )}
  </div>
  </div>
);
}

export default Schedule;

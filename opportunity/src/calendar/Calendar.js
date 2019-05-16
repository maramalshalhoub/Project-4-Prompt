import { Calendar, elementClosest } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import React, { Component } from 'react';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import '../Calendar.css'
import axios from 'axios';
import {getToken} from '../services/auth';

let header = {
    headers :{
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${getToken()}`
    }
  }

class Calendars extends Component {
    constructor(props){
        super(props)
        this.state ={
            events : [],
            jobs: []
        }
    }
    
    pushInformation = () => {
        axios.get('http://localhost:5000/api/job',header)
        .then((r)=>{
            let data = {...this.state}
            r.data.jobs.forEach(el =>{
                data.events.push({ start: el.start, end: el.end, description: el.description, title: el.name, backgroundColor:'rgba(103, 58, 183, 1)'})
            })
            this.setState(data)
            this.cal()
        })
    }

    componentDidMount(){
        this.pushInformation()
    }

    cal = () => {
        var calendarEl = document.getElementById('calendar');
        calendarEl.innerHTML = ''
        let calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            defaultView: 'dayGridMonth',
            events: this.state.events
        });
        calendar.render();
    }

    render(){
        console.log("states: ",this.state)
        return (
            <div id="calendar">
            test
            </div>
        )
    }
}

export default Calendars
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import React, { Component } from 'react';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import '../Calendar.css'

class Calendars extends Component {

    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    
    pushDriverInform = () => {
        let data = {...this.state} //copy current state
        data.events.push({
            
        }) //push to array
        this.setState(data) //set state
    }

    componentDidMount(){
        this.cal()
        // document.addEventListener('DOMContentLoaded', function () {
        // });

    }

    cal = () => {
        var calendarEl = document.getElementById('calendar');
        calendarEl.innerHTML = ''
        let calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            defaultView: 'dayGridMonth',
            events: [{
                id: 'a',
                title: 'my event',
                start: '2019-05-14',
                end: '2019-05-17'
              }]
        });
        

        calendar.render();
    }

    componentDidUpdate() {
        this.cal()
    }

    render(){

        return (
            <div id="calendar">
                Testing
            </div>
        )
    }
}

export default Calendars
     
// class Calendars extends Component {
//     render(){
//         return (
//         <div>
//             <meta charSet="utf-8" />
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
//             <link href="https://fullcalendar.io/releases/fullcalendar/3.9.0/fullcalendar.min.css" rel="stylesheet" />
//             <link href="https://fullcalendar.io/releases/fullcalendar/3.9.0/fullcalendar.print.min.css" rel="stylesheet" media="print" />
//             <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
//             <style type="text/css" dangerouslySetInnerHTML={{__html: "\n  .months li, #slider-range-max .ui-state-hover{cursor: pointer;}\n" }} />
//             <div className="jumbotron text-center">
//                 <h1>Full-Calendar with Filters</h1>
//                 <p>Here you can check Full-Calendar with Filters!</p> 
//             </div>
//             <div className="container">
//             <div className="row">
//                 <div className="col-sm-4">
//                 <h4>Filter with List:</h4>
//                 <ul className="list-group months">
//                     <li className="list-group-item list-group-item-success" id={1}>May 2019</li>
//                     <li className="list-group-item list-group-item-danger" id={2}>June 2019</li>
//                 </ul>
//                 <br />
//                 <h4>Filter with Select Options:</h4>
//                 <select name="cars" className="custom-select-lg select_month" style={{width: '100%'}}>
//                     <option selected>Select Month</option>
//                     <option value={1}>January 2019</option>
//                     <option value={2}>February 2019</option>
//                     <option value={1}>March 2019</option>
//                     <option value={2}>April 2019</option>
//                     <option value={1}>May 2019</option>
//                     <option value={2}>June 2019</option>
//                     <option value={2}>July 2019</option>
//                     <option value={2}>August 2019</option>
//                     <option value={2}>September 2019</option>
//                     <option value={2}>October 2019</option>
//                     <option value={2}>November 2019</option>
//                     <option value={2}>December 2019</option>
//                 </select>
//                 <br /><br />
//                 <h4>Filter with Range:</h4>
//                 <label htmlFor="amount">Month:</label>
//                 <input type="text" id="amount" readOnly style={{border: 0, color: '#f6931f', fontWeight: 'bold'}} />
//                 <div id="slider-range-max" />
//                 <br />
//                 <h4>Filter with Buttons:</h4>
//                 <button type="button" className="btn btn-danger" id="month">Month</button>
//                 <button type="button" className="btn btn-primary" id="agendaWeek">Week</button>
//                 <button type="button" className="btn btn-success" id="agendaDay">Day</button>
//                 </div>
//                 <div className="col-sm-8">
//                 <div id="calendar" />

//                 </div>
//             </div>
//             </div>
//             <div className="jumbotron text-center" style={{marginBottom: 0}}>
//             <p>@2019 Enhance Success  <br/> All Rights Reserved.</p>
//             </div>
//         </div>
//     );
// }
// }

// export default Calendars
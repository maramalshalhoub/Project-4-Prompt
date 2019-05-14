import React, {Component} from 'react';
import './App.css'; 
class Navigation extends Component {

function(){

//     var button = document.getElementById('cn-button'),
//       wrapper = document.getElementById('cn-wrapper'),
//       overlay = document.getElementById('cn-overlay');
  
//     //open and close menu when the button is clicked
//     var open = false;
//     button.addEventListener('click', handler, false);
//     button.addEventListener('focus', handler, false);
//     wrapper.addEventListener('click', cnhandle, false);
  
//     function cnhandle(e){
//       e.stopPropagation();
//     }
  
//     function handler(e){
//       if (!e) var e = window.event;
//       e.stopPropagation();//so that it doesn't trigger click event on document
  
//         if(!open){
//           openNav();
//         }
//       else{
//           closeNav();
//         }
//     }
//     function openNav(){
//       open = true;
//         button.innerHTML = "-";
//         window.classie.add(overlay, 'on-overlay');
//         window.classie.add(wrapper, 'opened-nav');
//     }
//     function closeNav(){
//       open = false;
//       button.innerHTML = "+";
//       window.classie.remove(overlay, 'on-overlay');
//       window.classie.remove(wrapper, 'opened-nav');
//     }
//     document.addEventListener('click', closeNav);
  
//   }

}
  render(){
    return (

//   <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">
//   <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet">
//   <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet">
   
      <nav>
        {/* <button class="cn-button" id="cn-button">+</button> */}
        {/* <div class="cn-wrapper" id="cn-wrapper"> */}
          {/* <ul> */}
              {/* <li><a href="#"><span class="icon-picture"></span></a></li>
              <li><a href="#"><span class="icon-headphones"></span></a></li>
              <li><a href="#"><span class="icon-home"></span></a></li>
              <li><a href="#"><span class="icon-facetime-video"></span></a></li>
              <li><a href="#"><span class="icon-envelope-alt"></span></a></li> */}

              {/* <li><a href="#"><span class=".icon .icon-plus-sign">Apply</span></a></li>
              <li><a href="#"><span class="icon icon-star">Favorite</span></a></li>
              <li><a href="#"><span class="icon-home"></span></a></li>
              <li><a href="#"><span class=".icon .icon-calendar">Calendar</span></a></li>
              <li><a href="#"><span class="fa fa-phone" aria-hidden="true">Contact Us</span></a></li>  */}
          {/* </ul> */}
        <ul>
            <li><a href="#home"><img className= "logo1" src="https://i.ibb.co/0rYsZsW/logo.png" alt="logo" border="0" /></a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">Apply</a></li>
            <li><a href="#news">Calendar</a></li>
            <li><a href="#news">Contact Us</a></li>
        </ul>       
      </nav>
      );
}
}
export default Navigation;
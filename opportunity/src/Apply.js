import React, { Component } from 'react';
import data from './data'
import Carousel from 'react-bootstrap/Carousel'


class Apply extends Component {
constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {

    let carousels = data.properties.map((item, index)=>{
        return (
            <Carousel.Item key={index} >
            <br />
            <br />
            <br />
             <a href="/showjob"><button className="Info"  onClick={this.state.jobs}><b>Apply</b></button>
             </a> 
              <img
              className="d-block w-100"
              src={item.picture}
              alt="test"
              />
               {/* <a class="btn btn-primary"  href="/showjob" onClick={this.state.jobs}>Apply</a> */}
            </Carousel.Item>
        )   
})

    const { index, direction } = this.state;
    return (
        <div>
          <Carousel   
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
          {carousels}
          </Carousel>
        </div>
    )
}}
export default Apply
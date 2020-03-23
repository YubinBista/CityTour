import React, { Component } from 'react'
import Tour from '../../components/Tour/Tour';
import './TourList.scss';
import { tourData } from '../../tourData';

class TourList extends Component {
    state = {
        tours: tourData
    };

    removeTour = id =>{
        console.log(id);
    }

    render() {
        const { tours } = this.state;
        return (
            <section className="tourlist">
               {
                tours.map(tour=>(
                    <Tour key={tour.id}
                    tour={tour}
                    removeTour={this.removeTour} />
                ))
               }
               
            </section>
        )
    }
}

export default TourList;

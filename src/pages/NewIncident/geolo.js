import React, { useState } from "react";
import { geolocated } from "react-geolocated";

import NewIncident from './index';




const kkkk = []



 
class Demo extends React.Component {

   
    
    render() {

        return !this.props.isGeolocationAvailable ? (
            <div>Seu navegador não tem suporte a localização</div>

            

        ) : !this.props.isGeolocationEnabled ? (

            <div>Ative a localização do navegador.</div>
            
        ) : this.props.coords ? (
    
             //console.log(this.props.coords.latitude),
             kkkk.push(this.props.coords.latitude),
             kkkk.push(this.props.coords.longitude),
             //console.log(kkkk[0]),

            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    
                </tbody>
            </table>
        ) : (
            <div>Armazennando a localização de sua empresa&hellip; </div>
        ); 
    }

}




export {kkkk};
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);


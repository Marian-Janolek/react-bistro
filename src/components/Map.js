import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

// const style = {
// width: '16rem',
// height: '16.5rem',
// }
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={16} 
          initialCenter={{
            lat: 49.40401070505087,
            lng: 19.48370384999523
          }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Our location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_MAP_KEY)
})(MapContainer)
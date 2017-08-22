import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // takes reference to HTML element and renders an embedded map into it
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;
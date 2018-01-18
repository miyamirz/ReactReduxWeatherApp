import React,{Component} from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map,{
                                                zoom:12,
                                                center:{
                                                    lat:this.props.lat,
                                                    lng:this.props.lon
                                                       }
                                            });
    }

    render(){
        console.log(this.props)
        return <div ref="map" />
       // return <div ref={div => this.map = div} />
    }
}

export default GoogleMap; 
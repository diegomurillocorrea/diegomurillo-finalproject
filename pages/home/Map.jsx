import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const defaultCenter = { lat: 13.707462216068974, lng: -89.2513487858351 };
const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
    withGoogleMap( props => (
        <GoogleMap
            defaultZoom={ 18 }
            defaultCenter={ defaultCenter }
            defaultOptions={ defaultOptions }
        >
            <Marker position={ defaultCenter } />
        </GoogleMap>
    ) )
);

const loadingElementStyle = "Loading..."
const containerElementStyle = { height: '515px' };
const mapElementStyle = { height: "100%" };

export default function GoogleMaps () {
    return (
        <RegularMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATihDvFy3EGFH7rpHVrFqmhNrWQnu0eDs"
        loadingElement={ <p className="font-syne font-bold">{ loadingElementStyle }</p>}
        containerElement={<div style={ containerElementStyle } />}
        mapElement={<div style={ mapElementStyle } />}
        />
    );
};
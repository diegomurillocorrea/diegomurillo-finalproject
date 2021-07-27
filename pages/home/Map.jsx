import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
    return (
        <GoogleMap 
            defaultZoom={ 18 }
            defaultCenter={ { lat: 13.707462216068974, lng: -89.2513487858351 } }
        />
    );
};

export default withScriptjs(
    withGoogleMap( Map )
);
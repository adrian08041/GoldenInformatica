import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./styles.css";

export function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCvfSA-0RAz6Fl1X-UJ1s0B_UQaD834Q4Y",
  });
  const position = {
    lat: -18.571897,
    lng: -46.523925,
  };
  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={16}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Gold Informática",
                className: "TittleMaker",
              },
            }}
          />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

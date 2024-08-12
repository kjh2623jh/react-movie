import React, { useEffect, useState } from "react";
import { StaticMap } from "react-map-gl";
import { Source, Layer } from "react-map-gl";
import MapboxDirectionsFactory from "@mapbox/mapbox-sdk/services/directions";

const accessToken =
  "pk.eyJ1IjoidWVpaSIsImEiOiJjbHljbnh0dTEwMWZzMmtwdnZ6NGh2ajN5In0.K-POHdLqs88lR5UClP-Ccg";
const directionsClient = MapboxDirectionsFactory({ accessToken });

// 경로를 가져오는 함수
async function getDirections(/*startLoc, destLoc*/) {
  const reqOptions = {
    waypoints: [
      { coordinates: [126.95302016104229, 37.6031572839496] },
      { coordinates: [126.952705, 37.603614] },
      { coordinates: [126.952367, 37.603751] },
    ],
    profile: "driving",
    geometries: "geojson",
  };
  const res = await directionsClient.getDirections(reqOptions).send();
  return res.body;
}

function Test() {
  // 지도를 렌더링하는 함수
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const fetchRoute = async () => {
      const directions = await getDirections();
      setRoute(directions);
    };

    fetchRoute();
  }, []);

  return (
    <StaticMap width={400} height={400} mapboxApiAccessToken={accessToken}>
      {route && (
        <Source type="geojson" data={route}>
          <Layer
            id="route"
            type="line"
            source="route"
            layout={{
              "line-join": "round",
              "line-cap": "round",
            }}
            paint={{
              "line-color": "#888",
              "line-width": 8,
            }}
          />
        </Source>
      )}
    </StaticMap>
  );

  /*
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState([]);

  useEffect(() => {
    const token = `pk.eyJ1IjoidWVpaSIsImEiOiJjbHljbnh0dTEwMWZzMmtwdnZ6NGh2ajN5In0.K-POHdLqs88lR5UClP-Ccg`;
    const getM = async () => {
      const json = await (
        await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/walking/126.95302016104229,37.6031572839496;126.952705,37.603614;126.952367,37.603751?access_token=${token}`
        )
      ).json();

      setMap(json);
      setLoading(false);  
    };
    getM();
  }, []);
  */

  return (
    <div>
      {/* {loading ? <h1>Loading...</h1> : <div>{JSON.stringify(map)}</div>} */}
    </div>
  );
}

export default Test;

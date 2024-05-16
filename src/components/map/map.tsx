
import {useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const-information/constant';
import { Offers, City } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import {Icon, layerGroup, Marker} from 'leaflet';

type mapData = {
  city: City;
  points: Offers;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, points}: mapData): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const selectPoint: null | string = useAppSelector(
    (state) => state.selectPoint
  );

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(selectPoint !== null && point.id === selectPoint ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectPoint]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;


import {useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const-information/constant';
import { City, Points } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import {Icon, layerGroup, Marker} from 'leaflet';
import { getselectPoint } from '../../store/offer-process/selectors';

type mapData = {
  city: City;
  points: Points;
  specialCaseId: string | undefined;
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

function Map({city, points, specialCaseId}: mapData): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const selectPoint: null | { id: string } = useAppSelector(
    getselectPoint
  );

  useEffect(() => {
    if (map && city) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [points, city, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        if (specialCaseId === undefined){
          marker
            .setIcon(selectPoint !== null && point.id === selectPoint.id ? currentCustomIcon : defaultCustomIcon)
            .addTo(markerLayer);
        } else {
          const isSpecialCase = specialCaseId && point.id === specialCaseId;
          marker
            .setIcon(isSpecialCase ? currentCustomIcon : defaultCustomIcon)
            .addTo(markerLayer);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectPoint, specialCaseId]);


  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

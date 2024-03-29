'use client'
import styles from './styles.module.scss'
import './cssForMap.scss'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from 'react'
import { getStores } from '../api'
import { LatLngTuple, Icon } from 'leaflet'
import { useQuery } from '@tanstack/react-query'

interface LocationType {
  latitude: number,
  longitude: number,
  zoom: number
}

interface StoreType{
  storeImg: string,
  storeTitle: string,
  storeText: string,
  storeLocationLatitude: number,
  storeLocationLongitude: number,
  storeCountry: string
}

interface CountryType {
  value: string;
  label: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

interface MapLoactionProps {
  country: CountryType
}

interface LocationSetterProps {
  location: LocationType
}

function LocationSetter({location}: LocationSetterProps) {
    const map = useMap();
    map.setView([location.latitude, location.longitude], location.zoom)
    return null
  }

  export function LocationMap({country}: MapLoactionProps){
  const [activeMarker, setActiveMarker] = useState<StoreType | null>(null);
    const storeIcon = new Icon({
        iconUrl: '/icons/map-marker.svg',
        iconSize: [25, 25]
    })

    const {isLoading, isError, data, error} = useQuery({queryKey: ['stores'], queryFn: getStores})

    if(isLoading){
      return <p>Loading...</p>
    }
    
    if(isError){
      return <p>{error.message}</p>
    }

    let mapCenter: LatLngTuple = [country.latitude, country.longitude];

    return(
        <div className={styles.mapContainer}>
        <MapContainer center={mapCenter} zoom={4}>
          <LocationSetter location={country}/>
          <TileLayer
            attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
          />
            {
              data?.map((store: StoreType) => {
                return(
                  <div key={crypto.randomUUID()}>
                    <Marker
                        position= {[store.storeLocationLatitude, store.storeLocationLongitude]}
                        icon={storeIcon}
                        eventHandlers={{ click: () => setActiveMarker(store) }}
                    >
                    { activeMarker && (
                        <Popup
                          key={crypto.randomUUID()}
                          closeOnClick={true}
                          // closeOnClick={()=>{ setActiveMarker(null) }}
                          eventHandlers={{click: ()=>{ setActiveMarker(null) }}}
                          closeOnEscapeKey = {true}
                          // closeOnEscapeKey={()=>{ setActiveMarker(null) }}
                          position={ [activeMarker.storeLocationLatitude, activeMarker.storeLocationLongitude] }
                        >
                          <div className={styles.popupContainer}>
                            <div className={styles.popupImg} style={{backgroundImage: 'url(' + activeMarker.storeImg + ')'}}></div>
                            <div className={styles.popupText}>
                              <h4 className={styles.popupTitle}>{activeMarker.storeTitle}</h4>
                              <p className={styles.popupLocation}>{activeMarker.storeText}</p>
                            </div> 
                          </div>
                        </Popup>
                      )
                    }
                    </Marker>
                  </div>
                )
              })
            }
        </MapContainer>
    </div>
    )
}
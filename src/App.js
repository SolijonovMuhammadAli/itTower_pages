import React, {useState, useEffect} from 'react';
import {YMaps, Map, Clusterer, Placemark, 
  TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl } from 'react-yandex-maps'
import Points from './server'
import RingLoader from 'react-spinners/RingLoader'
import 'antd/dist/antd.css'
import {Button} from 'antd'
import {Link } from 'react-router-dom'

function App() {
    const [points,setPoints]= useState('')
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setPoints(Points)
        setLoading(false)},2000)
      
    },[])

      return (
    <>
    {loading ? (
      <div style={{width: '100vw', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center' }}>
        <RingLoader loading={loading} size={80} color={'#f37a24'}></RingLoader>
      </div>
    ) : (
      <>
      {/* <Button type='primary' block>
        <Link to='/form'>Muammoni hal etish uchun bu yerga bosing</Link>
      </Button> */}
      <YMaps >
        <Map
          width='100vw'
          height='100vh'
          defaultState={{
            center: [41.311151, 69.279716],
            zoom: 8
          }}
        >
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
            {points.map((coordinates, index) => (
              <Placemark key={index}
               geometry={coordinates.param} />
            ))}
          </Clusterer> 
          <GeolocationControl options={{ float: 'left' }} />
          <TypeSelector options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl options={{ float: 'left' }} />
  
        </Map>
    </YMaps>
  </>
    )}
    </>
  );
}
export default App;

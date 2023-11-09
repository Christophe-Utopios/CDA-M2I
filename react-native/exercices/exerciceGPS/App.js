import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'



// npm i @react-native-community/geolocation
// ajout de la ligne : <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// dans le repertoire android/app/src/main/AndroidManifest.xml
// npm i axios

export default function App() {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [getPosition,setGetPosition] = useState(true)
    const [localisationFetch,setLocalisationFetch] = useState({pays : "", ville: ""})
    const [localisationAxios,setLocalisationAxios] = useState({pays : "", ville: ""})

    useEffect(() => {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
        error => console.log(error),
        {enableHighAccuracy : true, timeout : 20000,maximumAge : 1000 }
        )
    },[getPosition])

    function getApiWithFetch(){
      fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}`)
      .then(response => response.json())
      .then(data => setLocalisationFetch({pays : data.Country.LocalizedName, ville: data.LocalizedName}))
      .catch(error => console.log(error))
    }

    function getApiWithAxios(){
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}`)
      .then(response => setLocalisationAxios({pays : response.data.Country.LocalizedName, ville: response.data.LocalizedName}))
      .catch(error => console.log(error))

    }

    function reload(){
      setGetPosition(state => !state)
    }


  return (
    <View>
      <Button title='refresh' onPress={reload}></Button>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {longitude}</Text>
      <Button title='Get localisation withFetch' onPress={getApiWithFetch}></Button>
      <Text>Localisation : {localisationFetch.pays} {localisationFetch.ville}</Text>
      <Button title='Get localisation withAxios' onPress={getApiWithAxios}></Button>
      <Text>Localisation : {localisationAxios.pays} {localisationAxios.ville}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
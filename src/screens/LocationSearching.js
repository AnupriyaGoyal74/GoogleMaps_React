/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Autocomplete from '../components/project/Autocomplete';
import { connect } from 'react-redux';
import {
  onChangeEnteredLocation,
  getLocations,
  saveRecentSearches,
  saveSelectedLocation,
} from '../store/actions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const LocationSearching = props => {
  useEffect(() => {
    props.getLocations();
  }, []);

  return (
    <View style={styles.mainBg}>

      <MapView style={styles.mapVw} ref={map => { this.map = map }} >
        {props.selectedLocation &&
          props.selectedLocation.lat &&
          props.selectedLocation.lng && (
            <Marker
              coordinate={{
                latitude: props.selectedLocation.lat,
                longitude: props.selectedLocation.lng,
              }}
            />
          )}
      </MapView>
      <View style={styles.vwHeader}>
        <Autocomplete
          value={props.enteredLocation}
          onChange={value => {
            props.onChangeEnteredLocation(value);
          }}
          onSelect={item => {
            props.saveSelectedLocation(item);
            this.map.animateToRegion({
              latitude: item.lat,
              longitude: item.lng,
              latitudeDelta: 0.0115,
              longitudeDelta: 0.01121,
            })
            if (props.recentSearches && props.recentSearches.length > 0) {
              const fileteredCities = props.recentSearches.filter(
                recentCity => {
                  return recentCity.city === item.city;
                },
              );
              if (fileteredCities.length === 0) {
                props.saveRecentSearches(item);
              }
            } else {
              props.saveRecentSearches(item);
            }
          }}
          options={props.locationsData}
          recentSearches={props.recentSearches}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBg: {
    flex: 1,
    marginTop: 50,
  },
  vwHeader: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 5
  },
  mapVw: {
    flex: 1,
    height: '100%',
  },
});

const mapStateToProps = state => {
  return {
    enteredLocation: state.locationReducer.enteredLocation,
    locationsData: state.locationReducer.locationsData,
    recentSearches: state.locationReducer.recentSearches,
    selectedLocation: state.locationReducer.selectedLocation,
  };
};

export default connect(mapStateToProps, {
  onChangeEnteredLocation,
  getLocations,
  saveRecentSearches,
  saveSelectedLocation,
})(LocationSearching);

/* eslint-disable no-unreachable */
import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Keyboard, Text } from 'react-native';
import { InputItem } from '@ant-design/react-native';
import AutocompleteItem from './AutocompleteItem';

const Autocomplete = ({ value, onChange, onSelect, options, recentSearches }) => {
  const [finalOptions, setFinalOptions] = useState([]);
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.vwHeader}>
      <InputItem
        clear
        ref={ref => (this.inputRef = ref)}
        style={styles.input}
        value={value}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onChange={enteredValue => {
          console.log('ioeuroiweur', enteredValue);
          if ((options != null, options.length > 0, enteredValue.length > 1)) {
            const filteredOptions = options.filter(option => {
              return option.city.startsWith(enteredValue);
            });
            setFinalOptions(filteredOptions);
          } else {
            setFinalOptions([]);
          }
          if (onChange != null) {
            onChange(enteredValue);
          }
        }}
        placeholder="Search Location"
        returnKeyType="done"
      />
      {focused && finalOptions.length > 0 ? (
        <View style={styles.vwList}>
          <FlatList
            data={finalOptions}
            renderItem={({ item, index }) => {
              return (
                <AutocompleteItem
                  item={item}
                  onSelect={item => {
                    setFinalOptions([]);
                    if (onSelect != null) {
                      onSelect(item);
                    }
                    if (onChange != null) {
                      setFinalOptions([])
                      setTimeout(() => {
                        onChange(item.city);
                      }, 200)
                      Keyboard.dismiss();
                    }
                  }}
                />
              );
            }}
          />
        </View>
      ) : focused && recentSearches.length > 0 ? (
        <View style={styles.vwList}>
          <Text style={styles.txtRecent}>Recent Searches</Text>
          <FlatList
            data={recentSearches}
            renderItem={({ item, index }) => {
              return (
                <AutocompleteItem
                  item={item}
                  onSelect={item => {
                    if (onSelect != null) {
                      onSelect(item);
                    }
                    if (onChange != null) {
                      onChange(item.city);
                      Keyboard.dismiss();
                    }
                  }}
                />
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainBg: {
    flex: 1,
    marginTop: 50,
  },
  input: {
    height: 50,
  },
  vwList: {
    margin: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
    padding: 10,
  },
  txtRecent: {
    fontSize: 16,
    fontWeight: '700',
  },
});
export default Autocomplete;

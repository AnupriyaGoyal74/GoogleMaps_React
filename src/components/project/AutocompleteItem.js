import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AutocompleteItem = ({item, onSelect}) => {
  return (
    <TouchableOpacity
      style={styles.vwItem}
      onPress={() => {
        onSelect(item);
      }}>
      <Text style={styles.txtItem}>{item.city}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  vwItem: {
    height: 40,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
  },
  txtItem: {
    fontWeight: '500',
    fontSize: 16,
    padding: 10,
  },
});

export default AutocompleteItem;

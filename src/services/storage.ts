import { AsyncStorage } from 'react-native';

export const storage = {
  getItem: function(key) {
    // return storage[key];
  },
  setItem: (key, value) => {
    AsyncStorage.setItem(key, value);
  },
  removeItem: key => {
    AsyncStorage.removeItem(key);
  }
};

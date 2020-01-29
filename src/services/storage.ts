import { AsyncStorage } from 'react-native';

export const storage = {
  getItem: async function(key) {
    return await AsyncStorage.getItem(key);
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, value);
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
  }
};

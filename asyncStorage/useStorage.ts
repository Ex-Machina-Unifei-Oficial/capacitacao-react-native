import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = <T>(key: string) => {
  const saveItem = async (item: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item));
      // console.warn("salvo com sucesso!")
    } catch (error) {
      console.warn(error);
    }
  };

  const loadItem = async () => {
    try {
      const response = await AsyncStorage.getItem(key);
      return response != null ? (JSON.parse(response) as T) : null;
      // console.warn("carregado com sucesso!")
    } catch (error) {
      console.warn(error);
      return null;
    }
  };

  const deleteItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
      // console.warn("removido com sucesso!")
    } catch (error) {
      console.warn(error);
    }
  };

  const clear = async () => {
    try {
      await AsyncStorage.clear();
      // console.warn("removido com sucesso!")
    } catch (error) {
      console.warn(error);
    }
  };

  return {
    saveItem,
    loadItem,
    deleteItem,
    clear,
  };
};

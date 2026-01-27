import { Platform } from "react-native";

let Storage;

if (Platform.OS === "web") {
  // Web fallback
    Storage = {
        setItem: async (key, value) => localStorage.setItem(key, value),
        getItem: async (key) => localStorage.getItem(key),
        removeItem: async (key) => localStorage.removeItem(key),
        clear: async () => localStorage.clear(),
    };
} else {
  // Web version of Storage using localStorage
    const Storage = {
        setItem: async (key, value) => localStorage.setItem(key, value),
        getItem: async (key) => localStorage.getItem(key),
        removeItem: async (key) => localStorage.removeItem(key),
        clear: async () => localStorage.clear(),
    };
}

export default Storage;

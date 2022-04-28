import { ref, watchEffect, type Ref, type UnwrapRef } from "vue";

/**
 * Save and load a value from the local storage
 * If no value is found in the local storage the `defaultValue` will be used
 *
 * @param key Key where the item is saved to
 * @param defaultValue Default value when the local storage has no been set
 * @returns Ref to the storage item
 */
export const useLocalStorage = <Key extends string, T>(
  key: Key,
  defaultValue: Ref<UnwrapRef<T>> | T
): Ref<UnwrapRef<T>> => {
  const rawStorageItem = localStorage.getItem(key);

  const parsedStorageItem = ref(
    rawStorageItem !== null ? (JSON.parse(rawStorageItem) as T) : defaultValue
  );

  watchEffect(() =>
    localStorage.setItem(key, JSON.stringify(parsedStorageItem.value))
  );

  return parsedStorageItem;
};

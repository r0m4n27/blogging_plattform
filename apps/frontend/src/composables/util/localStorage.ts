import type { MaybeRef, Option } from "@blog/frontend/lib/types";
import { ref, watchEffect, type Ref, type UnwrapRef } from "vue";

export function useLocalStorage<Key extends string, T>(
  key: Key,
  defaultValue: MaybeRef<T>,
): Ref<UnwrapRef<T>>;

export function useLocalStorage<Key extends string, T>(
  key: Key,
): Ref<Option<UnwrapRef<T>>>;

/**
 * Save and load a value from the local storage
 * If no value is found in the local storage the `defaultValue` will be used
 *
 * @param key Key where the item is saved to
 * @param defaultValue Default value when the local storage has no been set
 * @returns Ref to the storage item
 */
export function useLocalStorage<Key extends string, T>(
  key: Key,
  defaultValue?: MaybeRef<T>,
) {
  const rawStorageItem = localStorage.getItem(key);

  const parsedStorageItem = ref(
    rawStorageItem !== null ? (JSON.parse(rawStorageItem) as T) : defaultValue,
  );

  watchEffect(() => {
    if (parsedStorageItem.value !== undefined) {
      localStorage.setItem(key, JSON.stringify(parsedStorageItem.value));
    } else {
      localStorage.removeItem(key);
    }
  });

  return parsedStorageItem;
}

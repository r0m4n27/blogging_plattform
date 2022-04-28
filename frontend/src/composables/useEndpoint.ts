import type { MaybeRef, Option } from "@/lib/types";
import { ref, type Ref, type UnwrapRef } from "vue";

export function useEndpoint<T>(
  fetcher: () => Promise<T>,
  initialValue: MaybeRef<T>
): Ref<UnwrapRef<T> | T>;

export function useEndpoint<T>(
  fetcher: () => Promise<T>
): Ref<UnwrapRef<Option<T>> | Option<T>>;

// Fetch data from the endpoint
// until the data is fetched provide the initialValue
export function useEndpoint<T>(
  fetcher: () => Promise<T>,
  initialValue?: MaybeRef<T>
) {
  const fetchedValue = ref(initialValue);

  fetcher().then((value) => (fetchedValue.value = value));

  return fetchedValue;
}

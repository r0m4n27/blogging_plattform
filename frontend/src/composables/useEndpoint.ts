import type { MaybeRef, Option } from "@/lib/types";
import { ref, watchEffect, type Ref, type UnwrapRef } from "vue";

export function useEndpoint<T>(
  fetcher: MaybeRef<() => Promise<T>>,
  initialValue: MaybeRef<T>
): Ref<UnwrapRef<T> | T>;

export function useEndpoint<T>(
  fetcher: MaybeRef<() => Promise<T>>
): Ref<UnwrapRef<Option<T>> | Option<T>>;

// Fetch data from the endpoint
// until the data is fetched provide the initialValue
export function useEndpoint<T>(
  fetcher: MaybeRef<() => Promise<T>>,
  initialValue?: MaybeRef<T>
) {
  const fetchedValue = ref(initialValue);

  if (typeof fetcher === "function") {
    fetcher().then((value) => (fetchedValue.value = value));
  } else {
    watchEffect(() =>
      fetcher.value().then((value) => (fetchedValue.value = value))
    );
  }

  return fetchedValue;
}

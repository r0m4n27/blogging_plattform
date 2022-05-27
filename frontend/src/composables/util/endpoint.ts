import type { MaybeRef, Option } from "@/lib/types";
import {
  computed,
  ref,
  watchEffect,
  type ComputedRef,
  type Ref,
  type UnwrapRef,
} from "vue";

export function useEndpoint<T>(
  fetcher: MaybeRef<() => Promise<T>>,
  initialValue: MaybeRef<T>
): {
  value: Ref<UnwrapRef<T> | T>;
  refetch: ComputedRef<() => void>;
};

export function useEndpoint<T>(fetcher: MaybeRef<() => Promise<T>>): {
  value: Ref<UnwrapRef<Option<T>> | Option<T>>;
  refetch: ComputedRef<() => void>;
};

// Fetch data from the endpoint
// until the data is fetched provide the initialValue
export function useEndpoint<T>(
  fetcher: MaybeRef<() => Promise<T>>,
  initialValue?: MaybeRef<T>
) {
  const fetchedValue = ref(initialValue);

  const actualFetcher = ref(fetcher);

  const fetchValue = computed(() => () => {
    actualFetcher.value().then((data) => (fetchedValue.value = data));
  });

  watchEffect(() => fetchValue.value());

  return {
    value: fetchedValue,
    refetch: fetchValue,
  };
}

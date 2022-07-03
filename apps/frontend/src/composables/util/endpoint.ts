import { FetchError, type ErrorMessage } from "@blog/frontend/lib/fetch";
import type { MaybeRef, Option } from "@blog/frontend/lib/types";
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
  initialValue: MaybeRef<T>,
): {
  value: Ref<UnwrapRef<T> | T>;
  refetch: ComputedRef<() => void>;
  error: Ref<ErrorMessage | undefined>;
};

export function useEndpoint<T>(fetcher: MaybeRef<() => Promise<T>>): {
  value: Ref<UnwrapRef<Option<T>> | Option<T>>;
  refetch: ComputedRef<() => void>;
  error: Ref<ErrorMessage | undefined>;
};

// Fetch data from the endpoint
// until the data is fetched provide the initialValue
//
// Also when a bad request happens the message will be provided in an error
export function useEndpoint<T>(
  fetcher: MaybeRef<() => Promise<T>>,
  initialValue?: MaybeRef<T>,
) {
  const fetchedValue = ref(initialValue);
  const errorValue = ref<ErrorMessage | undefined>(undefined);

  const actualFetcher = ref(fetcher);

  const fetchValue = computed(() => () => {
    actualFetcher
      .value()
      .then((data) => {
        fetchedValue.value = data;
        errorValue.value = undefined;
      })
      .catch((e) => {
        if (e instanceof FetchError) {
          errorValue.value = e.error;
        } else {
          throw e;
        }
      });
  });

  watchEffect(() => fetchValue.value());

  return {
    value: fetchedValue,
    refetch: fetchValue,
    error: errorValue,
  };
}

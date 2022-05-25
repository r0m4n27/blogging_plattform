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

type EndpointReturnWithInit<T> = {
  value: Ref<UnwrapRef<T> | T>;
  refetch: ComputedRef<() => void>;
  error: Ref<string | undefined>;
};

type EndpointReturnWithoutInit<T> = {
  value: Ref<UnwrapRef<Option<T>> | Option<T>>;
  refetch: ComputedRef<() => void>;
  error: Ref<string | undefined>;
};

function useNewEndpoint<T>(
  endpoint: MaybeRef<string>,
  method: string,
  initialValue: MaybeRef<T>
): EndpointReturnWithInit<T>;

function useNewEndpoint<T>(
  endpoint: MaybeRef<string>,
  method: string
): EndpointReturnWithoutInit<T>;

// Fetch data from the endpoint
// until the data is fetched provide the initialValue
function useNewEndpoint<T>(
  endpoint: MaybeRef<string>,
  method: string,
  initialValue?: MaybeRef<T>
) {
  const fetchedValue = ref(initialValue);
  const error = ref<string | undefined>(undefined);

  const actualEndpoint = ref(endpoint);

  const fetchValue = computed(() => async () => {
    const response = await fetch(actualEndpoint.value, {
      method,
    });
    if (response.ok) {
      fetchedValue.value = await response.json();
    } else {
      error.value = await response.text();
    }
  });

  watchEffect(() => fetchValue.value());

  return {
    value: fetchedValue,
    refetch: fetchValue,
    error,
  };
}

export function useGet<T>(
  endpoint: MaybeRef<string>,
  initialValue: MaybeRef<T>
): EndpointReturnWithInit<T>;

export function useGet<T>(
  endpoint: MaybeRef<string>
): EndpointReturnWithoutInit<T>;

export function useGet<T>(
  endpoint: MaybeRef<string>,
  initialValue?: MaybeRef<T>
) {
  return useNewEndpoint(endpoint, "GET", initialValue);
}

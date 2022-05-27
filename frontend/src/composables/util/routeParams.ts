import { useRoute, type RouteParams } from "vue-router";
import { computed, ref, watch, type Ref, type UnwrapRef } from "vue";

// HACK: The route params are changed for a page
// just before the user navigates to another page.
// And since we reactively watch the params this means
// the api endpoints are called with the wrong values
//
// To circumvent it, the watching is stopped when the path is changed
//
// https://github.com/vuejs/vue-router/issues/3393

export const useRouteParams = <T extends RouteParams>(): Ref<UnwrapRef<T>> => {
  const route = useRoute();

  const params = ref(route.params as T);
  const pathOnEnter = ref(route.path);

  const newRouteValues = computed(() => ({
    params: route.params as T,
    path: route.path,
  }));

  const watchHandle = watch(
    newRouteValues,
    (newValue) => {
      if (pathOnEnter.value === newValue.path) {
        params.value = newValue.params;
      } else {
        watchHandle();
      }
    },
    { immediate: true }
  );

  return params;
};

import type { CreateElementLike } from "hast-to-hyperscript";
import { type ConcreteComponent, h, type Component } from "vue";

export type ContentComponentRecord = Record<
  string,
  [Component, Record<string, unknown>]
>;

export const createContentComponent = <P>(
  component: ConcreteComponent<P>,
  componentProps: Partial<P>
): [ConcreteComponent<P>, Partial<P>] => [component, componentProps];

export const createContentComponentRenderer =
  (componentMap: ContentComponentRecord): CreateElementLike =>
  (name, oldAttrs, children) => {
    const [component, attrs] = componentMap[name];
    // Wrap children in a function
    // Otherwise vue will give warnings
    // because raw values are passed for slots
    //
    // Source: https://stackoverflow.com/questions/69875273/non-function-value-encountered-for-default-slot-in-vue-3-composition-api-comp
    return h(
      component as ConcreteComponent,
      { ...attrs, ...oldAttrs },
      () => children
    );
  };

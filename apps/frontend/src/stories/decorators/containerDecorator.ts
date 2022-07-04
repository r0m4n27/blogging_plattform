import VContainer from "@blog/frontend/components/base/layout/VContainer.vue";
import VCenter from "@blog/frontend/components/base/layout/VCenter.vue";
import type { Responsive } from "@blog/frontend/lib/responsive";
import type { ContainerSize } from "@blog/frontend/styling/props/containerProps";
import type { SBDecorator } from "../types";

export const createContainerDecorator = (
  size: Responsive<ContainerSize>,
): SBDecorator => {
  return (story) => ({
    components: { story, VContainer, VCenter },
    template: `
      <VContainer size=${size}>
        <VCenter>
          <story />
        </VCenter>
      </VContainer>
    `,
  });
};

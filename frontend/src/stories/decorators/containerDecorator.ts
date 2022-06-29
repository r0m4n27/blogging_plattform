import VContainer from "@/components/base/layout/VContainer.vue";
import VCenter from "@/components/base/layout/VCenter.vue";
import type { Responsive } from "@/lib/responsive";
import type { ContainerSize } from "@/styling/props/containerProps";
import type { SBDecorator } from "../types";

export const createContainerDecorator = (
  size: Responsive<ContainerSize>
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

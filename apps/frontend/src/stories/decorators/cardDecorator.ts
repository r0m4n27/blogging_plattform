import VCard from "@blog/frontend/components/base/layout/VCard.vue";
import type { SBDecorator } from "../types";

export const cardDecorator: SBDecorator = (story) => ({
  components: { story, VCard },
  template: `
    <VCard :padding='6'>
      <story />
    </VCard>
  `,
});

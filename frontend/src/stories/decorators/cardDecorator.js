import VCard from "@/components/base/layout/VCard.vue";

export const cardDecorator = (story) => ({
  components: { story, VCard },
  template: `
    <VCard :padding='6'>
      <story />
    </VCard>
  `,
});

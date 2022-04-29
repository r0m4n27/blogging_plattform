import VContainer from "@/components/base/layout/VContainer.vue";

export const createContainerDecorator = (size) => {
  return (story) => ({
    components: { story, VContainer },
    template: `
      <VContainer size=${size}>
        <story />
      </VContainer>
    `,
  });
};

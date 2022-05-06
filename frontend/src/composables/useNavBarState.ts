import { ref, type Ref, type UnwrapRef } from "vue";

export interface NavBarState {
  menuExpanded: Ref<UnwrapRef<boolean>>;

  toggleMenu: () => void;
}

export const useNavBarState = (): NavBarState => {
  const menuExpanded = ref(false);

  const toggleMenu = () => {
    menuExpanded.value = !menuExpanded.value;
  };

  return {
    menuExpanded,
    toggleMenu,
  };
};

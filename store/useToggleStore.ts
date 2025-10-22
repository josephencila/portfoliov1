import { create } from "zustand";

interface ToggleState {
    isToggled: boolean;
    toggle: () => void;
    toggleOn: () => void;
    toggleOff: () => void;
}

export const useToggleStore = create<ToggleState>((set) => ({
    isToggled: false,
    toggle: () => set((state) => ({ isToggled: !state.isToggled })),
    toggleOn: () => set({ isToggled: true }),
    toggleOff: () => set({ isToggled: false }),
}));

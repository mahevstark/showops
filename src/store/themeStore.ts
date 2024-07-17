'use client';

import { create } from 'zustand';

export interface ThemeStore {
    appearance: "dark" | "inherit" | "light" | undefined;
    setAppearance: (appearance:"dark" | "inherit" | "light" | undefined) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
    appearance: 'light',
    setAppearance: (appearance) => set({ appearance }),
}));

export default useThemeStore;
import { create } from "zustand";

interface ViewType {
  getSidebar: boolean;
  setSidebar: (anyValue: boolean) => void;
}

export const useView = create<ViewType>()((set) => ({
  getSidebar: false,
  setSidebar: (anyValue: boolean) => set(() => ({ getSidebar: anyValue })),
}));

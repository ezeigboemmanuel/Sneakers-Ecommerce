import { create } from "zustand";

interface useNavProps{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNav = create<useNavProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
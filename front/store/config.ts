import create from 'zustand';

interface alertObjType {
  active: boolean;
  message: string;
}

interface alertType {
  alertState1: alertObjType;
  setAlertState1: (state: alertObjType) => void
}

export const useAlertStore = create<alertType>((set) => ({
  alertState1: {
    active: false,
    message: ''
  },
  setAlertState1: (value) => set((state) => ({
    alertState1: {active: value.active, message: value.message}
  }))

}))


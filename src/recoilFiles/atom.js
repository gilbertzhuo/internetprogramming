import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const courseState = atom({
  key: "courseState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const sideBarState = atom({
  key: "sideBarState",
  default: 0,
});

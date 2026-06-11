import { atom } from "jotai";

const atomRakutenView = atom(-1);
const atomReData = atom(0);
const atomDeleteId = atom(-1);
const atomDialogOpen = atom(false);

export { atomRakutenView, atomReData, atomDeleteId, atomDialogOpen };

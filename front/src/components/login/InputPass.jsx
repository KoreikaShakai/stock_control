import { useSetAtom } from "jotai";
import { atomPass } from "./atoms";
import { useRef } from "react";

export function InputPass() {
  const setPass = useSetAtom(atomPass);
  const ref = useRef(null);

  return (
    <input
      ref={ref}
      type="password"
      placeholder=""
      onChange={() => {
        setPass(ref.current.value);
      }}
    />
  );
}

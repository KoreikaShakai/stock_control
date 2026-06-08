import { useSetAtom } from "jotai";
import { atomEmail } from "./atoms";
import { useRef } from "react";

export function InputEmail() {
  const setEmail = useSetAtom(atomEmail);
  const ref = useRef(null);

  return (
    <input
      ref={ref}
      aria-invalid="false"
      className="cert-con"
      type="text"
      data-testid="…"
      placeholder="Email"
      onChange={() => {
        setEmail(ref.current.value);
      }}
    />
  );
}

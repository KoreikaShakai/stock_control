import { useSetAtom } from "jotai";
import { atomEmail } from "./atoms";
import { useRef } from "react";
import { TextField } from "@mui/material";

export function InputEmail() {
  const setEmail = useSetAtom(atomEmail);
  // const ref = useRef(null);

  return (
    <>
      {/* <input
        ref={ref}
        aria-invalid="false"
        className="cert-con"
        type="text"
        data-testid="…"
        placeholder="Email"
        onChange={() => {
          setEmail(ref.current.value);
        }}
      /> */}
      <TextField
        sx={{ width: "275px" }}
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        // ref={ref}
        aria-invalid="false"
        className="cert-con"
        type="text"
        data-testid="…"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></TextField>
    </>
  );
}

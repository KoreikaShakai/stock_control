import { useSetAtom } from "jotai";
import { atomPass } from "./atoms";
import { useRef } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

export function InputPass() {
  const setPass = useSetAtom(atomPass);
  const ref = useRef(null);
  // const filledPasswordId = React.useId();

  return (
    <>
      <input
        ref={ref}
        type="password"
        placeholder=""
        onChange={() => {
          setPass(ref.current.value);
        }}
      />
      {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
        <InputLabel htmlFor={`${filledPasswordId}-input`}>Password</InputLabel>
        <FilledInput
          id={`${filledPasswordId}-input`}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl> */}
    </>
  );
}

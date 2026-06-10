import { ButtonGroup, Button } from "@mui/material";
import { atomReData } from "./atoms";
import { useAtom } from "jotai";

export function ChangeMode({ id ,status}) {
  const [reData, setReData] = useAtom(atomReData);
  async function statusChange(status) {
    await fetch("/api/stock", {
      method: "PATCH",
      headers: "",
      body: JSON.stringify({ id: id, status: status }),
    });
    setReData(!reData);
  }

  function statusDisabled(v){
    
    return {}
  }

  return (
    <ButtonGroup variant="contained">
      <Button sx={}
        onClick={() => {
          statusChange(1);
        }}
      >
        ある
      </Button>
      <Button
        onClick={() => {
          statusChange(3);
        }}
      >
        発注中
      </Button>
      <Button
        onClick={() => {
          statusChange(2);
        }}
      >
        ない
      </Button>
    </ButtonGroup>
  );
}

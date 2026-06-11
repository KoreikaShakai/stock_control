import { ButtonGroup, Button } from "@mui/material";
import { atomReData } from "./atoms";
import { useSetAtom } from "jotai";

export function ChangeMode({ id, status }) {
  const setReData = useSetAtom(atomReData);
  async function statusChange(status) {
    await fetch("/stock", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, status: status }),
    });
    setReData((i) => i + 1);
  }

  return (
    <ButtonGroup variant="contained">
      <Button
        disabled={1 === status}
        onClick={() => {
          statusChange(1);
        }}
      >
        ある
      </Button>
      <Button
        disabled={3 === status}
        onClick={() => {
          statusChange(3);
        }}
      >
        発注中
      </Button>
      <Button
        disabled={2 === status}
        onClick={() => {
          statusChange(2);
        }}
      >
        ない
      </Button>
    </ButtonGroup>
  );
}

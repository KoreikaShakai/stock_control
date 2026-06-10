import { ButtonGroup, Button } from "@mui/material";
import { atomReData } from "./atoms";
import { useAtom } from "jotai";

export function ChangeMode({ id, status }) {
  const [reData, setReData] = useAtom(atomReData);
  async function statusChange(status) {
    await fetch("/stock", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, status: status }),
    });
    setReData(!reData);
  }

  console.log({ id, status });
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

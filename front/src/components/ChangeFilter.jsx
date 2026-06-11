import { ButtonGroup, Button } from "@mui/material";
import { atomFilterVali } from "./stock/atoms";
import { useAtom } from "jotai";

export function ChangeFilter() {
  const [filterVali, setFilterVali] = useAtom(atomFilterVali);
  return (
    <ButtonGroup variant="contained">
      <Button
        disabled={0 === filterVali}
        onClick={() => {
          setFilterVali(0);
        }}
      >
        全て
      </Button>
      <Button
        disabled={1 === filterVali}
        onClick={() => {
          setFilterVali(1);
        }}
      >
        ある
      </Button>
      <Button
        disabled={3 === filterVali}
        onClick={() => {
          setFilterVali(3);
        }}
      >
        発注中
      </Button>
      <Button
        disabled={2 === filterVali}
        onClick={() => {
          setFilterVali(2);
        }}
      >
        ない
      </Button>
    </ButtonGroup>
  );
}

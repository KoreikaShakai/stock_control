import { CardActions, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ChangeMode } from "./ChangeMode";
import { atomReData, atomRakutenView } from "./atoms";
import { useAtom } from "jotai";

export function ActionsCard({ id, ind, status }) {
  const [rakutenView, setRakutenView] = useAtom(atomRakutenView);
  const [reData, setReData] = useAtom(atomReData);
  const handleRemove = async () => {
    await fetch("/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
    setReData(!reData);
  };

  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      <ChangeMode id={id} status={status} />
      <IconButton size="small">
        <DeleteIcon
          fontSize="large"
          sx={{ color: "red" }}
          onClick={handleRemove}
        />
      </IconButton>
      <IconButton>
        <AddShoppingCartIcon
          sx={{ color: "black" }}
          onClick={() => {
            if (rakutenView === -1) {
              setRakutenView(ind);
            } else if (rakutenView === ind) {
              setRakutenView(-1);
            } else {
              setRakutenView(ind);
            }
          }}
        ></AddShoppingCartIcon>
      </IconButton>
      {/* <button onClick={() => setRakutenView(rakutenView === -1 ? ind : -1)}>
        楽天
      </button> */}
    </CardActions>
  );
}

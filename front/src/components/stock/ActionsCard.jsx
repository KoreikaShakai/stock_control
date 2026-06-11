import { CardActions, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ChangeMode } from "./ChangeMode";
import {
  atomReData,
  atomRakutenView,
  atomDeleteId,
  atomDialogOpen,
} from "./atoms";
import { useAtom } from "jotai";
import { ConfirmDialog } from "./ConfirmDialog";

export function ActionsCard({ id, ind, status }) {
  const [rakutenView, setRakutenView] = useAtom(atomRakutenView);
  const [reData, setReData] = useAtom(atomReData);
  const [deleteId, setDeleteId] = useAtom(atomDeleteId);
  const [dialogOpen, setDialogOpen] = useAtom(atomDialogOpen);

  const handleDialog = () => {
    setDeleteId(id);
    setDialogOpen(true);
  };
  const handleRemove = async () => {
    console.log("id: ", id);
    // await fetch("/delete", {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ id: id }),
    // });
    setReData(!reData);
    setDialogOpen(false);
  };

  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      <ChangeMode id={id} status={status} />
      <IconButton size="small">
        <DeleteIcon
          fontSize="large"
          sx={{ color: "red" }}
          onClick={handleDialog}
        />
      </IconButton>
      {dialogOpen && (
        <ConfirmDialog
          open={dialogOpen}
          id={atomDeleteId}
          onExecute={handleRemove}
        />
      )}
      <IconButton>
        <AddShoppingCartIcon
          sx={{ color: status === 2 ? "red" : "black" }}
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

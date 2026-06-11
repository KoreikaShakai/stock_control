import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useAtom } from "jotai";
import { useState } from "react";
import { atomDeleteId, atomDialogOpen, atomReData } from "./atoms";
export function ConfirmDialog({ open, id, onExecute }) {
  const [dialogOpen, setDialogOpen] = useAtom(atomDialogOpen);
  const [reData, setReData] = useAtom(atomReData);

  const handleCancel = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>削除の確認</DialogTitle>
      <DialogActions>
        <Button onClick={onExecute} color="primary">
          実行
        </Button>
        <Button onClick={handleCancel} color="inherit">
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
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
    <Dialog open={open} fullWidth={true} maxWidth="sm">
      <DialogTitle sx={{ textAlign: "center" }}>削除の確認</DialogTitle>
      <FormControl>
        <DialogContentText sx={{ textAlign: "center" }}>
          この商品を管理から削除して良いですか？
        </DialogContentText>{" "}
        <DialogActions>
          <Button onClick={onExecute} color="primary">
            実行
          </Button>
          <Button onClick={handleCancel} color="inherit">
            キャンセル
          </Button>
        </DialogActions>
      </FormControl>
    </Dialog>
  );
}

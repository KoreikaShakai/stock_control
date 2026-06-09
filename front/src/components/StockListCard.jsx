import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Box,
  Checkbox,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
export function StockListCard({
  item,
  selectedIds,
  setSelectedIds,
  dateFrom,
  dateTo,
  isUpload,
  setIsUpload,
}) {
  const handleUpdate = async (event) => {
    const req = {
      id: event.target.parentNode.parentNode.parentNode.id,
    };
    if (req.id === "") return;
    await fetch("/update_photos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    setIsUpload((is) => !is);
  };
  const handleRemove = async (event) => {
    const req = {
      id: event.target.parentNode.parentNode.parentNode.parentNode.id,
    };
    if (req.id === "") return;
    await fetch("/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    setIsUpload((is) => !is);
  };
  const handleSelect = async (stockId) => {
    const arr = [...selectedIds];
    arr.indexOf(stockId) === -1
      ? setSelectedIds([...arr, stockId])
      : setSelectedIds(arr.toSpliced(arr.indexOf(stockId), 1));
  };
  return (
    <Card
      sx={{
        // maxWidth: 345,
        maxWidth: 690,
        textAlign: "center",
        backgroundColor: "whitesmoke",
        marginBottom: 4,
        display: "flex",
        overlay: "auto",
        opacity: ele.is_shortage ? 0.4 : 1,
      }}
      key={ele.create_date}
      id={ele.id}
    >
      <Card sx={{ width: 345, flex: "auto" }}>
        <CardMedia sx={{ height: 320 }} image={ele.url} />
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>
            {dayjs(ele.create_date).format("YYYY年MM月DD日")}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            {dateFrom.diff(dateTo, "day")}日経過
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton size="small">
            <UpdateIcon
              fontSize="large"
              sx={{ color: "blue" }}
              onClick={handleUpdate}
            />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon
              fontSize="large"
              sx={{ color: "red" }}
              onClick={handleRemove}
            />
          </IconButton>
          <button
            onClick={() => {
              setRakutenView(-1);
            }}
          >
            楽天
          </button>
        </CardActions>
      </Card>
      {/* ここに楽天 */}
      <Card sx={{ width: 345, height: 320, flex: "auto" }}>
        <RakutenRate />
      </Card>
    </Card>
  );
}

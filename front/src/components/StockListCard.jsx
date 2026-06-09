import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { RakutenRate } from "./stock/RakuteRate";

export function StockListCard({
  ele,
  ind,
  isRakutenView,
  selectedIds,
  setSelectedIds,
  setIsUpload,
  setRakutenView,
}) {
  const dateTo = dayjs(ele.create_date);
  const dateFrom = dayjs();

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

  const handleSelect = (stockId) => {
    const arr = [...selectedIds];
    arr.indexOf(stockId) === -1
      ? setSelectedIds([...arr, stockId])
      : setSelectedIds(arr.toSpliced(arr.indexOf(stockId), 1));
  };

  return (
    <Card
      sx={{
        maxWidth: 690,
        textAlign: "center",
        backgroundColor: "whitesmoke",
        marginBottom: 4,
        overlay: "auto",
        display: isRakutenView ? "flex" : undefined,
        opacity: ele.is_shortage ? 0.4 : 1,
      }}
      id={ele.id}
    >
      <Card sx={{ width: 345, flex: "auto" }}>
        <CardMedia
          sx={{ height: 320 }}
          image={ele.url}
          onClick={isRakutenView ? undefined : () => handleSelect(ele.id)}
        />
        <CardContent>
          {!isRakutenView && selectedIds.includes(ele.id) && (
            <Checkbox defaultChecked sx={{ overlay: "auto" }} />
          )}
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
          <button onClick={() => setRakutenView(isRakutenView ? -1 : ind)}>
            楽天
          </button>
        </CardActions>
      </Card>
      {isRakutenView && (
        <Card sx={{ width: 345, height: 320, flex: "auto" }}>
          <RakutenRate />
        </Card>
      )}
    </Card>
  );
}

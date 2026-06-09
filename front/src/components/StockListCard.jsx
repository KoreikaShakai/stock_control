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
        maxWidth: 345,
        textAlign: "center",
        backgroundColor: "whitesmoke",
        marginBottom: 4,
        opacity: item.is_shortage ? 0.4 : 1,
      }}
      key={item.create_date}
      id={item.id}
    >
      <CardMedia
        sx={{ height: 320 }}
        image={item.url}
        onClick={() => handleSelect(item.id)}
      />
      <CardContent>
        {selectedIds.includes(item.id) && (
          <Checkbox
            defaultChecked
            sx={{
              overlay: "auto",
            }}
          ></Checkbox>
        )}
        <Typography sx={{ fontSize: 20 }}>
          {dayjs(item.create_date).format("YYYY年MM月DD日")}
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
      </CardActions>
    </Card>
  );
}

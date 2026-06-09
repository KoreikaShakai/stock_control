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

export function StockListCard({ item, selectedIds, setSelectedIds }) {
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
      onClick={() => handleSelect(item.id)}
    >
      <CardMedia sx={{ height: 320 }} image={item.url} />
      <CardContent>
        {selectedPhotos.includes(item.id) && (
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

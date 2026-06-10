import dayjs from "dayjs";
import { CardContent, Typography } from "@mui/material";

export function DateCard({ create_date, name }) {
  const date = dayjs(create_date);
  return (
    <CardContent>
      {/* {!isRakutenView && selectedIds.includes(ele.id) && (
            <Checkbox defaultChecked sx={{ overlay: "auto" }} />
          )} */}
      <Typography sx={{ fontSize: 20 }}>
        {dayjs().diff(date, "hour")}時間前
      </Typography>
      <Typography sx={{ fontSize: 20 }}>{name}</Typography>
    </CardContent>
  );
}

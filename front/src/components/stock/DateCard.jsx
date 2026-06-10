import dayjs from "dayjs";
import { CardContent, Typography } from "@mui/material";

export function DateCard({ create_date }) {
  const date = dayjs(create_date);
  return (
    <CardContent>
      {/* {!isRakutenView && selectedIds.includes(ele.id) && (
            <Checkbox defaultChecked sx={{ overlay: "auto" }} />
          )} */}
      <Typography sx={{ fontSize: 20 }}>
        {date.format("YYYY年MM月DD日")}
      </Typography>
      <Typography sx={{ fontSize: 20 }}>
        {dayjs().diff(date, "day")}日経過
      </Typography>
    </CardContent>
  );
}

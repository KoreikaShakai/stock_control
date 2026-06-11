import { Card, CardMedia } from "@mui/material";
import { RakutenRate } from "./RakuteRate";
import { DateCard } from "./DateCard";
import { ActionsCard } from "./ActionsCard";
import { atomRakutenView } from "./atoms";
import { useAtomValue } from "jotai";

export function StockListCard({ ele, ind }) {
  const rakutenView = useAtomValue(atomRakutenView);
  return (
    <Card
      sx={{
        maxWidth: 690,
        height: 480,
        textAlign: "center",
        backgroundColor: "whitesmoke",
        marginBottom: 4,
        overlay: "auto",
        display: "flex",
      }}
    >
      <Card sx={{ width: 345, flex: "auto" }}>
        <CardMedia sx={{ height: 320 }} image={ele.url} />

        <DateCard create_date={ele.create_date} name={ele.name} />

        <ActionsCard id={ele.id} status={ele.status} ind={ind} />
      </Card>
      {(() => {
        if (rakutenView === ind) {
          return (
            <Card sx={{ width: 345, height: 480, flex: "auto" }}>
              <RakutenRate name={ele.name} />
            </Card>
          );
        }
      })()}
    </Card>
  );
}

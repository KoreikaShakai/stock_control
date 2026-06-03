import { useEffect, useState } from "react";

export function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch("/toranpu")
      .then((res) => res.json())
      .then((res) => setNews((news) => res));
  }, []);

  return <p>{news}</p>;
}

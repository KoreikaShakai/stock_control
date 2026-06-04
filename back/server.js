const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { getTrump } = require("./getTruth");
const { translate } = require("@vitalets/google-translate-api");
const { createResponseBody } = require("./view/views");

const { responseTrump } = createResponseBody();

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());

app.get("/toranpu", (res, req) => {
  responseTrump(req, res);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

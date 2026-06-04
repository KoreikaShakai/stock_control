const { translate } = require("@vitalets/google-translate-api");
const { getTrump } = require("../getTruth");

const createResponseBody = () => {
  const responseTrump = async (res, req) => {
    console.log("アクセス");
    let result = [];
    try {
      const data = await getTrump();
      const translatedData = await Promise.all(
        data.map(async (post) => {
          if (post.content && post.content.trim() !== "") {
            try {
              const resTranslate = await translate(post.content, {
                from: "en",
                to: "ja",
              });
              post.content_ja = resTranslate.text;
            } catch (transError) {
              console.error("翻訳エラー:", transError.message);
              post.content_ja = "(翻訳失敗)";
            }
          } else {
            post.content_ja = "(本文なし)";
          }
          return post;
        }),
      );
      await translatedData.forEach((post) => {
        result.push({
          post_date: post.account.last_status_at,
          post_user: post.account.username,
          contents: post.content_ja,
        });
      });
      console.log(result);
      res.status(200).json({ successe: true, data: result });
      return;
    } catch (error) {
      console.error("取得失敗", error);
      res.status(500).json({ successe: false, error: error.message });
      return;
    }
  };
  return {
    responseTrump,
  };
};

module.exports = { createResponseBody };

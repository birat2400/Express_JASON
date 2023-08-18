const router = require("express").Router();
const qrcode = require("../module/QrJason");

router.post("/qr", async (req, res) => {
  try {
    const { name: qr } = req.body;
    const qrData = await qrcode.toDataURL(qr);

    res.send(`<img src="${qrData}"/>`);
  } catch (err) {
    res.send("error voo");
  }
});
module.exports = router;

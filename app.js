const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

const client_id =
  "165704941652-6ousn73ir12avtsphimpvtqv2npomr1l.apps.googleusercontent.com";
const client_secret = "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";
const redirect_url = "https://developers.google.com/oauthplayground";
const refresh_token =
  "1//044eV-KggvaIECgYIARAAGAQSNwF-L9Ir55-JjDsxI_uDBm4SzGNGflsa9HoDOMyOL-H6SItMSiQfbAFHfoaL-9E8dzwYLnM2yqw";
const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_url
);

oauth2Client.setCredentials({ refresh_token: refresh_token });
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});
const filePath = path.join(__dirname, "13-10.png");

async function uploadFile() {
  try {
    const res = await drive.files.create({
      requestBody: {
        name: "2122.png",
        mimeType: "image/png",
      },
      media: {
        mimeType: "image/png",
        body: fs.createReadStream(filePath),
      },
    });
  } catch (ex) {
    console.log(ex);
  }
}
uploadFile();

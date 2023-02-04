// const zdfs = require('');
const { PSAV1Api, DataV1Api } = require("zeeve-zdfs-sdk");

const dataApi = new DataV1Api(
  "https://app.zeeve.io/zdfs-api",
  process.env.ACCESS_TOKEN
);

async function dep() {
  const res = await dataApi.uploadFile(
    "uploads/1675523412360_.png",
    Date.now()
  );
  console.log(res);
}
async function depp() {
  const res = await dataApi.viewFileByFileID(
    "0cebd358-387c-4021-b64a-25982328be07"
  );
  console.log(res);
}
dep();

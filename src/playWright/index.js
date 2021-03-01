const storeCredentials = require('./scripts/storeCredentials');
const goToDownloadYourInformation = require('./scripts/goToDownloadYourInformation');
const askForFile = require('./scripts/askForFiles');
const waitForFile = require('./scripts/waitForFile');
const downloadFile = require('./scripts/downloadFile');
const setUpBrower = require('./scripts/setUpBrowser');
// const credentials = require('../credentials');

async function index() {
  /* save credentials enter by user */
  await storeCredentials();

  /* start browser */
  // const [browser, context] = await setUpBrower(JSON.stringify(credentials))
  const [browser, context] = await setUpBrower();

  /* select correct frame */
  const [page, dataDoc] = await goToDownloadYourInformation(context);

  /* ask for files */
  await askForFile(dataDoc);

  /* Wait for files */
  await waitForFile(page, dataDoc);

  /* Download files */
  await downloadFile(page);

  /* Close Automation */
  await browser.close();
}

index();

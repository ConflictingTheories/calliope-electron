/*                                                 *\
** ----------------------------------------------- **
**             Calliope - Site Generator   	       **
** ----------------------------------------------- **
**  Copyright (c) 2020-2021 - Kyle Derby MacInnis  **
**                                                 **
**    Any unauthorized distribution or transfer    **
**       of this work is strictly prohibited.      **
**                                                 **
**               All Rights Reserved.              **
** ----------------------------------------------- **
\*                                                 */

// Third-party Libraries
const express = require("express");
const path = require("path");
const router = express.Router({ mergeParams: true });

module.exports = (() => {
  // Serve File if Exists
  router.use("/", express.static(path.join(__dirname, "../../client/website/build")));
  // Capture & Perform Custom Routing
  router.use("*", function (_, res) { res.sendFile(path.join(__dirname, "../../client/website/build", "index.html"))});
  return router;
})();

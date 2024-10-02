const express = require("express");
const router = express.Router();
const {
  addPersonInfo,
  deletePersonInfo,
  updatePersonInfo,
  getPersonInfo,
  getPeopleInfo,
} = require("../controllers/person.controller");

router.route("/").post(addPersonInfo).get(getPeopleInfo);

router
  .route("/:id")
  .post(getPersonInfo)
  .put(updatePersonInfo)
  .delete(deletePersonInfo);

module.exports = router;

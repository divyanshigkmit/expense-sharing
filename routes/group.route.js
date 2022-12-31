const { Router } = require("express");

const groupController = require("../controllers/group.controller");
const groupValidator = require("../validators/group.validator");
const genericResponse = require("../helper/generic-response.helper");
const groupSerializer = require("../serializers/group.serializer");
const { checkAccessToken } = require("../middlewares/auth");

const router = Router();

router.post(
  "/",
  checkAccessToken,
  groupValidator.createGroupSchema,
  groupController.createGroup,
  groupSerializer.createGroupData,
  genericResponse.sendResponse
);

router.post(
  "/member",
  checkAccessToken,
  groupController.addMember,
  genericResponse.sendResponse
);

module.exports = router;
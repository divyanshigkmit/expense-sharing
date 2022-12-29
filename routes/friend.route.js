const { Router } = require("express");

const friendController = require("../controllers/friend.controller");
const friendValidator = require("../validators/friend.validator");
const genericResponse = require("../helper/generic-response.helper");
const friendSerializer = require("../serializers/friend.serializer");
const { checkAccessToken } = require("../middlewares/auth");

const router = Router();

router.post(
  "/",
  checkAccessToken,
  friendValidator.addFriendSchema,
  friendController.addFriend,
  friendSerializer.addFriendData,
  genericResponse.sendResponse
);

module.exports = router;
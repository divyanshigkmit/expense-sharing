const { commonErrorHandler } = require("../helper/error-handler.helper");
const friendService = require("../services/friend.service");

const addFriend = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const data = await friendService.addFriend(payload, req.user);
    res.data = data;
    next();
  } catch (error) {
    console.log(error);
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

module.exports = {
  addFriend,
};
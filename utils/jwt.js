import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constants.js";

function createAccessToken(user) {
  const expToken = new Date(); // current date/time

  //calculate the expiration date/time
  expToken.setHours(expToken.getHours() + 24); // 24 hours

  const payload = {
    token_type: "access",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };

  return jsonwebtoken.sign(payload, JWT_SECRET_KEY);
}

function createRefreshToken(user) {
  const expToken = new Date(); // current date/time

  expToken.setMonth(expToken.getMonth() + 1); // 1 month

  const payload = {
    token_type: "refresh",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };

  return jsonwebtoken.sign(payload, JWT_SECRET_KEY);
}

function decoded(token) {
  return jsonwebtoken.verify(token, JWT_SECRET_KEY, true);
}

function hasExpiredToken(token) {
  const { exp } = decoded(token);
  const currentDate = new Date().getTime();

  console.log("exp", exp);

  if(exp < currentDate){
    console.log("Token has expired", currentDate, exp);
    return true;
  }
}

export const jwt = {
  createAccessToken,
  createRefreshToken,
  decoded,
  hasExpiredToken,
}

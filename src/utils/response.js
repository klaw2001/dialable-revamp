export function sendResponse(res, success, data, message, statusCode = 200) {
  let obj = {
    success,
    data,
    message,
  };

  return res.status(statusCode).json(obj);
}

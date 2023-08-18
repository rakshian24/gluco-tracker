import moment from "moment";

const getFormattedTimeStamp = (value) => {
  return moment(value).format("DD/MMM/YYYY hh:mm:ss A")
}

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "internal error";
    this.isOperational = true;
  }
}

export {
  getFormattedTimeStamp,
  AppError
}
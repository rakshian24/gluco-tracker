import moment from "moment";

export const getFormattedTimeStamp = (value) => {
    return moment(value).format("DD/MMM/YYYY hh:mm:ss A")
}
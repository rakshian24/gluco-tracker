import moment from "moment";

export const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const formatErrorObject = (response) => {
  const message = response?.data?.message || '';
  return {
    ...response,
    data: {
      ...response.data,
      message: isJson(message) ? JSON.parse(message) : message
    }
  }
};

export const isRunningStandalone = () => {
  return (window.matchMedia('(display-mode: standalone)').matches);
};

export const isAppRunningOnIos16 = () => {
  return window.navigator.userAgent.match('iPhone OS 16')?.length > 0
};

export const isStandAloneAndRunningOnIos16 = () => isRunningStandalone() && isAppRunningOnIos16();

export const showIsMedsTakenCheckbox = (selectedValue) => {
  return ['AB', 'AD'].includes(selectedValue)
};

export const showConsumedFoodsTagBox = (selectedValue) => {
  return ['AB', 'AL', 'AD'].includes(selectedValue);
};

export const isArrayEmpty = (arr) => {
  return arr && arr.length > 0 ? false : true
};

export const getReadingsObjectByType = (readingsArr) => {
  const readingsObj = {};
  readingsArr.forEach(reading => {
    readingsObj[reading.type] = { ...reading }
  });
  return readingsObj;
}

export const getFormattedDate = (d) => {
  const today = moment();
  const parsedDate = moment(d, 'DD-MM-YYYY');
  if (moment(parsedDate).isSame(today, "day")) {
    return 'Today'
  } else if (moment(parsedDate).isSame(today.subtract(1, 'day'), "day")) {
    return 'Yesterday'
  } else {
    return moment(d, 'DD-MM-YYYY').format('DD-MMM-YYYY').toString();
  }
}
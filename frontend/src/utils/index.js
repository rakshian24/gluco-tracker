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
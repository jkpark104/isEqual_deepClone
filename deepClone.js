function deepClone(data) {
  if (!(data && (data.constructor === Array || data.constructor === Object)))
    return data;
  const result = data.constructor === Array ? [] : {};
  Object.keys(data).forEach(key => {
    result[key] = deepClone(data[key]);
  });
  return result;
}

export default deepClone;

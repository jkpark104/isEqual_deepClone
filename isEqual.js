function isEqual(data1, data2) {
  if (arguments.length < 2)
    throw new Error(
      `isEqual requires at least 2 argument, but only ${arguments.length} were passed`
    );
  if (
    data1 &&
    data2 &&
    (data1.constructor === Object || data1.constructor === Array)
  ) {
    if (data1.constructor !== data2.constructor) return false;
    if (Object.keys(data1).length !== Object.keys(data2).length) return false;
    for (const key of Object.keys(data1)) {
      if (Object.prototype.hasOwnProperty.call(data2, key)) {
        if (!isEqual(data1[key], data2[key])) return false;
      } else return false;
    }
    return true;
  }
  return Object.is(data1, data2);
}

export default isEqual;

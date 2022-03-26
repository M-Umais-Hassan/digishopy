export const sliceText = (data, length) => {
  return data.slice(0, length) + (data.length > length && "...");
};

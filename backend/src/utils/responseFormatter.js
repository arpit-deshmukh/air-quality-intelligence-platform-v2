export const sendResponse = (res, data) => {
  res.json({
    success: true,
    data
  });
};

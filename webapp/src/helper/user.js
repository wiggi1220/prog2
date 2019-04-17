const getCurrentUser = () => {
  const userJSON = sessionStorage.getItem("currUser");
  return JSON.parse(userJSON);
};

export { getCurrentUser };

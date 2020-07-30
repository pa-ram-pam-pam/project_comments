function recordToLocalStorage(commentsArray) {
  const json = JSON.stringify(commentsArray);
  localStorage.setItem("comments", json);
}
export default recordToLocalStorage;

function searchNames(logins) {
  return logins.filter(function (arr) {
    return arr[0].match(/_$/);
  });
}

/*======================== Array Methods =========================*/
Array.prototype.clone = function() {
  return JSON.parse(JSON.stringify(this));
};

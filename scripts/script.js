const timeElement = document.querySelector (".time");
const timeElement = document.querySelector (".date");

/**
 * 
 * @param {Date} date 
 */
function formatTime(date) {
  const hours12  = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
 
  return `${hours12.toString}:${minutes}`;

}

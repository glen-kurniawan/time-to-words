// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const [hour, minutes] = time.split(':');

  const numberMap = {
    1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 21: "twenty-one", 22: "twenty-two", 23: "twenty-three", 24: "twenty-four", 25: "twenty-five", 26: "twenty-six", 27: "twenty-seven", 28: "twenty-eight", 29: "twenty-nine"
  };

  const intHour = parseInt(hour);
  const intMinutes = parseInt(minutes);

  if (intMinutes === 0) {
    if (intHour === 0) return 'midnight';
    if (intHour === 12) return 'midday';
    const int12Hour = intHour > 12 ? intHour - 12 : intHour;
    return `${numberMap[int12Hour]} o'clock`;
  }

  if (intMinutes === 15) return `quarter past ${numberMap[intHour]}`;
  if (intMinutes === 30) return `half past ${numberMap[intHour]}`;
  if (intMinutes === 45) return `quarter to ${numberMap[intHour+1]}`;
  
  if (intMinutes < 15 || intMinutes < 30) return `${numberMap[intMinutes]} past ${numberMap[intHour]}`;

  if (intMinutes > 30 || intMinutes <= 59) return `${numberMap[60 - intMinutes]} to ${numberMap[intHour+1]}`;
}

module.exports = { convertTimeToWords };
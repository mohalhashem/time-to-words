const converter = require('number-to-words');

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!

  try {
    const hour = time.split(':')[0];
    const minutes = time.split(':')[1];

    if (hour === undefined || minutes === undefined) {
      return 'Pleae pass a valid time';
    }

    let hourWord = converter.toWords(hour);
    let minutesWord = converter.toWords(minutes);

    if (time === '0:00') {
      return 'midnight';
    }

    if (minutes <= 30) {
      if (minutes === '00') {
        return `${hourWord} o'clock`;
      }

      if (minutes === '15') {
        return `quarter past ${hourWord}`;
      }

      if (minutes === '30') {
        return `half past ${hourWord}`;
      }

      return `${minutesWord} past ${hourWord}`;
    }

    hourWord = converter.toWords(parseInt(hour, 8) + 1);
    minutesWord = converter.toWords(60 - parseInt(minutes, 8));

    if (minutes === '45') {
      return `quarter to ${hourWord}`;
    }

    return `${minutesWord} to ${hourWord}`;
  } catch (e) {
    return e;
  }
}

module.exports = { convertTimeToWords };

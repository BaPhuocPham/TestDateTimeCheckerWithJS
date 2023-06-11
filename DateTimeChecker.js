const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const message = document.getElementById('message');


const checkDate = (day, month, year) => {
  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
    console.log('base validate')
    return false;
  }
  console.log(typeof(month))
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8: 
    case 10: 
    case 12:
      return true;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day === 31) {
        console.log('day > 30')
        return false; 
      } else {
        return true;
      }
      break;
    case 2:
      if (day > 29) { 
        console.log('day > 29')
        return false; 
      }
      if (day == 29) {
        if (year % 4 === 0 && year % 100!== 0 || year % 400 === 0) {
          return true;
        } else {
          console.log('not a leap year')
          return false;
        }
      }
      break;
    default: 
      return true
  }
}

function handleCheckDate() {
  console.log('click')
  let dayValue = parseInt(day.value);
  let monthValue = parseInt(month.value);
  let yearValue = parseInt(year.value);
  console.log(typeof(dayValue))
  let isValidDate = checkDate(dayValue, monthValue, yearValue);
  console.log(isValidDate)
    if (isValidDate == true) {
      message.textContent = "This is a valid date"
      message.style.color = "green"
    } else {
      message.textContent = "This is not a valid date"
      message.style.color = "red"
    }
}

module.exports = { checkDate }
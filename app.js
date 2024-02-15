const dayjs = require('dayjs')
var localizedFormat = require('dayjs/plugin/localizedFormat')
var duration = require('dayjs/plugin/duration')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')
var customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)
dayjs.extend(localizedFormat)

let myTz = dayjs().tz('Asia/Bangkok')


const displayDate = document.getElementById('displayTime')
const dataString = dayjs().tz()
const formattedDate = dataString.format('dddd, D MMM, YYYY')
displayDate.textContent =  `${formattedDate}`

function updateTime(){
   const currentTime = document.getElementById('currentTime')
   const myTime = dayjs().tz(myTz.$x.$timezone)
   currentTime.textContent = `${myTime.format("HH:mm:ss")}`
}

setInterval(updateTime,1000)

const timeZone = document.getElementById('timeZone')
timeZone.innerHTML = `${myTz.$x.$timezone}`

var MicroModal = require('micromodal'); 

MicroModal.init({
   closeOnEsc: true,
   onShow: (modal) => document.body.classList.add('modal-open'),
   onClose: (modal) => document.body.classList.remove('modal-open')
 });

 const editBtn = document.getElementById('edit-btn')
 const applyButton = document.getElementById('apply-button');
 const timezoneSelect = document.getElementById('timezone-select');
 
editBtn.addEventListener('click', () => {
   MicroModal.show('modal-1');
 });
 
 applyButton.addEventListener('click', () => {

   const selectedTimezone = timezoneSelect.value;
   handleTimezoneChange(selectedTimezone);
   MicroModal.close('modal-1');

 });

 function handleTimezoneChange(selectedTimezone) {
   myTz = dayjs().tz(selectedTimezone)
   timeZone.innerHTML = `${myTz.$x.$timezone} `
   updateTime()
   const formattedDate = myTz.format('dddd, D MMM, YYYY')
   displayDate.textContent = `${formattedDate}`
 }
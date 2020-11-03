const alarmClock = function() {
  let times = process.argv.splice(2)
  for (let ping of times) {
    if (!isNaN(Number(ping))) {
      let delay = ping*1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay); 
    } 
  }
}
alarmClock()
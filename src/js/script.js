document.addEventListener('DOMContentLoaded', function() {
  // Specify the target date
  const targetDate = new Date('2024-06-22');

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = targetDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const daysUntilTargetDate = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Set the number of days as the innerHTML of the element with id "day-count"
  document.getElementById('day-count').innerHTML = daysUntilTargetDate;
});

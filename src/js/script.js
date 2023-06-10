const imageList = [
    "IMG_2910.JPG",
    "IMG_3812.JPG",
    "IMG_4340.png",
    "IMG_4515.JPG",
    "IMG_4860.JPG",
    "IMG_5352.JPG",
    "IMG_5977.JPG",
    "IMG_6448.png",
    "IMG_6959.JPG",
    "IMG_7256.png",
    "IMG_8084.png",
    "IMG_8758.png",
    "IMG_9179.png",
    "IMG_2933.JPG",
    "IMG_4193.png",
    "IMG_4406.png",
    "IMG_4697.JPG",
    "IMG_4991.JPG",
    "IMG_5392.png",
    "IMG_6191.png",
    "IMG_6565.png",
    "IMG_7060.png",
    "IMG_7411.png",
    "IMG_8334.png",
    "IMG_8866.png",
    "IMG_9185.png",
    "IMG_3124.JPG",
    "IMG_4246.JPG",
    "IMG_4483.png",
    "IMG_4771.png",
    "IMG_5026.JPG",
    "IMG_5824.JPG",
    "IMG_6348.JPG",
    "IMG_6647.png",
    "IMG_7247.png",
    "IMG_7709.png",
    "IMG_8665.png",
    "IMG_9160.png"
];

function dayOfYear(date) {
    // Get the day of the year
    const startOfYear = new Date(date.getFullYear(), 0, 0); // Get the first day of the year
    const diffMilliseconds = date - startOfYear;
    const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

    return diffDays;
}

function setImageByOffset(offset) {
  const image = imageList[offset];

  document.getElementById('cute-pic').src = 'img/jackieandzach/' + image;
}

function setImage(currentDate) {
  const day = dayOfYear(currentDate);
  const offset = day % imageList.length;

  setImageByOffset(offset);
}

function setDaysUntilWedding(currentDate) {
  // Specify the target date
  const targetDate = new Date('2024-06-22');

  // Calculate the time difference in milliseconds
  const timeDiff = targetDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const daysUntilTargetDate = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Set the number of days as the innerHTML of the element with id "day-count"
  document.getElementById('day-count').innerHTML = daysUntilTargetDate;
}
//
//var curOffset = 0;
//
//function rotateImage() {
//  curOffset += 1;
//  curOffset = curOffset % imageList.length;
//
//  setImageByOffset(curOffset);
//}

document.addEventListener('DOMContentLoaded', function() {
  // Get the current date
  const currentDate = new Date();

  setDaysUntilWedding(currentDate);

//  setInterval(rotateImage, 1000);
  setImage(currentDate);
});

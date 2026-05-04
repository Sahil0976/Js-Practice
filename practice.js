// Started code from here

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334, 5446];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];


function mean(viewsArray) {
  let totalViews = 0;

  for (let i = 0; i < viewsArray.length; i++) {
    totalViews += viewsArray[i];
  }
  return totalViews / viewsArray.length;
}

function median(viewsArray) {
  let sortedStats = viewsArray.sort(function(a, b) {
    return a - b;
  })

  if (viewsArray.length % 2 == 0) {
    let arrayFirstDigit = (sortedStats.length / 2) - 1;
    let arraySecondnDigit = sortedStats.length / 2;
    let middleIndex = (sortedStats[arrayFirstDigit] + sortedStats[arraySecondnDigit]) / 2
    return middleIndex
  }
  else {
    let middleIndex = Math.floor(sortedStats.length / 2)
    middleIndex = sortedStats[middleIndex]
    return middleIndex
  }
}

function consoleValues() {
  console.log("TikTok");
  console.log("Mean: " + mean(recentTikTokViews));
  console.log("Median: " + median(recentTikTokViews));
  console.log("\n");

  console.log("Instagram");
  console.log("Mean: " + mean(recentInstagramViews));
  console.log("Median: " + median(recentInstagramViews));
  console.log("\n");

  console.log("YouTube");
  console.log("Mean: " + mean(recentYouTubeViews));
  console.log("Median: " + median(recentYouTubeViews));
  console.log("\n");
}

consoleValues();






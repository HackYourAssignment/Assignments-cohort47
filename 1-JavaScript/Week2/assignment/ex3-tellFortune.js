

function selectRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function tellFortune(numKidsArray, partnerNamesArray, locationsArray, jobTitlesArray) {
  const numKidsResult = selectRandomly(numKidsArray);
  const partnerNameResult = selectRandomly(partnerNamesArray);
  const locationResult = selectRandomly(locationsArray);
  const jobTitleResult = selectRandomly(jobTitlesArray);

  return `You will be a ${jobTitleResult} in ${locationResult}, married to ${partnerNameResult} with ${numKidsResult} kids.`;
}


function main() {
  const numKids = [ 'one  ' , 'two ' , 'three ' , 'four ' , 'five'
    
  ];

  const partnerNames = [
    'Noah' , 'Mia' ,'Ava' , 'Lily' , 'Emma'
    
  ];

  const locations = [
    'Japan' , 'Australia' ,'Germany' , 'Canada' , 'United States'
  ];

  const jobTitles = [
    'Event Planner' , 'Content Writer' ,'Project Manager' , 'Graphic Designer' , 'Data Scientist'
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}


// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;

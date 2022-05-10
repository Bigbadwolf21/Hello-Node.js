const room = "billiards room";
const suspect = "Mr. Parkes"; 

let weapon = "";
let solved = false;




if (room === 'ballroom') {
    weapon = 'poison';
    // Mr. Kalehoff was present in the ballroom at the time of the murder
    if (suspect === "Mr. Kalehoff")
      solved = true;
  
  } else if (room === 'gallery') {
      weapon = 'trophy';
      // Ms. Van Cleve was present in the gallery at the time of the murder
      if(suspect==="Ms. Van Cleve") 
          solved = true;
  } else if (room === 'billiards room') {
      weapon = 'pool stick';
      // Mrs. Sparr was present in the billiards room at the time of the murder
      if(suspect==="Mrs. Sparr") 
          solved = true;
  } else {
      weapon = 'knife';
      // Mr. Parkes was present in the dining room at the time of the murder
      if(suspect==="Mr. Parkes") 
          solved = true;
  }
  
  // The code below will run only when solved is true
  if (solved) {
      console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
  } else {
    console.log("The case is not solved!")
  }
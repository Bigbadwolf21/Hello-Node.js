const musicians = 10;

// your code goes here
if (musicians === 1) {
  console.log("solo")
}
else if (musicians === 2) {
  console.log("duet");
}
else if (musicians === 3) {
  console.log("trio");
}
else if (musicians === 4) {
  console.log("quartet");
} 
else if (musicians > 4) {
  console.log("This is a large group");
} else {
  console.log("not a group");
}
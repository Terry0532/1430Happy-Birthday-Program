function button() {
  let input = prompt("today is your birthday? (1 for yes, 2 for no)");
  switch (input) {
    case "1":
      alert("happy birthday!!!");
      break;
    case "2":
      alert("no happy birthday for you today.");
      break;
    default:
      alert("please enter 1 or 2.");
      break;
  }
}

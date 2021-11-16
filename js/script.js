function button() {
  let name = prompt("what's your name?");
  let age = prompt("what's your age?");
  if (age < 50) {
    alert(
      "Hello " + name + ". You are " + age + " years old! You're still young!"
    );
  } else {
    alert("Hello " + name + ". You are " + age + " years old! you're old!");
  }
}

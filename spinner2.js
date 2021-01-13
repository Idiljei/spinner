const animations = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let delay = 0; 

for (let symbol of animations) {
  setTimeout(() => {
    process.stdout.write('\r' + symbol)
  }, delay);

  delay += 50
}

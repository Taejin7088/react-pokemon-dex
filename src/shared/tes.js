const map = new Map([
  ["name", "Pikachu"],
  ["type", "Electric"],
]);
map.set(true, "yes");
map.set("true", "no");

console.log(map.entries());
map.forEach((e, i) => {
  console.log(e, typeof i);
});

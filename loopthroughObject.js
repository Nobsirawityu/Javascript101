const item = { Pass: 75, Pace: 87, Shot: 80 };

buff(item);
function buff(player) {
  for (const key in player) {
    player[key] =
      key.toLocaleLowerCase() == "pace" ? player[key] + 10 : player[key] + 2;
  }
  console.log(player);
}

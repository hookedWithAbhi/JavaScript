let num = 4;

((x) => {
  while (x > 0) {
    console.log(Math.floor(x % 10), "aaaa");
    x = x - 1;
  }
})(num);

var product = [
  "“Be the change that you wish to see in the world.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“So many books, so little time.” ",
  "“Be yourself; everyone else is already taken.”  ",
];

function add() {
  var list = Math.random() * product.length;
  var change = Math.floor(list);
  document.getElementById("demo").innerHTML = product[change];
}

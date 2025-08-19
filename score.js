const score = [
  ["홍길동", 80, 70, 60],
  ["홍길남", 80, 75, 59],
  ["홍길영", 70, 60, 60],
];
function onScore() {
  const tbody = document.getElementById("tbody");
  let tr;
  let td;
  let sum = 0;
  let rank = [];
  for (let i = 0; i <= score.length - 1; i++) {
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.innerText = i;
    tr.append(td);
    for (let j = 0; j <= score[i].length - 1; j++) {
      td = document.createElement("td");
      td.innerText = score[i][j];
      if (j > 0) {
        sum += score[i][j];
      }
      tr.append(td);
    }
    td = document.createElement("td");
    td.innerText = sum;
    rank.push(sum);
    rank.sort((a, b) => b - a);
    tr.append(td);
    td = document.createElement("td");
    td.innerText = (sum / (score[i].length - 1)).toFixed(1);
    tr.append(td);

    console.log(rank);
    td = document.createElement("td");
    td.innerText = rank.indexOf(sum)+1;
    tr.append(td);

    sum = 0;
    tbody.append(tr);
  }
}

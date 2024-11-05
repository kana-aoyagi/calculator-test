//DOMが完全に読み込まれてから指定した処理を実行
document.addEventListener("DOMContentLoaded", () => {
  //displayという変数にdisplayというIDを持つHTML要素を取得
  const display = document.getElementById("display"),
    numbers = document.querySelectorAll(".number"),
    operators = document.querySelectorAll(".operator"),
    equals = document.querySelector(".equals"),
    clear = document.querySelector(".clear");
  //for文（ループ指定した条件を満たす間、繰り返し処理を行う）
  //各numberボタンがクリックされたときにdisplayに追加する設定
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      display.value += this.getAttribute("data-number");
    });
  }
  //+ボタンがクリックされたときdisplayに演算子を追加し、計算式をdisplayに表示
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
      display.value += " " + this.getAttribute("data-operator") + " ";
    });
  }
  //equalsボタンにクリックイベントを追加。クリックされたときにdisplayの内容を計算して結果を表示する処理
  //eval()は文字列として書かれた数式や式を計算してその結果を返す
  equals.addEventListener("click", function () {
    display.value = eval(display.value);
  });
  //clearボタンにクリックイベントを追加し、クリックされたときにdisplayをクリア（空にする）する処理
  clear.addEventListener("click", function () {
    display.value = "";
  });
});

tableau.extensions.initializeAsync().then(() => {
  console.log('I have been initialized!!')
});

function clickBtn1(){
  const t1 = document.form1.text1.value;
  document.getElementById("span1").textContent = t1;
}
function clickBtn2(){
  document.getElementById("span1").textContent = "";
}

function SendToTableau() {
  // let dashboard = tableau.extensions.dashboardContent.dashboard;
  // ここに何を書けばよいかわからない。。
}

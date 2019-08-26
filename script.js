tableau.extensions.initializeAsync().then(() => {
  console.log('I have been initialized!!')
});

function SendToTableau() {
  target = document.getElementById("output");
  target.innerText = document.forms.form1.textBox1.value;
  // let dashboard = tableau.extensions.dashboardContent.dashboard;
  // ここに何を書けばよいかわからない。。
}

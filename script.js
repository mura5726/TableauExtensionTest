tableau.extensions.initializeAsync().then(() => {
  console.log('I have been initialized!!')
});

function SendToTableau() {
  let dashboard = tableau.extensions.dashboardContent.dashboard;
  // ここに何を書けばよいかわからない。。
}

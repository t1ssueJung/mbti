// 구글 시트가 열릴 때 상단에 메뉴 생성
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🎈 MBTI 검사')
    .addItem('검사창 열기', 'openSidebar')
    .addToUi();
}

// 시트 내부 우측 사이드바 열기
function openSidebar() {
  var html = HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('주니어 MBTI 검사')
      .setWidth(400);
  SpreadsheetApp.getUi().showSidebar(html);
}

// ★ 추가된 부분: 학생들이 인터넷 링크(URL)로 접속했을 때 큰 화면을 띄워주는 함수
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('주니어 MBTI 검사')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// 데이터를 시트에 기록하는 함수 (사이드바, 웹앱 둘 다 이 함수로 자동 저장됩니다)
function saveMbtiData(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rowData = [
    new Date(),
    data.name,
    data.mbti,
    data.scores.E + "%", data.scores.I + "%",
    data.scores.S + "%", data.scores.N + "%",
    data.scores.T + "%", data.scores.F + "%",
    data.scores.J + "%", data.scores.P + "%"
  ];
  sheet.appendRow(rowData);
  return "success";
}

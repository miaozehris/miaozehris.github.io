// 禁止右鍵選單
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// 禁止選字（備援）
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

// 禁止複製
document.addEventListener("copy", function (e) {
  e.preventDefault();
  alert("蜉蝣軍密報禁止傳閱");
});

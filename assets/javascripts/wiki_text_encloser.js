(() => {
  if (typeof jsToolBar === "undefined") return;

  const initTextEnclosingEnhancer = {
    type: "init_wiki_text_encloser",
  };

  jsToolBar.prototype.elements["wiki_text_encloser"] =
    initTextEnclosingEnhancer;

  const targetStartKeys = "!\"#$%'(`{[</\\_~";
  const targetEndKeys = "!\"#$%')`}]>/\\_~";

  jsToolBar.prototype.init_wiki_text_encloser = function () {
    const jsToolBarInstance = this;
    jsToolBarInstance.textarea.addEventListener("keydown", (e) => {
      if (e.target.selectionStart === e.target.selectionEnd) return;

      const targetKeyIndex = targetStartKeys.indexOf(e.key);
      if (targetKeyIndex === -1) return;

      e.preventDefault();
      const startKey = targetStartKeys[targetKeyIndex];
      const endKey = targetEndKeys[targetKeyIndex];
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const beforeSelection = e.target.value.substring(0, start);
      const afterSelection = e.target.value.substring(end);
      const selection = e.target.value.substring(start, end);

      e.target.value =
        beforeSelection + startKey + selection + endKey + afterSelection;

      e.target.selectionStart = start;
      e.target.selectionEnd = end + 2;
    });
  };
})();

(() => {
  if (typeof jsToolBar === "undefined") return;

  const initialized = new WeakSet();
  const startSymbols = Array.from(WikiTextEncloser.settings.targetStartSymbols);
  const endSymbols = Array.from(WikiTextEncloser.settings.targetEndSymbols);

  jsToolBar.prototype.elements.wiki_text_encloser = {
    type: "init_wiki_text_encloser",
  };

  jsToolBar.prototype.init_wiki_text_encloser = function () {
    const textarea = this.textarea;
    if (initialized.has(textarea)) return;
    initialized.add(textarea);

    textarea.addEventListener("keydown", (event) => {
      if (event.defaultPrevented || event.isComposing || event.ctrlKey || event.metaKey || event.altKey || textarea.readOnly || textarea.disabled) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      if (start === end) return;

      const index = startSymbols.indexOf(event.key);
      if (index === -1 || !endSymbols[index]) return;

      event.preventDefault();
      const opening = startSymbols[index];
      const closing = endSymbols[index];
      textarea.setRangeText(opening + textarea.value.slice(start, end) + closing, start, end, "select");
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    });
  };
})();

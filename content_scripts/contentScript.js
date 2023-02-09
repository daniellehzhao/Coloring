(() => {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
    
    browser.runtime.onMessage.addListener((message) => {
      if (message.command === "report") {
      } else if (message.command === "reset") {
        console.log("a")
      }
    });

  })();
  
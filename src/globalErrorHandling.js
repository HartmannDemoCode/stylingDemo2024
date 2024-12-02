
  // Global error handler (window.onerror and unhandledrejection)
  function setupGlobalErrorHandlers() {
    window.onerror = (message, source, lineno, colno, error) => {
      console.error("Global error caught:", { message, source, lineno, colno, error, });
      
      setErrorMessage("A global JavaScript error occurred!", error.message);
    };

    //
    window.onunhandledrejection = (event) => {
      console.error("Unhandled promise rejection:", event.reason);
      setErrorMessage("An unhandled promise rejection occurred!", event.reason);
    };
  }
  // Call this setup when the app starts
  setupGlobalErrorHandlers();
  export { setupGlobalErrorHandlers };
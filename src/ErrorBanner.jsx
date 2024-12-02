function ErrorBanner({ errorMessage }) {
  return (
    errorMessage && (
      <div style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
        <strong>Error:</strong> {errorMessage}
      </div>
    )
  );
}

export default ErrorBanner;

export const logEvent = (event, data) => {
  const log = {
    timestamp: new Date().toISOString(),
    event,
    data,
  };

  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(log);
  localStorage.setItem("logs", JSON.stringify(logs));
};

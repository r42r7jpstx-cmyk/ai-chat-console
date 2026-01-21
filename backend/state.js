export const sessions = new Map();

export function getSession(from) {
  if (!sessions.has(from)) {
    sessions.set(from, {
      aiEnabled: true,
      style: "professional",
      delay: 2
    });
  }
  return sessions.get(from);
}



const API_URL = "http://localhost:8000/api";

export async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(API_URL + url, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });

  const data = await res.json();

  // 🔥 penting buat frontend
  return {
    status: res.status,
    ok: res.ok,
    data,
  };
}

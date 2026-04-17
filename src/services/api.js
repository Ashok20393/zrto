export async function getUsage() {

  const res = await fetch("http://127.0.0.1:8000/api/usage", {
    headers: {
      token: localStorage.getItem("token")
    }
  });

  return res.json();
}

export const getProtectedData = async () => {
  const res = await fetch("http://127.0.0.1:8000/protected", {
    method: "GET",
    credentials: "include", // 🔥 important
  });

  return res.json();
};
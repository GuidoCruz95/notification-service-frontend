const API_BASE_URL = "http://127.0.0.1:8000/notification-service/";

export const fetchAPI = async (endpoint, method = "GET", data = null) => {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);
    if (!response.ok) {
      throw new Error("There was an error doing the request");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

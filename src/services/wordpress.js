const API_URL = "https://ispl.lk/wp-json/wp/v2";

export async function getProjects() {
    const response = await fetch(`${API_URL}/projects`);

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    return response.json();
}
export async function getIndustry() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Allow-Origin', '*');
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

    const response = await fetch(`http://3.65.149.62/test-api/contacts/industries`, {
        method: 'GET',
        headers,
    });

    const { data } = await response.json();
    return data;
}
async function fetchData() {
    try {
        const response = await fetch('/data.json');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export { fetchData };

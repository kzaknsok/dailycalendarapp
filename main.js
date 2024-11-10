import { fetchData } from './utils/fetchData.js';
import { displayComponent } from './utils/displayComponent.js';
import { initializeSelect } from './utils/initializeSelect.js';

const now = new Date();
const jstDate = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    day: 'numeric'
}).format(now);
const day = parseInt(jstDate);

console.log("取得した日付:", day);

async function fetchDataAndDisplay() {
    const jsonData = await fetchData();
    const container = document.getElementById('components-container');
    const select = document.getElementById('components-select');
    initializeSelect(select, jsonData, day, container, displayComponent);
}

fetchDataAndDisplay();

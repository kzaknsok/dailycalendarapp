function initializeSelect(select, jsonData, day, container, displayComponent) {
    // プレースホルダー生成
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = "表示したい日付を選択してください";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    let initialItemDisplayed = false;
    jsonData.forEach(item => {
        if (item.id === day && !initialItemDisplayed) {
            displayComponent(container, item);
            initialItemDisplayed = true;
            console.log("初期表示アイテム:", item);
        } else {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = `${item.id}日`;
            select.appendChild(option);
        }
    });

    if (!initialItemDisplayed) {
        const errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.innerHTML = `
            <h3>表示したいカレンダーを選択してください</h3>
        `;
        container.appendChild(errorDiv);
        console.warn("指定の日付に一致するアイテムがありません。");
    }

    select.addEventListener('change', (event) => {
        const selectedId = parseInt(event.target.value);
        const selectedItem = jsonData.find(item => item.id === selectedId);
        if (selectedItem) {
            displayComponent(container, selectedItem);
            // エラーメッセージを削除
            const errorDiv = document.getElementById('error-message');
            if (errorDiv) {
                errorDiv.remove();
            }
        }
    });
}

export { initializeSelect };

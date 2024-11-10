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

        // インデックス0　=> つまりプレースホルダーをセレクトする指示
        select.selectedIndex = 0;
    });

    // 選択後もう一度プレースホルダー
    container.addEventListener('click', () => {
        select.selectedIndex = 0;
        container.innerHTML = '';
    });

    // document全体のクリックイベントを監視
    document.addEventListener('click', (event) => {
        if (!select.contains(event.target) && !container.contains(event.target)) {
            container.innerHTML = ''; // コンテナの内容をクリア
            select.selectedIndex = 0; // プレースホルダーを再選択

            // エラーメッセージを表示
            const errorDiv = document.createElement('div');
            errorDiv.id = 'error-message';
            errorDiv.innerHTML = `
                <br>
                <p style="font-size: 1.1rem;">表示したいカレンダーを選択してください</p>
                <br>
            `;
            container.appendChild(errorDiv);
        }
    });
}

export { initializeSelect };

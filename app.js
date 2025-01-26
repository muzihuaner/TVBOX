document.addEventListener('DOMContentLoaded', function() {
    fetch('sources.json')
        .then(response => response.json())
        .then(data => {
            const sourcesContainer = document.getElementById('sources');
            data.forEach(source => {
                const sourceElement = document.createElement('div');
                sourceElement.className = 'p-4 border rounded-lg bg-gray-50';

                const nameElement = document.createElement('h2');
                nameElement.className = 'text-lg font-semibold';
                nameElement.textContent = source.name;

                const urlElement = document.createElement('p');
                urlElement.className = 'text-gray-600 mt-2';
                urlElement.textContent = source.url;

                const copyButton = document.createElement('button');
                copyButton.className = 'mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
                copyButton.textContent = '复制链接';
                copyButton.addEventListener('click', () => {
                    navigator.clipboard.writeText(source.url).then(() => {
                        alert('链接已复制到剪贴板');
                    });
                });

                sourceElement.appendChild(nameElement);
                sourceElement.appendChild(urlElement);
                sourceElement.appendChild(copyButton);

                sourcesContainer.appendChild(sourceElement);
            });
        })
        .catch(error => console.error('加载源数据失败:', error));
});
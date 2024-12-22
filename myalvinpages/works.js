// 获取文本文件内容并渲染到页面
async function loadNodes() {
    const outputDiv = document.getElementById('output');
    const files = ['dizhi1.txt', 'dizhi2.txt'];
    let allNodes = [];

    try {
        for (const file of files) {
            // 使用 fetch 读取文件内容
            const response = await fetch(file);
            if (!response.ok) throw new Error(`无法加载文件: ${file}`);
            const text = await response.text();

            // 将文本按行分割，合并到 allNodes 数组中
            const nodes = text.split('\n').filter(line => line.trim() !== '');
            allNodes = [...allNodes, ...nodes];
        }

        // 输出所有节点信息
        allNodes.forEach(node => {
            const paragraph = document.createElement('p');
            paragraph.textContent = node;
            outputDiv.appendChild(paragraph);
        });
    } catch (error) {
        console.error('加载文件失败：', error);
        outputDiv.textContent = '加载节点信息失败，请检查文件路径或网络连接。';
    }
}

// 加载节点信息
loadNodes();

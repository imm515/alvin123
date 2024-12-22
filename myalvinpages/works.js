// 获取文本文件内容并渲染到页面
async function loadNodes() {
    const outputDiv = document.getElementById('output');
    const files = ['dizhi1.txt', 'dizhi2.txt'];
    let allNodes = [];

    try {
        // 检查至少有一个文件存在
        const validFiles = [];
        for (const file of files) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    validFiles.push(file);
                }
            } catch (e) {
                // 如果某个文件无法读取，则跳过
            }
        }

        // 如果没有有效文件，抛出错误
        if (validFiles.length === 0) {
            throw new Error('没有找到有效的文件：dizhi1.txt 或 dizhi2.txt');
        }

        // 使用有效文件读取数据
        for (const file of validFiles) {
            const response = await fetch(file);
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

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
            const nodes = text.split('\n')
                .map(line => line.trim())  // 去除每行的多余空格和换行符
                .filter(line => line !== ''); // 过滤空行

            allNodes = [...allNodes, ...nodes];
        }

        // 输出所有节点信息
        const subscriptionLink = generateV2RayNSubscription(allNodes);
        const subscriptionParagraph = document.createElement('p');
        subscriptionParagraph.textContent = `V2RayN 订阅地址: ${subscriptionLink}`;
        outputDiv.appendChild(subscriptionParagraph);

    } catch (error) {
        console.error('加载文件失败：', error);
        outputDiv.textContent = '加载节点信息失败，请检查文件路径或网络连接。';
    }
}

// 生成 V2RayN 可用的订阅链接
function generateV2RayNSubscription(nodes) {
    // 将每个节点信息加入到订阅地址中
    const base64Nodes = nodes.map(node => encodeURIComponent(node)).join('&');
    const subscriptionUrl = `vmess://${base64Nodes}`;
    return subscriptionUrl;
}

// 加载节点信息
loadNodes();

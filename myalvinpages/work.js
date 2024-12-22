// work.js
document.addEventListener('DOMContentLoaded', function() {
    const vmessLink = "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImRvbmd0YWl3YW5nLmNvbVx1ODI4Mlx1NzBCOTEiLA0KICAiYWRkIjogIjQ1LjE1NC4yMDcuOTkiLA0KICAicG9ydCI6ICIxMDAwMSIsDQogICJpZCI6ICIwMDg0YjVkMC04OTY2LTQzOTgtODdmOC1kNWQ4YjY0YWEzNTYiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9";

    // 创建一个 div 元素直接显示订阅链接
    const linkElement = document.createElement('div');
    linkElement.innerText = `V2RayN 订阅链接: v2rayn://${vmessLink}`;

    // 将链接文本插入到 body 中
    document.body.appendChild(linkElement);
});

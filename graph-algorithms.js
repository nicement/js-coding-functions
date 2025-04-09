// 그래프 알고리즘 관련 함수 모음

// 예시: 깊이 우선 탐색
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

module.exports = { dfs };
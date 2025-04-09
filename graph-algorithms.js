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

// 너비 우선 탐색 (Breadth-First Search, BFS)
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

// 다익스트라 알고리즘 (Dijkstra's Algorithm)
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const priorityQueue = [[start, 0]];

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a[1] - b[1]);
    const [currentNode, currentDistance] = priorityQueue.shift();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    for (const [neighbor, weight] of Object.entries(graph[currentNode])) {
      const distance = currentDistance + weight;
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        priorityQueue.push([neighbor, distance]);
      }
    }
  }

  return distances;
}

// 크루스칼 알고리즘 (Kruskal's Algorithm)
function kruskal(edges, numNodes) {
  edges.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: numNodes }, (_, i) => i);

  function find(node) {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  }

  function union(node1, node2) {
    const root1 = find(node1);
    const root2 = find(node2);
    if (root1 !== root2) {
      parent[root2] = root1;
    }
  }

  const mst = [];
  for (const [u, v, weight] of edges) {
    if (find(u) !== find(v)) {
      union(u, v);
      mst.push([u, v, weight]);
    }
  }

  return mst;
}

// 위상 정렬 (Topological Sort)
function topologicalSort(graph) {
  const inDegree = {};
  const queue = [];
  const result = [];

  for (const node in graph) {
    inDegree[node] = 0;
  }

  for (const node in graph) {
    for (const neighbor of graph[node]) {
      inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
    }
  }

  for (const node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

module.exports = { dfs, bfs, dijkstra, kruskal, topologicalSort };

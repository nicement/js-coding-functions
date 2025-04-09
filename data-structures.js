// 자료구조 구현

/**
 * Stack 클래스
 * LIFO(Last In First Out) 구조를 구현합니다.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  // 스택에 요소 추가
  push(element) {
    this.items.push(element);
  }

  // 스택에서 요소 제거
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // 스택의 최상단 요소 확인
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 크기 확인
  size() {
    return this.items.length;
  }

  // 스택 초기화
  clear() {
    this.items = [];
  }
}

/**
 * Queue 클래스
 * FIFO(First In First Out) 구조를 구현합니다.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  // 큐에 요소 추가
  enqueue(element) {
    this.items.push(element);
  }

  // 큐에서 요소 제거
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // 큐의 첫 번째 요소 확인
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.items.length === 0;
  }

  // 큐의 크기 확인
  size() {
    return this.items.length;
  }

  // 큐 초기화
  clear() {
    this.items = [];
  }
}

module.exports = { Stack, Queue };
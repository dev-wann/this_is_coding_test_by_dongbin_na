class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // 트리가 비어있으면 root로 설정
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // 트리 상에서 위치 찾아 삽입
    let current = this.root;
    while (current) {
      if (value < current.value) {
        // 새 value가 current 보다 작은 경우 왼쪽에 삽입
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
        }
      } else if (value > current.value) {
        // 새 value가 current 보다 큰 경우 오른쪽에 삽입
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
        }
      } else {
        // 중복된 값인 경우 무시
        return undefined;
      }
    }
  }

  contains(value) {
    let current = this.root;
    let found = false;
    while (current) {
      if (value === current.value) {
        found = true;
        break;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return found;
  }

  delete(value) {
    if (!this.root) return;

    const deleteNode = (value, node) => {
      if (node === null) return null;

      // 지울 노드 탐색
      if (value < node.value) {
        node.left = deleteNode(value, node.left);
        return node;
      }
      if (value > node.value) {
        node.right = deleteNode(value, node.right);
        return node;
      }

      // 지울 노드를 찾은 경우
      // leaf node인 경우
      if (!node.left && !node.right) {
        return null;
      }
      // child가 하나인 경우
      if (!node.left && node.right) {
        return node.right;
      } else if (node.left && !node.right) {
        return node.left;
      }
      // child가 2개인 경우 (오른쪽 subtree의 가장 작은 값 선택)
      let succ = node.right;
      while (succ.left) {
        succ = succ.left;
      }
      node.value = succ.value;
      node.right = deleteNode(succ.value, node.right);
      return node;
    };
    this.root = deleteNode(value, this.root);
  }

  preorder(callback) {
    const transverse = (node, callback) => {
      if (!node) return;
      callback(node);
      transverse(node.left, callback);
      transverse(node.right, callback);
    };
    transverse(this.root, callback);
  }

  inorder(callback) {
    const transverse = (node, callback) => {
      if (!node) return;
      transverse(node.left, callback);
      callback(node);
      transverse(node.right, callback);
    };
    transverse(this.root, callback);
  }

  postorder(callback) {
    const transverse = (node, callback) => {
      if (!node) return;
      transverse(node.left, callback);
      transverse(node.right, callback);
      callback(node);
    };
    transverse(this.root, callback);
  }

  print(node, depth) {
    if (!node && !depth) {
      node = this.root;
      depth = 0;
    } else if (!node || !depth) {
      return;
    }
    this.print(node.right, depth + 1);
    console.log('    '.repeat(depth) + String(node.value));
    this.print(node.left, depth + 1);
  }
}

// binary search tree 생성
let bst = new BinarySearchTree();
bst.insert(4);
bst.insert(6);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.print();
console.log('----------');

// node 3 삭제
bst.delete(3);
bst.print();
console.log('----------');

// node 2 삭제
bst.delete(2);
bst.print();
console.log('----------');

// 원상복구
bst = new BinarySearchTree();
bst.insert(4);
bst.insert(6);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(3);
bst.insert(7);

// node 4 삭제
bst.delete(4);
bst.print();
console.log('----------');

// 원상복구
bst = new BinarySearchTree();
bst.insert(4);
bst.insert(6);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(3);
bst.insert(7);

// transverse
let result = [];
bst.preorder((node) => {
  result.push(node.value);
});
console.log(`preorder: ${result}`);

result = [];
bst.inorder((node) => {
  result.push(node.value);
});
console.log(`inorder: ${result}`);

result = [];
bst.postorder((node) => {
  result.push(node.value);
});
console.log(`postorder: ${result}`);

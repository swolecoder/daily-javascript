/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let result = [];

  let queue = [];

  queue.push(root);

  while (queue.length) {
    let node = queue.pop();
    if (node) {
      result.push(node.val);
      queue.push(node.right);
      queue.push(node.left);
    } else {
      result.push(null);
    }
  }

  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  //[ 1, 2, null, null, 3, 4, null, null, 5, null, null ]
  // console.log(data)
  if (data.length === 0) {
    return null;
  }

  const deserializeRec = function(nodeList) {
    if (nodeList.length === 0) {
      return null;
    }

    let rootVal = nodeList.shift();
    if (rootVal === null) {
      return null;
    } else {
      let rootNode = new TreeNode(rootVal);
      rootNode.left = deserializeRec(nodeList);
      rootNode.right = deserializeRec(nodeList);
      return rootNode;
    }
  };

  return deserializeRec(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

//Test Input [1,2,3,null,null,4,5]

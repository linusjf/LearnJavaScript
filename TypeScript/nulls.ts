#!/usr/bin/env ts-node
function getId(x: Element) {
  return x.id;
}
// error: Argument of type 'null' is not assignable to parameter of type 'Element'.
// getId(null);
function getID(x: Element | null) {
  return x!.id;
}
// getID(null);
// runtime error
function getIdentity(x: Element | null) {
  if (x) {
    return x.id;
    // In this branch, x's type is Element
  } else {
    return null;
    // In this branch, x's type is null.
  }
}
getIdentity(null);
type ListNode = {
  data: number;
  next?: ListNode;
};
function addNext(node: ListNode) {
  if (node.next === undefined) {
    node.next = { data: 0 };
  }
}
function setNextValue(node: ListNode, value: number) {
  addNext(node);
  // Even though we know `node.next` is defined because we just called `addNext`,
  // TypeScript isn't able to infer this in the line of code below:
  // node.next.data = value;
  // So, we can use the non-null assertion operator, !,
  // to assert that node.next isn't undefined and silence the compiler warning
  node.next!.data = value;
}

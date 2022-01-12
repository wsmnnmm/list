const createNode = (value) => {
    return {
        data: value,
        next: null
    }
}
const appendNode = (list, value) => {
    const Node = {
        data: value,
        next: null
    }
    while (list.next !== null) {
        list = list.next
    }
    list.next = Node
    return Node
}
const removeNode = (list, node) => {
    let x = list
    let p = null
    while (x !== node) {
        p = x
        x = x.next
    }
    p.next = x.next
    return list
}
let list = createNode(10)
const node2 = appendNode(list, 20)
appendNode(list, 30)
console.log(list)
list = removeNode(list, node2)
console.log(list)

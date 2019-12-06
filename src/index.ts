class NumberListNode {
  value:number;
  next: NumberListNode

  constructor(value: number){
    this.value = value
    this.next = undefined
  }
}

class NumberLinkedList {
  private tail: NumberListNode = {value: 0 , next: undefined}
  private head: NumberListNode  = this.tail

  at(index:number) {
    let result: NumberListNode | undefined = this.head.next
    while(index > 0 && result !== undefined) {
      result = result.next
      index--
    }

    if (result === undefined) throw new RangeError()

    return result.value
  }

  append(value: number) {
    this.tail.next = {value : value , next: undefined}
    this.tail = this.tail.next
  }
}

let linkList = new NumberLinkedList()
linkList.append(1)
linkList.append(2)
linkList.append(3)

console.log(linkList.at(2))

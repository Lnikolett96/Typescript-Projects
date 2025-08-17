import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumberCollection([-3, -5, 10, 223, -232, 25, 999, 76, 32])
numbers.sort()
const character = new CharactersCollection('pqxzyrwteafdsa')
character.sort();
const linkedList = new LinkedList()
linkedList.add(10)
linkedList.add(3)
linkedList.add(322)
linkedList.add(2112)
linkedList.sort()
console.log(numbers.data)
console.log(character.data)
linkedList.print()

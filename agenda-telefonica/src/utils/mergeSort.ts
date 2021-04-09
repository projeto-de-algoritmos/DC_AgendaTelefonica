import IContact from '~/interfaces/IContact';

function merge(left: Array<IContact>, right: Array<IContact>, parameter: string): Array<IContact> {
  let arr: Array<IContact> = [];
  const secondParameter: string = parameter === 'name' ? 'phone' : 'name';
  while (left.length && right.length) {
    if (left[0][parameter as 'name' | 'phone'] < right[0][parameter as 'name' | 'phone']) {
      arr.push(left.shift()!);
    } else if (right[0][parameter as 'name' | 'phone'] < left[0][parameter as 'name' | 'phone']) {
      arr.push(right.shift()!);
    } else {
      if(right[0][secondParameter as 'name' | 'phone'] < left[0][secondParameter as 'name' | 'phone']){
        arr.push(right.shift()!);
      }
      else{
        arr.push(left.shift()!);
      }
    }
  }

  // Concatenando os valores restantes
  arr = [...arr, ...left, ...right];
  return arr;
};

function mergeSort(array: Array<IContact>, parameter: string): Array<IContact> {
  const half = array.length / 2;

  // Caso base
  if (array.length <= 1) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left, parameter), mergeSort(array, parameter), parameter);
};






const contacts: Array<IContact> = [
  { name: 'Murilo', phone: '1' },
  { name: 'Gabriel', phone: '2' },
  { name: 'Eliseu', phone: '3' }
];

let contactsFinished = mergeSort(contacts, 'name');

console.log(contactsFinished);

contactsFinished = mergeSort(contactsFinished, 'phone');

console.log(contactsFinished);




export default mergeSort;
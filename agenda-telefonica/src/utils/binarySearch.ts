import IContact from '~/interfaces/IContact';

function binarySearch(array: Array<IContact>, min: number, max: number,search: string, parameter:string): number{
    let aux = array.slice();
    let mid = Math.floor(((max - min) / 2) + min);
    if (max <= min && aux[mid][parameter as 'name' | 'phone'] !== search){
      return -1;
    }
    else if (aux[mid][parameter as 'name' | 'phone'] === search){ 
      return mid;
    }
    else if (aux[mid][parameter as 'name' | 'phone'] < search){
      return binarySearch(aux, mid + 1, max, search, parameter);
    }
    else return binarySearch(aux, min, mid - 1, search, parameter);
};

export default binarySearch;

export interface Book{
  bookISBN: string,
  bookName: string,
  author: string,
  price: number,
  publisher: string
}

export let BOOKS: Book[] = [
  {'bookISBN':'ISBN 999-9-999-99999-9', 'bookName':'PlayAngularJS Version 1', 'author':'someone', 'price':10.00, publisher:'JC PUBLISHER'},
  {'bookISBN':'ISBN 999-9-999-99999-8', 'bookName':'PlayAngularJS Version 2', 'author':'someone2', 'price':11.00, publisher:'JC PUBLISHER'},
  {'bookISBN':'ISBN 999-9-999-99999-7', 'bookName':'PlayAngularJS Version 3', 'author':'someone3', 'price':12.00, publisher:'JC PUBLISHER'},
  {'bookISBN':'ISBN 999-9-999-99999-6', 'bookName':'PlayAngularJS Version 4', 'author':'someone4', 'price':13.00, publisher:'JC PUBLISHER'}];


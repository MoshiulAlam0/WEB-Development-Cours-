/* page count?
100 pages are required to make book1
200 pages are required to make book2
300 pages are required to make book3
*/

function paperRequirement(quantityOfBook1, quantityOfBook2, quantityOfBook3){
    const pageForParBook1 = 100;
    const pageForParBook2 = 200;
    const pageForParBook3 = 300;
    const needPagesForBook1 = quantityOfBook1 * pageForParBook1;
    const needPagesForBook2 = quantityOfBook2 * pageForParBook2;
    const needPagesForBook3 = quantityOfBook3 * pageForParBook3;
    const totalPageForBooks = needPagesForBook1 + needPagesForBook2 + needPagesForBook3;
    return totalPageForBooks;
}

const book1Quantity = 3;
const book2Quantity = 3;
const book3Quantity = 1;
const totalPages = paperRequirement(book1Quantity, book2Quantity, book3Quantity);
console.log('total papers:',totalPages);
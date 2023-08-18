export function numberWithSpaces(number: number | string):string {
    return Math.round(+number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
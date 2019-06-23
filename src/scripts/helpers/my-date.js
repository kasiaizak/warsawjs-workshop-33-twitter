export function myDate(value) {
    let d = null;
    if (!value) {
        d = new Date(value).toLocaleString('pl-PL');
        console.log(d);
    }
    return d;
}

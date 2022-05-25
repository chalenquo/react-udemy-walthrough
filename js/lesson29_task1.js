// Место для первой задачи
function calculateVolumeAndArea(ed) {
    if (Number.isInteger(ed) && ed > 0) {
        return `Объем куба: ${ed * ed * ed}, площадь всей поверхности: ${ed * ed * 6}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

console.log(calculateVolumeAndArea(5))

// Место для второй задачи
function getCoupeNumber(seat) {
    if (seat > 36 || seat === 0) {
        return 'Таких мест в вагоне не существует';
    } else if (!Number.isInteger(seat) || seat < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else {
        return Math.ceil(seat / 4);
    }
}

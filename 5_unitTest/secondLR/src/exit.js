function exit() {
    for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15 ){   //! Эту строку можно изменить
                break;
            }
            console.log(i, j);
        }

    }
}

exit();

module.exports = exit;
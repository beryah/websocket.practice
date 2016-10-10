module.exports = function (client) {
    var arr = getDummies();
    var c = 0;
    setInterval(function () {
        client.emit('updateRooms', arr[c]);
        c = c + 1;
        if (c > (arr.length - 1)) c = 0;
    }, 2000);
};

function getDummies() {
    var result_1 = [
        {
            id: 1,
            name: 'Room A',
            ppl: 4,
            maxPpl: 7,
        },
        {
            id: 2,
            name: 'Room XXX',
            ppl: 15,
            maxPpl: 22,
        },
        {
            id: 3,
            name: '^___^ Y',
            ppl: 6,
            maxPpl: 6,
        },
    ];

    var result_2 = [
        {
            id: 4,
            name: 'Room ABV',
            ppl: 4,
            maxPpl: 7,
        },
        {
            id: 5,
            name: 'BJ4',
            ppl: 15,
            maxPpl: 22,
        },
    ];

    var result_3 = [
        {
            id: 6,
            name: 'GGGGGGGG',
            ppl: 4,
            maxPpl: 7,
        },
        {
            id: 7,
            name: 'yooo',
            ppl: 15,
            maxPpl: 22,
        },
        {
            id: 8,
            name: 'nihaoma',
            ppl: 15,
            maxPpl: 22,
        },
        {
            id: 9,
            name: 'gan',
            ppl: 15,
            maxPpl: 22,
        },
    ];

    return [result_1, result_2, result_3];
}
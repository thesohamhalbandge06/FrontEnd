function pattern(num) {
    for(let row = 1; row <= num; row++) {
        let str = '';
        for(let col = 1;col <= row; col++) {
            str += '*';
        }
        console.log(str);
    }
}

pattern(6);
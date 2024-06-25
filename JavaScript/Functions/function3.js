// multiple parameters without defining

function fun(...values) {
    // ... values represent rest parameters
    console.log(values);
}

fun(10, 20, 30, 40, 50); // [10, 20, 30, 40, 50]
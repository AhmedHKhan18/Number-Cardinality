var input = document.getElementById("input");

function submit() {
    if (input.value == "") {
        alert("Please enter a number");
        return;
    }else if (isNaN(input.value)) {
        alert("Please enter a number");
        return;
    }else {

        var sum = input.value % 2;
        var sum2 = input.value % 5;
        var sum3 = input.value % 10;
        if (sum == 1 && sum2 !== 0 && sum3 !== 0) {
            alert("odd");
        }else if (sum == 0 && sum2 !== 0 && sum3 !== 0) {
            alert("even");
    }else if (sum2 == 0 && sum3 !== 0) {
        alert("five")
    }else {
        alert("zero");
    }
    input.value = "";
}
}
        
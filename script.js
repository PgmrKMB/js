function change() {
    document.getElementById("demo").innerHTML = "하하하";
}
function run(event) {
    //출력방법!
    console.log(event);
    if (event.keyCode ==65) {
        document.body.style.backgroundColor = 'lightblue';
    } else if (event.keyCode ==66) {
        document.body.style.backgroundColor = 'lightgreen';
    }
}
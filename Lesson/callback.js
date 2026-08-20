/**
 * A callback functions is a type of functions that is passed 
 * as an argument of another function which will be 
 * executed later 
 * 
 * Why we need callback functions ? 
 * 
 * We use callback functions in JavaScript to handle asynchronous 
 * operations 
 * 
 */


function x(y) {
    if (true) y();
}

function y() {
    console.log("y is called")
}

x(y);


function download(URL, callback) {
    console.log("Download started")

    setTimeout(() => {
        console.log("Downloading the image from " + URL)
        callback()
    }, 2000)
}

download("https://www.google.com", () => {
    console.log("Download completed")
})
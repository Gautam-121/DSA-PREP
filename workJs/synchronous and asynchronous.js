// synchronous event --> As the name suggest synchronous , that means sequentially
// that means line by line execution can be occured

// asynchrous --> As the name suggest asynchronous , that means asquentially that means process
// can occur parallel , this mean that an operation can occur while another one is still being proceed

console.log("start") // synchronous
console.log("First") // synchronous
console.log("second") // synchronous

setTimeout(() => {
    console.log("My name is Lakhan")
});

console.log("end") // synchronous
console.log("myname") // synchronous


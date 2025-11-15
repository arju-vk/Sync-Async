# Synchronous JavaScript 

    Execution: Code executes sequentially, line by line, from top to bottom. Each operation must complete before the next one begins.


# Asynchronous JavaScript.

    Execution: Allows certain tasks to run in the background without blocking the main thread. The program can continue executing other code while waiting for these asynchronous tasks to complete.

<h3><b>Non-blocking</b></h3>
When an asynchronous operation is initiated, the JavaScript engine offloads it to a browser API (like setTimeout, fetch, or XMLHttpRequest) or Node.js API, and then immediately moves on to execute the next line of code. When the asynchronous task finishes, its result is handled later, typically through callbacks, Promises, or async/await.

<h3><b></u>Use Cases</b></h3>
Ideal for operations like network requests (fetching data from an API), reading/writing files, or timers, where waiting for completion would otherwise freeze the application.

<h3><b>Mechanisms</b></h3>

<b>Callbacks </b>: Functions passed as arguments to other functions, to be executed when the asynchronous operation completes.<br>

<b>Promises</b>: Objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a more structured way to handle asynchronous code compared to nested callbacks (callback hell).<br>

<b>async/await</b>: Syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code, improving readability and maintainability.

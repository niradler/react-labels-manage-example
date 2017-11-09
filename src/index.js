import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './screens/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// exmaple to add spinner and interceptor to fetch ? or we can use axois...
// var interceptor =function(response){
//    console.log('response',response);
//    return response;
// }
// var fetchWithSpinner = function () {
//     var originalFetch = fetch;
//         console.log('spinner start');
//         return originalFetch.apply(this, arguments).then(function(data) {
//             console.log('spinner end');
//             return interceptor(data);
//         });
// };

// var myRequest = new Request('https://jsonplaceholder.typicode.com/posts', { method: 'GET',
//                mode: 'cors',
//                cache: 'default' });
// fetchWithSpinner(myRequest).then(function(response) {
//     if(contentType && contentType.includes("application/json")) {
//       return response.json();
//     }
//     throw new TypeError("Oops, we haven't got JSON!");
//   })
//   .then(function(json) { console.log(json); })
//   .catch(function(error) { console.log(error); });


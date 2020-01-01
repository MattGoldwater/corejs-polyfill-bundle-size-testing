// only import core-js/stable to notice the bundle size difference
// import 'core-js/stable';  
import 'core-js/stable/array/from'; 
import 'core-js/stable/array/flat'; 
import 'core-js/stable/set';        
import 'core-js/stable/promise';    

Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
[1, [2, 3], [4, [5]]].flat(2);                 // => [1, 2, 3, 4, 5]
Promise.resolve(32).then(x => console.log(x)); // => 32

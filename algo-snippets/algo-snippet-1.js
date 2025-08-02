import { testAlgo } from "../utils/testing_framework.js";

function countEvens(n) {
let count = 0;
for(let i = 0; i < n.length; i++) {
    if(n[i] % 2 === 0) count++;
  }
return count;
};

testAlgo(countEvens);

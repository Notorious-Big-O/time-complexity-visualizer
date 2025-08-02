import { testAlgo } from "../utils/datasets.js";

function sortAndRemoveDup(n) {
    const sorted = n.slice().sort((a, b) => a - b);
    const result = [sorted[0]];
    
    for(let i = 1; i < sorted.length; i++) {
        if(sorted[i] !== sorted[i - 1]) {
            result.push(sorted[i]);
        }
    }
    return result;
}

testAlgo(sortAndRemoveDup);

import { countEvens } from "./algo-snippets/countEvens.js";
import { bubbleSort } from "./algo-snippets/bubbleSort.js";
import { sortAndRemoveDup } from "./algo-snippets/sortAndRemoveDup.js";

import {
  testingParamsFactory,
  timeAlgoComplexity,
} from "./utils/testing_framework.js";

import { hardcodedData } from "./data.js";

const testingParams = testingParamsFactory();
testingParams.startingN = 500;
testingParams.endingN = 95500;
testingParams.resolution = 5000;
testingParams.algoFn = bubbleSort;

timeAlgoComplexity(testingParams, (dataPoint) => {
  console.log(`{
    "numberOfInputs":${dataPoint.numberOfInputs},
    "algoDatapoint":${dataPoint.algoDatapoint},
    "log_n":${dataPoint.log_n},
    "n_log_n":${dataPoint.n_log_n},
    "n":${dataPoint.n},
    "n_squared":${dataPoint.n_squared},
    "n_cubed":${dataPoint.n_qubed},
    "exponential":${dataPoint.exponential},
    },`);
});

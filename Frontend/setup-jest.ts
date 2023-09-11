import 'jest-preset-angular/setup-jest';
import type {Config} from 'jest';


// module.exports = {    
//     "reporters": [
//       "default", ["<rootDir>/jest/custom-reporter.js", {} ]
//     ]
//   };

const config: Config = {
    verbose: true,
    // "reporters": [
    //   "default", ["<rootDir>/jest/custom-reporter.js", {} ]
    // ]
  };
  
  export default config;
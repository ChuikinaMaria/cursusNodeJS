//import { characters, greet } from './characters.mjs';

//import * as char from './characters.mjs';
//import defaultExport from './characters.mjs';

//import defaultExport, { characters, greet } from './characters.mjs';

//import defaultExport, * as char from './characters.mjs';

import defaultExport, { characters, greet as hello } from './characters.mjs'


// for (const c of char.characters) {
//     char.greet(c);
// }

for (const c of characters) {
    hello(c);
}


defaultExport();
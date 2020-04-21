const fs = require('fs');
const darkTheme = require('./dark');

fs.writeFileSync('../themes/grand-budapest-dark.json', JSON.stringify(darkTheme, null, 2));

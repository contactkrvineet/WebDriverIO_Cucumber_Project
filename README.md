
install local dependency
-----------------------
npm i

VS setting
--------
Cucumberautocomplete ->Edit and add
"cucumberautocomplete.steps": [
        "features/step-definitions/steps.js"
    ],

When needed to run specific feature file 
-----------------------
wdio.conf

specs: [
     //   './features/**/*.feature',
        './features/teamB.feature'
    ],
Execution 
---------
npx wdio run ./wdio.conf.js
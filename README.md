## install local dependency

npm i

## VS setting

Cucumberautocomplete ->Edit and add
"cucumberautocomplete.steps": [
"features/step-definitions/steps.js"
],

## When needed to run specific feature file changing the configuration

wdio.conf

specs: [
// './features/**/*.feature',
'./features/teamB.feature'
],

Execution

---

// Consider two team A and B , B has to run some specific URL configured in feature files

1. npx wdio run ./wdio.conf.js (for all the feature file )
2. npx wdio run ./wdio_TeamA.conf.js (for any specific team A )
3. npx wdio run ./wdio_TeamB.conf.js (for any specific team B )

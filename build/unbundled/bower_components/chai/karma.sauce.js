var version=require("./package.json").version,ts=(new Date).getTime();module.exports=function(e){var s;try{s=require("./test/auth/index")}catch(e){s={},s.SAUCE_USERNAME=process.env.SAUCE_USERNAME||null,s.SAUCE_ACCESS_KEY=process.env.SAUCE_ACCESS_KEY||null}if(s.SAUCE_USERNAME&&s.SAUCE_ACCESS_KEY&&!process.env.SKIP_SAUCE){var r=process.env.TRAVIS_BRANCH||"local",E=require("./sauce.browsers"),S=Object.keys(E),n=["chaijs_"+version,s.SAUCE_USERNAME+"@"+r],t=process.env.TRAVIS_JOB_NUMBER||ts;process.env.TRAVIS_JOB_NUMBER&&n.push("travis@"+process.env.TRAVIS_JOB_NUMBER),e.browsers=e.browsers.concat(S),e.customLaunchers=E,e.reporters.push("saucelabs"),e.transports=["xhr-polling"],e.sauceLabs={username:s.SAUCE_USERNAME,accessKey:s.SAUCE_ACCESS_KEY,startConnect:!0,tags:n,testName:"ChaiJS",tunnelIdentifier:t}}};
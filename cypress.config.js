const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    ...process.env,
    NODE_ENV:'a',
  },
  e2e: {


    experimentalStudio: true,
    // retries: {
    //   runMode:2,
    //   openMode: 3
    // },
    baseUrl: 'http://eaapp.somee.com/',

    setupNodeEvents(on, config) {
    
      // implement node event listeners here

      // ------
      // Enable this to turn on env options
      // const appUrl = config.env.type || 'tst1';

      // const allUrls = {
      //   tst1: '   ',
      //   tst2: '   ',
      //   dev110: '   ',
      //   dev111: '   ',
      //   dev112: '   ',
      // }
      // config.baseUrl = allUrls[appUrl];
      // return config;
      // --------

      on('after:spec',(spec, results) => {
        if (results && results.video && results.stats.failures === 0){
          fs.unlinkSync(results.video)
        }
      })

    },
  },
});
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/test-spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
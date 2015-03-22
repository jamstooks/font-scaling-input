module.exports = {
  verbose: false,
  plugins: {
    local: {
      disabled: true,
      browsers: ['chrome', 'firefox']
    },
    sauce: {
      disabled: false,
      browsers: [
        {
          name: 'Chrome',
          base: 'SauceLabs',
          browserName: 'chrome',
          platform: 'Windows 8.1',
          version: '41'
        },
        {
          name: 'Firefox',
          base: 'SauceLabs',
          browserName: 'firefox',
          platform: 'Windows 8.1',
          version: '36'
        },
        {
          name: 'Safari',
          base: 'SauceLabs',
          browserName: 'safari',
          platform: 'OS X 10.10',
          version: '8.0'
        },
        {
          name: 'Internet Explorer',
          base: 'SauceLabs',
          browserName: 'internet explorer',
          platform: 'Windows 8.1',
          version: '11'
        }
      ]
    }
  },
};

module.exports = {
  verbose: false,
  plugins: {
    local: {
      disabled: true,
      browsers: ['chrome', 'firefox']
    },
    sauce: {
      disabled: false,
      browsers: ['chrome', 'firefox', 'ie']
    }
  },
};

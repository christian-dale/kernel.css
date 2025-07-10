module.exports = {
	plugins: [
		require('postcss-prefix-selector')({
			prefix: 'ke-',
			transform: (prefix, selector, prefixedSelector) => {
				return selector.replace(/\.(\w[\w-]*)/g, `.${prefix}$1`);
			}
		})
	]
};

module.exports = {
	plugins: {
		"postcss-preset-env": {
			autoprefixer: true,
			stage: 2,
			features: {
				"nesting-rules": true,
				"custom-media-queries": {
					importFrom: "global.css",
				},
				"all-property": false,
				"any-link-pseudo-class": false,
				"custom-properties": false,
				"font-variant-property": false,
				"image-set-function": false,
				"is-pseudo-class": false,
				"logical-properties-and-values": false,
				"not-pseudo-class": false,
				"overflow-property": false,
				"overflow-wrap-property": false,
				"unset-value": false,
			},
		},
	},
};

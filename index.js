const {getOptions} = require("loader-utils");
const validateOptions = require("schema-utils");

const schema = {
	type: "object",
	properties: {
		append: {
			type: "string",
		},
		prepend: {
			type: "string",
		},
	},
};

module.exports = function(source) {
	const options = getOptions(this);

	validateOptions(schema, options, "Example Loader");

	const {append = "", prepend = ""} = options;

	return `${prepend};\n${source};\n${append}`;
}

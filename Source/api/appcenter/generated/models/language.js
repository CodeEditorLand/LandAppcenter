/**
 * Class representing a Language.
 */
class Language {
	/**
	 * Create a Language.
	 * @member {string} [languageName] language's name
	 * @member {number} [count] count current of language
	 * @member {number} [previousCount] count of previous lanugage
	 */
	constructor() {}

	/**
	 * Defines the metadata of Language
	 *
	 * @returns {object} metadata of Language
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Language",
			type: {
				name: "Composite",
				className: "Language",
				modelProperties: {
					languageName: {
						required: false,
						serializedName: "language_name",
						type: {
							name: "String",
						},
					},
					count: {
						required: false,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					previousCount: {
						required: false,
						serializedName: "previous_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = Language;

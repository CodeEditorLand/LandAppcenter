/**
 * Class representing a CrashGroupLanguage.
 */
class CrashGroupLanguage {
	/**
	 * Create a CrashGroupLanguage.
	 * @member {string} [languageName] language name
	 * @member {number} [crashCount] count of languages
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupLanguage
	 *
	 * @returns {object} metadata of CrashGroupLanguage
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupLanguage",
			type: {
				name: "Composite",
				className: "CrashGroupLanguage",
				modelProperties: {
					languageName: {
						required: false,
						serializedName: "language_name",
						type: {
							name: "String",
						},
					},
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupLanguage;

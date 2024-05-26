const models = require("./index");

/**
 * Class representing a CrashGroupLanguages.
 */
class CrashGroupLanguages {
	/**
	 * Create a CrashGroupLanguages.
	 * @member {number} [crashCount]
	 * @member {array} [languages]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupLanguages
	 *
	 * @returns {object} metadata of CrashGroupLanguages
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupLanguages",
			type: {
				name: "Composite",
				className: "CrashGroupLanguages",
				modelProperties: {
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
					languages: {
						required: false,
						serializedName: "languages",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "CrashGroupLanguageElementType",
								type: {
									name: "Composite",
									className: "CrashGroupLanguage",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupLanguages;

/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a AppCrashesInfo.
 */
class AppCrashesInfo {
	/**
	 * Defines the metadata of AppCrashesInfo
	 *
	 * @returns {object} metadata of AppCrashesInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppCrashesInfo",
			type: {
				name: "Composite",
				className: "AppCrashesInfo",
				modelProperties: {
					hasCrashes: {
						required: true,
						serializedName: "has_crashes",
						type: {
							name: "Boolean",
						},
					},
					features: {
						required: true,
						serializedName: "features",
						type: {
							name: "Composite",
							className: "AppFeatures",
						},
					},
				},
			},
		};
	}
}

module.exports = AppCrashesInfo;

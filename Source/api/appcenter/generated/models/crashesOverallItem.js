const models = require("./index");

/**
 * Class representing a CrashesOverallItem.
 */
class CrashesOverallItem {
	/**
	 * Create a CrashesOverallItem.
	 * @member {string} [crashGroupId]
	 * @member {string} [appVersion]
	 * @member {object} [overall]
	 * @member {number} [overall.crashCount]
	 * @member {number} [overall.deviceCount]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashesOverallItem
	 *
	 * @returns {object} metadata of CrashesOverallItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashesOverallItem",
			type: {
				name: "Composite",
				className: "CrashesOverallItem",
				modelProperties: {
					crashGroupId: {
						required: false,
						serializedName: "crash_group_id",
						type: {
							name: "String",
						},
					},
					appVersion: {
						required: false,
						serializedName: "app_version",
						type: {
							name: "String",
						},
					},
					overall: {
						required: false,
						serializedName: "overall",
						type: {
							name: "Composite",
							className: "CrashOverall",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashesOverallItem;

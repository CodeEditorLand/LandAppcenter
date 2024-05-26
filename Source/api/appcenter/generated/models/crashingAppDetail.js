/**
 * Class representing a CrashingAppDetail.
 */
class CrashingAppDetail {
	/**
	 * Create a CrashingAppDetail.
	 * @member {string} [appId] application identifier
	 * @member {string} [appVersion] application version
	 * @member {string} [crashGroupId] crash group identifier
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashingAppDetail
	 *
	 * @returns {object} metadata of CrashingAppDetail
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashingAppDetail",
			type: {
				name: "Composite",
				className: "CrashingAppDetail",
				modelProperties: {
					appId: {
						required: false,
						serializedName: "appId",
						type: {
							name: "String",
						},
					},
					appVersion: {
						required: false,
						serializedName: "appVersion",
						type: {
							name: "String",
						},
					},
					crashGroupId: {
						required: false,
						serializedName: "crashGroupId",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashingAppDetail;

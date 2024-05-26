const models = require("./index");

/**
 * grouped by missing symbols crashes response object
 *
 */
class MissingSymbolCrashGroupsResponse {
	/**
	 * Create a MissingSymbolCrashGroupsResponse.
	 * @member {number} totalCrashCount total number of cashes for all the groups
	 * @member {array} groups list of crash groups formed by missing symbols
	 * combination
	 */
	constructor() {}

	/**
	 * Defines the metadata of MissingSymbolCrashGroupsResponse
	 *
	 * @returns {object} metadata of MissingSymbolCrashGroupsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "MissingSymbolCrashGroupsResponse",
			type: {
				name: "Composite",
				className: "MissingSymbolCrashGroupsResponse",
				modelProperties: {
					totalCrashCount: {
						required: true,
						serializedName: "total_crash_count",
						type: {
							name: "Number",
						},
					},
					groups: {
						required: true,
						serializedName: "groups",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"MissingSymbolCrashGroupElementType",
								type: {
									name: "Composite",
									className: "MissingSymbolCrashGroup",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = MissingSymbolCrashGroupsResponse;

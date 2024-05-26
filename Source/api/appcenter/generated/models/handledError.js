/**
 * Class representing a HandledError.
 */
class HandledError {
	/**
	 * Create a HandledError.
	 * @member {string} [errorId]
	 * @member {date} [timestamp]
	 * @member {string} [deviceName]
	 * @member {string} [osVersion]
	 * @member {string} [osType]
	 * @member {string} [country]
	 * @member {string} [language]
	 */
	constructor() {}

	/**
	 * Defines the metadata of HandledError
	 *
	 * @returns {object} metadata of HandledError
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "HandledError",
			type: {
				name: "Composite",
				className: "HandledError",
				modelProperties: {
					errorId: {
						required: false,
						serializedName: "errorId",
						type: {
							name: "String",
						},
					},
					timestamp: {
						required: false,
						serializedName: "timestamp",
						type: {
							name: "DateTime",
						},
					},
					deviceName: {
						required: false,
						serializedName: "deviceName",
						type: {
							name: "String",
						},
					},
					osVersion: {
						required: false,
						serializedName: "osVersion",
						type: {
							name: "String",
						},
					},
					osType: {
						required: false,
						serializedName: "osType",
						type: {
							name: "String",
						},
					},
					country: {
						required: false,
						serializedName: "country",
						type: {
							name: "String",
						},
					},
					language: {
						required: false,
						serializedName: "language",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = HandledError;

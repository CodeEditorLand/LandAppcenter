/**
 * Status Data from store
 *
 */
class StatusData {
	/**
	 * Create a StatusData.
	 * @member {string} [status] status from store
	 * @member {string} [storetype] store type
	 * @member {string} [track] track information from store
	 * @member {string} [version] version of the app from store
	 */
	constructor() {}

	/**
	 * Defines the metadata of StatusData
	 *
	 * @returns {object} metadata of StatusData
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StatusData",
			type: {
				name: "Composite",
				className: "StatusData",
				modelProperties: {
					status: {
						required: false,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
					storetype: {
						required: false,
						serializedName: "storetype",
						type: {
							name: "String",
						},
					},
					track: {
						required: false,
						serializedName: "track",
						type: {
							name: "String",
						},
					},
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = StatusData;

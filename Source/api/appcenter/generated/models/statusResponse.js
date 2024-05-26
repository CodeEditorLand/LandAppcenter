/**
 * Class representing a StatusResponse.
 */
class StatusResponse {
	/**
	 * Create a StatusResponse.
	 * @member {string} status
	 */
	constructor() {}

	/**
	 * Defines the metadata of StatusResponse
	 *
	 * @returns {object} metadata of StatusResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StatusResponse",
			type: {
				name: "Composite",
				className: "StatusResponse",
				modelProperties: {
					status: {
						required: true,
						serializedName: "status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = StatusResponse;

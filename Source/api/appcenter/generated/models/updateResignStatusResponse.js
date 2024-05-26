/**
 * URL that can be used to check the status of the update devices operation and
 * the updated profiles.
 *
 */
class UpdateResignStatusResponse {
	/**
	 * Create a UpdateResignStatusResponse.
	 * @member {string} status The status.
	 */
	constructor() {}

	/**
	 * Defines the metadata of UpdateResignStatusResponse
	 *
	 * @returns {object} metadata of UpdateResignStatusResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UpdateResignStatusResponse",
			type: {
				name: "Composite",
				className: "UpdateResignStatusResponse",
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

module.exports = UpdateResignStatusResponse;

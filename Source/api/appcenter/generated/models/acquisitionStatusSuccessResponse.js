/**
 * Class representing a AcquisitionStatusSuccessResponse.
 */
class AcquisitionStatusSuccessResponse {
	/**
	 * Create a AcquisitionStatusSuccessResponse.
	 * @member {string} code The code indicating the status
	 * @member {string} message The message indicating the status
	 */
	constructor() {}

	/**
	 * Defines the metadata of AcquisitionStatusSuccessResponse
	 *
	 * @returns {object} metadata of AcquisitionStatusSuccessResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AcquisitionStatusSuccessResponse",
			type: {
				name: "Composite",
				className: "AcquisitionStatusSuccessResponse",
				modelProperties: {
					code: {
						required: true,
						serializedName: "code",
						type: {
							name: "String",
						},
					},
					message: {
						required: true,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AcquisitionStatusSuccessResponse;

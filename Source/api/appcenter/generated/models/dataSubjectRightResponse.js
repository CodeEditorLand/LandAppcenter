/**
 * Class representing a DataSubjectRightResponse.
 */
class DataSubjectRightResponse {
	/**
	 * Create a DataSubjectRightResponse.
	 * @member {string} token Unique request identifier
	 * @member {string} createdAt ISO 8601 format timestamp of when request was
	 * created.
	 */
	constructor() {}

	/**
	 * Defines the metadata of DataSubjectRightResponse
	 *
	 * @returns {object} metadata of DataSubjectRightResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DataSubjectRightResponse",
			type: {
				name: "Composite",
				className: "DataSubjectRightResponse",
				modelProperties: {
					token: {
						required: true,
						serializedName: "token",
						type: {
							name: "String",
						},
					},
					createdAt: {
						required: true,
						serializedName: "createdAt",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DataSubjectRightResponse;

/**
 * Class representing a OrgNameAvailabilityResponse.
 */
class OrgNameAvailabilityResponse {
	/**
	 * Create a OrgNameAvailabilityResponse.
	 * @member {boolean} available The availability status of the requested org
	 * name
	 * @member {string} name The generated org name
	 */
	constructor() {}

	/**
	 * Defines the metadata of OrgNameAvailabilityResponse
	 *
	 * @returns {object} metadata of OrgNameAvailabilityResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "OrgNameAvailabilityResponse",
			type: {
				name: "Composite",
				className: "OrgNameAvailabilityResponse",
				modelProperties: {
					available: {
						required: true,
						serializedName: "available",
						type: {
							name: "Boolean",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = OrgNameAvailabilityResponse;

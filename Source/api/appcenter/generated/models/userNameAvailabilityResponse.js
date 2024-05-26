/**
 * Class representing a UserNameAvailabilityResponse.
 */
class UserNameAvailabilityResponse {
	/**
	 * Create a UserNameAvailabilityResponse.
	 * @member {boolean} available The availability status of the requested user
	 * name
	 * @member {string} name The requested user name
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserNameAvailabilityResponse
	 *
	 * @returns {object} metadata of UserNameAvailabilityResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserNameAvailabilityResponse",
			type: {
				name: "Composite",
				className: "UserNameAvailabilityResponse",
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

module.exports = UserNameAvailabilityResponse;

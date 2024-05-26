/**
 * Class representing a UserNameUpdateRequest.
 */
class UserNameUpdateRequest {
	/**
	 * Create a UserNameUpdateRequest.
	 * @member {string} [name] The new, unique name that is used to identify.
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserNameUpdateRequest
	 *
	 * @returns {object} metadata of UserNameUpdateRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserNameUpdateRequest",
			type: {
				name: "Composite",
				className: "UserNameUpdateRequest",
				modelProperties: {
					name: {
						required: false,
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

module.exports = UserNameUpdateRequest;

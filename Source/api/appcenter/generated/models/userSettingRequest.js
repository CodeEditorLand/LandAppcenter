/**
 * Class representing a UserSettingRequest.
 */
class UserSettingRequest {
	/**
	 * Create a UserSettingRequest.
	 * @member {string} value The setting value
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserSettingRequest
	 *
	 * @returns {object} metadata of UserSettingRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserSettingRequest",
			type: {
				name: "Composite",
				className: "UserSettingRequest",
				modelProperties: {
					value: {
						required: true,
						serializedName: "value",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UserSettingRequest;

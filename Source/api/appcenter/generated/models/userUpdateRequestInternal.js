/**
 * Class representing a UserUpdateRequestInternal.
 */
class UserUpdateRequestInternal {
	/**
	 * Create a UserUpdateRequestInternal.
	 * @member {string} [displayName] The full name of the user. Might for
	 * example be first and last name
	 * @member {string} [name] The new, unique name that is used to identify.
	 * @member {string} [nextNpsSurveyDate] The date in the future when the user
	 * should be checked again for NPS eligibility
	 * @member {string} [email] The email address for this user
	 */
	constructor() {}

	/**
	 * Defines the metadata of UserUpdateRequestInternal
	 *
	 * @returns {object} metadata of UserUpdateRequestInternal
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UserUpdateRequestInternal",
			type: {
				name: "Composite",
				className: "UserUpdateRequestInternal",
				modelProperties: {
					displayName: {
						required: false,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					nextNpsSurveyDate: {
						required: false,
						serializedName: "next_nps_survey_date",
						type: {
							name: "String",
						},
					},
					email: {
						required: false,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = UserUpdateRequestInternal;

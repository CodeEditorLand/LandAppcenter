/**
 * GooglePlayTestersResponse
 *
 */
class GooglePlayTestersResponse {
	/**
	 * Create a GooglePlayTestersResponse.
	 * @member {string} [tester] email id of Google Groups or URL of the Google+
	 * Communities
	 * @member {string} [type] type of testers i.e Google Groups or Google+
	 * Communities. Possible values include: 'Google Group', 'Google+ Community'
	 */
	constructor() {}

	/**
	 * Defines the metadata of GooglePlayTestersResponse
	 *
	 * @returns {object} metadata of GooglePlayTestersResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "GooglePlayTestersResponse",
			type: {
				name: "Composite",
				className: "GooglePlayTestersResponse",
				modelProperties: {
					tester: {
						required: false,
						serializedName: "tester",
						type: {
							name: "String",
						},
					},
					type: {
						required: false,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = GooglePlayTestersResponse;

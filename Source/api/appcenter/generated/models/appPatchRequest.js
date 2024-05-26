/**
 * Class representing a AppPatchRequest.
 */
class AppPatchRequest {
	/**
	 * Create a AppPatchRequest.
	 * @member {string} [description] A short text describing the app
	 * @member {string} [displayName] The display name of the app
	 * @member {string} [name] The name of the app used in URLs
	 * @member {string} [iconUrl] The string representation of the URL pointing
	 * to the app's icon
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppPatchRequest
	 *
	 * @returns {object} metadata of AppPatchRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppPatchRequest",
			type: {
				name: "Composite",
				className: "AppPatchRequest",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
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
					iconUrl: {
						required: false,
						serializedName: "icon_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppPatchRequest;

/**
 * Class representing a AppRequest.
 */
class AppRequest {
	/**
	 * Create a AppRequest.
	 * @member {string} [description] A short text describing the app
	 * @member {string} displayName The descriptive name of the app. This can
	 * contain any characters
	 * @member {string} [name] The name of the app used in URLs
	 * @member {string} os The OS the app will be running on. Possible values
	 * include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows'
	 * @member {string} platform The platform of the app. Possible values
	 * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
	 * 'Xamarin'
	 */
	constructor() {}

	/**
	 * Defines the metadata of AppRequest
	 *
	 * @returns {object} metadata of AppRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AppRequest",
			type: {
				name: "Composite",
				className: "AppRequest",
				modelProperties: {
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: true,
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
					os: {
						required: true,
						serializedName: "os",
						type: {
							name: "String",
						},
					},
					platform: {
						required: true,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = AppRequest;

const models = require("./index");

/**
 * Class representing a BasicAppResponse.
 */
class BasicAppResponse {
	/**
	 * Create a BasicAppResponse.
	 * @member {string} id The unique ID (UUID) of the app
	 * @member {string} [description] The description of the app
	 * @member {string} displayName The display name of the app
	 * @member {string} [iconUrl] The string representation of the URL pointing
	 * to the app's icon
	 * @member {string} name The name of the app used in URLs
	 * @member {string} os The OS the app will be running on. Possible values
	 * include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows', 'Custom'
	 * @member {object} owner
	 * @member {string} [owner.id] The unique id (UUID) of the owner
	 * @member {string} [owner.avatarUrl] The avatar URL of the owner
	 * @member {string} [owner.displayName] The owner's display name
	 * @member {string} [owner.email] The owner's email address
	 * @member {string} [owner.name] The unique name that used to identify the
	 * owner
	 * @member {string} [owner.type] The owner type. Can either be 'org' or
	 * 'user'. Possible values include: 'org', 'user'
	 */
	constructor() {}

	/**
	 * Defines the metadata of BasicAppResponse
	 *
	 * @returns {object} metadata of BasicAppResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BasicAppResponse",
			type: {
				name: "Composite",
				className: "BasicAppResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
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
					iconUrl: {
						required: false,
						serializedName: "icon_url",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
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
					owner: {
						required: true,
						serializedName: "owner",
						type: {
							name: "Composite",
							className: "Owner",
						},
					},
				},
			},
		};
	}
}

module.exports = BasicAppResponse;

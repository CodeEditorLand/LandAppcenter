const models = require("./index");

/**
 * Class representing a TesterAppWithReleaseResponse.
 */
class TesterAppWithReleaseResponse {
	/**
	 * Create a TesterAppWithReleaseResponse.
	 * @member {string} [id] The unique ID (UUID) of the app
	 * @member {object} [release]
	 * @member {number} [release.size] The release's size in bytes.
	 * @member {string} [release.installUrl] The href required to install a
	 * release on a mobile device. On iOS devices will be prefixed with
	 * `itms-services://?action=download-manifest&url=`
	 * @member {string} [release.releaseNotes] The release's release notes.
	 * @member {string} [name] The app's name.
	 * @member {string} [displayName] The app's display name.
	 * @member {string} [description] The description of the app
	 * @member {string} [iconUrl] A URL to the app's icon.
	 * @member {string} [os] The app's os.
	 * @member {object} [owner] The information about the app's owner
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
	 * Defines the metadata of TesterAppWithReleaseResponse
	 *
	 * @returns {object} metadata of TesterAppWithReleaseResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TesterAppWithReleaseResponse",
			type: {
				name: "Composite",
				className: "TesterAppWithReleaseResponse",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					release: {
						required: false,
						serializedName: "release",
						type: {
							name: "Composite",
							className: "TesterAppRelease",
						},
					},
					name: {
						required: false,
						serializedName: "name",
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
					description: {
						required: false,
						serializedName: "description",
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
					os: {
						required: false,
						serializedName: "os",
						type: {
							name: "String",
						},
					},
					owner: {
						required: false,
						serializedName: "owner",
						type: {
							name: "Composite",
							className: "TesterAppWithReleaseResponseOwner",
						},
					},
				},
			},
		};
	}
}

module.exports = TesterAppWithReleaseResponse;

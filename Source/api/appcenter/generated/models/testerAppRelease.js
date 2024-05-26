const models = require("./index");

/**
 * Class representing a TesterAppRelease.
 * @extends models['DistributionGroupRelease']
 */
class TesterAppRelease extends models["DistributionGroupRelease"] {
	/**
	 * Create a TesterAppRelease.
	 * @member {number} size The release's size in bytes.
	 * @member {string} [installUrl] The href required to install a release on a
	 * mobile device. On iOS devices will be prefixed with
	 * `itms-services://?action=download-manifest&url=`
	 * @member {string} [releaseNotes] The release's release notes.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of TesterAppRelease
	 *
	 * @returns {object} metadata of TesterAppRelease
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TesterAppRelease",
			type: {
				name: "Composite",
				className: "TesterAppRelease",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "Number",
						},
					},
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					shortVersion: {
						required: false,
						serializedName: "short_version",
						type: {
							name: "String",
						},
					},
					uploadedAt: {
						required: false,
						serializedName: "uploaded_at",
						type: {
							name: "String",
						},
					},
					size: {
						required: true,
						serializedName: "size",
						type: {
							name: "Number",
						},
					},
					installUrl: {
						required: false,
						serializedName: "install_url",
						type: {
							name: "String",
						},
					},
					releaseNotes: {
						required: false,
						serializedName: "release_notes",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = TesterAppRelease;

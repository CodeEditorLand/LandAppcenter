const models = require("./index");

/**
 * Class representing a Deployment.
 */
class Deployment {
	/**
	 * Create a Deployment.
	 * @member {string} [key]
	 * @member {string} name
	 * @member {object} [latestRelease]
	 * @member {string} [latestRelease.label]
	 * @member {string} [latestRelease.packageHash]
	 * @member {string} [latestRelease.blobUrl]
	 * @member {object} [latestRelease.diffPackageMap]
	 * @member {string} [latestRelease.originalDeployment] Set on 'Promote'
	 * @member {string} [latestRelease.originalLabel] Set on 'Promote' and
	 * 'Rollback'
	 * @member {string} [latestRelease.releasedBy]
	 * @member {string} [latestRelease.releaseMethod] The release method is
	 * unknown if unspecified. Possible values include: 'Upload', 'Promote',
	 * 'Rollback'
	 * @member {number} [latestRelease.size]
	 * @member {number} [latestRelease.uploadTime]
	 */
	constructor() {}

	/**
	 * Defines the metadata of Deployment
	 *
	 * @returns {object} metadata of Deployment
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Deployment",
			type: {
				name: "Composite",
				className: "Deployment",
				modelProperties: {
					key: {
						required: false,
						serializedName: "key",
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
					latestRelease: {
						required: false,
						serializedName: "latest_release",
						type: {
							name: "Composite",
							className: "CodePushRelease",
						},
					},
				},
			},
		};
	}
}

module.exports = Deployment;

const models = require("./index");

/**
 * The branch build status
 *
 */
class BranchStatus {
	/**
	 * Create a BranchStatus.
	 * @member {boolean} configured
	 * @member {object} [lastBuild]
	 * @member {number} [lastBuild.id] The build ID
	 * @member {string} [lastBuild.buildNumber] The build number
	 * @member {string} [lastBuild.queueTime] The time the build was queued
	 * @member {string} [lastBuild.startTime] The time the build was started
	 * @member {string} [lastBuild.finishTime] The time the build was finished
	 * @member {string} [lastBuild.lastChangedDate] The time the build status was
	 * last changed
	 * @member {string} [lastBuild.status] The build status
	 * @member {string} [lastBuild.result] The build result
	 * @member {string} [lastBuild.sourceBranch] The source branch name
	 * @member {string} [lastBuild.sourceVersion] The source SHA
	 */
	constructor() {}

	/**
	 * Defines the metadata of BranchStatus
	 *
	 * @returns {object} metadata of BranchStatus
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BranchStatus",
			type: {
				name: "Composite",
				additionalProperties: {
					type: {
						name: "Dictionary",
						value: {
							required: false,
							serializedName: "BranchPropertiesElementType",
							type: {
								name: "Composite",
								className: "BranchProperties",
							},
						},
					},
				},
				className: "BranchStatus",
				modelProperties: {
					configured: {
						required: true,
						serializedName: "configured",
						type: {
							name: "Boolean",
						},
					},
					lastBuild: {
						required: false,
						serializedName: "lastBuild",
						type: {
							name: "Composite",
							className: "Build",
						},
					},
				},
			},
		};
	}
}

module.exports = BranchStatus;

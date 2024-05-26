const models = require("./index");

/**
 * Class representing a XcodeScheme.
 */
class XcodeScheme {
	/**
	 * Create a XcodeScheme.
	 * @member {string} name Scheme name
	 * @member {boolean} hasTestAction Does scheme have a test action?
	 * @member {string} [archiveConfiguration] Build configuration set in Archive
	 * action
	 * @member {object} [archiveProject]
	 * @member {string} [archiveProject.archiveTargetId] The Id of the target to
	 * archive
	 * @member {string} [archiveProject.projectName] The project to archive
	 * container name
	 * @member {string} [archiveProject.projectPath] Full path of the target
	 * project
	 */
	constructor() {}

	/**
	 * Defines the metadata of XcodeScheme
	 *
	 * @returns {object} metadata of XcodeScheme
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XcodeScheme",
			type: {
				name: "Composite",
				className: "XcodeScheme",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					hasTestAction: {
						required: true,
						serializedName: "hasTestAction",
						type: {
							name: "Boolean",
						},
					},
					archiveConfiguration: {
						required: false,
						serializedName: "archiveConfiguration",
						type: {
							name: "String",
						},
					},
					archiveProject: {
						required: false,
						serializedName: "archiveProject",
						type: {
							name: "Composite",
							className: "XcodeArchiveProject",
						},
					},
				},
			},
		};
	}
}

module.exports = XcodeScheme;

/**
 * Class representing a XcodeArchiveProject.
 */
class XcodeArchiveProject {
	/**
	 * Create a XcodeArchiveProject.
	 * @member {string} archiveTargetId The Id of the target to archive
	 * @member {string} projectName The project to archive container name
	 * @member {string} [projectPath] Full path of the target project
	 */
	constructor() {}

	/**
	 * Defines the metadata of XcodeArchiveProject
	 *
	 * @returns {object} metadata of XcodeArchiveProject
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "XcodeArchiveProject",
			type: {
				name: "Composite",
				className: "XcodeArchiveProject",
				modelProperties: {
					archiveTargetId: {
						required: true,
						serializedName: "archiveTargetId",
						type: {
							name: "String",
						},
					},
					projectName: {
						required: true,
						serializedName: "projectName",
						type: {
							name: "String",
						},
					},
					projectPath: {
						required: false,
						serializedName: "projectPath",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = XcodeArchiveProject;

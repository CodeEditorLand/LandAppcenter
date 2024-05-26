/**
 * VSTS project
 *
 */
class VSTSProject {
	/**
	 * Create a VSTSProject.
	 * @member {string} [id] Project id
	 * @member {string} [name] Project name
	 * @member {string} [description] Project description
	 * @member {string} [url] Project URL
	 * @member {string} [state] Project state
	 * @member {string} [visibility] Project visibility
	 */
	constructor() {}

	/**
	 * Defines the metadata of VSTSProject
	 *
	 * @returns {object} metadata of VSTSProject
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "VSTSProject",
			type: {
				name: "Composite",
				className: "VSTSProject",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
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
					description: {
						required: false,
						serializedName: "description",
						type: {
							name: "String",
						},
					},
					url: {
						required: false,
						serializedName: "url",
						type: {
							name: "String",
						},
					},
					state: {
						required: false,
						serializedName: "state",
						type: {
							name: "String",
						},
					},
					visibility: {
						required: false,
						serializedName: "visibility",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = VSTSProject;

const models = require("./index");

/**
 * The branch build core properties
 *
 */
class BranchProperties {
	/**
	 * Create a BranchProperties.
	 * @member {object} [branch]
	 * @member {string} [branch.name] The branch name
	 * @member {object} [branch.commit]
	 * @member {string} [branch.commit.sha] The commit SHA
	 * @member {string} [branch.commit.url] The URL to the commit
	 * @member {boolean} [enabled]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BranchProperties
	 *
	 * @returns {object} metadata of BranchProperties
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BranchProperties",
			type: {
				name: "Composite",
				className: "BranchProperties",
				modelProperties: {
					branch: {
						required: false,
						serializedName: "branch",
						type: {
							name: "Composite",
							className: "Branch",
						},
					},
					enabled: {
						required: false,
						serializedName: "enabled",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = BranchProperties;

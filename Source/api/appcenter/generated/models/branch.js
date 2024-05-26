const models = require("./index");

/**
 * Class representing a Branch.
 */
class Branch {
	/**
	 * Create a Branch.
	 * @member {string} name The branch name
	 * @member {object} commit
	 * @member {string} [commit.sha] The commit SHA
	 * @member {string} [commit.url] The URL to the commit
	 */
	constructor() {}

	/**
	 * Defines the metadata of Branch
	 *
	 * @returns {object} metadata of Branch
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Branch",
			type: {
				name: "Composite",
				className: "Branch",
				modelProperties: {
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					commit: {
						required: true,
						serializedName: "commit",
						type: {
							name: "Composite",
							className: "Commit",
						},
					},
				},
			},
		};
	}
}

module.exports = Branch;

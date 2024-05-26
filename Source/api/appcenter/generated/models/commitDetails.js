const models = require("./index");

/**
 * Class representing a CommitDetails.
 * @extends models['Commit']
 */
class CommitDetails extends models["Commit"] {
	/**
	 * Create a CommitDetails.
	 * @member {object} [commit]
	 * @member {string} [commit.message] Commit message
	 * @member {object} [commit.author]
	 * @member {string} [commit.author.date] Date and time of the commit
	 * @member {string} [commit.author.name] Author name
	 * @member {string} [commit.author.email] Author's email
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of CommitDetails
	 *
	 * @returns {object} metadata of CommitDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CommitDetails",
			type: {
				name: "Composite",
				className: "CommitDetails",
				modelProperties: {
					sha: {
						required: false,
						serializedName: "sha",
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
					commit: {
						required: false,
						serializedName: "commit",
						type: {
							name: "Composite",
							className: "CommitDetailsCommit",
						},
					},
				},
			},
		};
	}
}

module.exports = CommitDetails;

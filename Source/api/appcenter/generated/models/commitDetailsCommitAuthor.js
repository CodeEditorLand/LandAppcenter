/**
 * Class representing a CommitDetailsCommitAuthor.
 */
class CommitDetailsCommitAuthor {
	/**
	 * Create a CommitDetailsCommitAuthor.
	 * @member {string} [date] Date and time of the commit
	 * @member {string} [name] Author name
	 * @member {string} [email] Author's email
	 */
	constructor() {}

	/**
	 * Defines the metadata of CommitDetailsCommitAuthor
	 *
	 * @returns {object} metadata of CommitDetailsCommitAuthor
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CommitDetails_commit_author",
			type: {
				name: "Composite",
				className: "CommitDetailsCommitAuthor",
				modelProperties: {
					date: {
						required: false,
						serializedName: "date",
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
					email: {
						required: false,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = CommitDetailsCommitAuthor;

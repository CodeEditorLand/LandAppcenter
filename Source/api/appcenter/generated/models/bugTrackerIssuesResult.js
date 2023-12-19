/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Returns a list of all issues associated with a repo
 *
 */
class BugTrackerIssuesResult {
	/**
	 * Defines the metadata of BugTrackerIssuesResult
	 *
	 * @returns {object} metadata of BugTrackerIssuesResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BugTrackerIssuesResult",
			type: {
				name: "Composite",
				className: "BugTrackerIssuesResult",
				modelProperties: {
					issues: {
						required: false,
						serializedName: "issues",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"BugTrackerIssueResultElementType",
								type: {
									name: "Composite",
									className: "BugTrackerIssueResult",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = BugTrackerIssuesResult;

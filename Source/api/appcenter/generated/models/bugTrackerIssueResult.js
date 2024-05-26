/**
 * Object returned in response to getting a bug tracker issue related to a
 * crash group id
 *
 */
class BugTrackerIssueResult {
	/**
	 * Create a BugTrackerIssueResult.
	 * @member {string} [id]
	 * @member {string} [url]
	 * @member {string} [title]
	 * @member {string} [bugTrackerType] Possible values include: 'github',
	 * 'vsts', 'jira'
	 * @member {string} [repoName]
	 * @member {string} [mobileCenterId]
	 * @member {string} [eventType]
	 */
	constructor() {}

	/**
	 * Defines the metadata of BugTrackerIssueResult
	 *
	 * @returns {object} metadata of BugTrackerIssueResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BugTrackerIssueResult",
			type: {
				name: "Composite",
				className: "BugTrackerIssueResult",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
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
					title: {
						required: false,
						serializedName: "title",
						type: {
							name: "String",
						},
					},
					bugTrackerType: {
						required: false,
						serializedName: "bug_tracker_type",
						type: {
							name: "String",
						},
					},
					repoName: {
						required: false,
						serializedName: "repo_name",
						type: {
							name: "String",
						},
					},
					mobileCenterId: {
						required: false,
						serializedName: "mobile_center_id",
						type: {
							name: "String",
						},
					},
					eventType: {
						required: false,
						serializedName: "event_type",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = BugTrackerIssueResult;

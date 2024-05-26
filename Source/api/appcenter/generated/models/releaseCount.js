/**
 * Class representing a ReleaseCount.
 */
class ReleaseCount {
	/**
	 * Create a ReleaseCount.
	 * @member {string} releaseId
	 * @member {string} [distributionGroup] Distribution group queried.
	 * @member {number} uniqueCount Count of unique downloads against user id.
	 * @member {number} totalCount Total count of downloads.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseCount
	 *
	 * @returns {object} metadata of ReleaseCount
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseCount",
			type: {
				name: "Composite",
				className: "ReleaseCount",
				modelProperties: {
					releaseId: {
						required: true,
						serializedName: "release_id",
						type: {
							name: "String",
						},
					},
					distributionGroup: {
						required: false,
						serializedName: "distribution_group",
						type: {
							name: "String",
						},
					},
					uniqueCount: {
						required: true,
						serializedName: "unique_count",
						type: {
							name: "Number",
						},
					},
					totalCount: {
						required: true,
						serializedName: "total_count",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseCount;

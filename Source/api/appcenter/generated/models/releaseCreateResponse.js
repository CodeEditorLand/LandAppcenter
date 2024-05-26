/**
 * The response from the release creation API that just contains the created
 * release's distinct id.
 *
 */
class ReleaseCreateResponse {
	/**
	 * Create a ReleaseCreateResponse.
	 * @member {number} releaseDistinctId The distinct ID of the release.
	 */
	constructor() {}

	/**
	 * Defines the metadata of ReleaseCreateResponse
	 *
	 * @returns {object} metadata of ReleaseCreateResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseCreateResponse",
			type: {
				name: "Composite",
				className: "ReleaseCreateResponse",
				modelProperties: {
					releaseDistinctId: {
						required: true,
						serializedName: "release_distinct_id",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseCreateResponse;

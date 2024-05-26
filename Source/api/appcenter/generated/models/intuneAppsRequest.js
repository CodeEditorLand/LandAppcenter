/**
 * IntuneAppsRequest
 *
 */
class IntuneAppsRequest {
	/**
	 * Create a IntuneAppsRequest.
	 * @member {string} [createdMonth] PartitionKey year-month
	 */
	constructor() {}

	/**
	 * Defines the metadata of IntuneAppsRequest
	 *
	 * @returns {object} metadata of IntuneAppsRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "IntuneAppsRequest",
			type: {
				name: "Composite",
				className: "IntuneAppsRequest",
				modelProperties: {
					createdMonth: {
						required: false,
						serializedName: "created_month",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = IntuneAppsRequest;

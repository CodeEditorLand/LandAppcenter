/**
 * Class representing a DistributionGroupResponse.
 */
class DistributionGroupResponse {
	/**
	 * Create a DistributionGroupResponse.
	 * @member {string} id The unique ID of the distribution group
	 * @member {string} name The name of the distribution group used in URLs
	 * @member {string} origin The creation origin of this distribution group.
	 * Possible values include: 'appcenter', 'hockeyapp'
	 * @member {boolean} isPublic Whether the distribution group is public
	 */
	constructor() {}

	/**
	 * Defines the metadata of DistributionGroupResponse
	 *
	 * @returns {object} metadata of DistributionGroupResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionGroupResponse",
			type: {
				name: "Composite",
				className: "DistributionGroupResponse",
				modelProperties: {
					id: {
						required: true,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					name: {
						required: true,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					origin: {
						required: true,
						serializedName: "origin",
						type: {
							name: "String",
						},
					},
					isPublic: {
						required: true,
						serializedName: "is_public",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionGroupResponse;

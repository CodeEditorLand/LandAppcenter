/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * Class representing a DistributionStoreWithoutIsLatest.
 */
class DistributionStoreWithoutIsLatest {
	/**
	 * Defines the metadata of DistributionStoreWithoutIsLatest
	 *
	 * @returns {object} metadata of DistributionStoreWithoutIsLatest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionStoreWithoutIsLatest",
			type: {
				name: "Composite",
				className: "DistributionStoreWithoutIsLatest",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
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
					type: {
						required: false,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
					publishingStatus: {
						required: false,
						serializedName: "publishing_status",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DistributionStoreWithoutIsLatest;

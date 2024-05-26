/**
 * Class representing a DistributionStoreWithoutIsLatest.
 */
class DistributionStoreWithoutIsLatest {
	/**
	 * Create a DistributionStoreWithoutIsLatest.
	 * @member {string} [id] ID identifying a unique distribution store.
	 * @member {string} [name] A name identifying a unique distribution store.
	 * @member {string} [type] type of the distribution store currently stores
	 * type can be intune, googleplay or windows. Possible values include:
	 * 'intune', 'googleplay', 'windows'
	 * @member {string} [publishingStatus] publishing status of the release in
	 * the store.
	 */
	constructor() {}

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

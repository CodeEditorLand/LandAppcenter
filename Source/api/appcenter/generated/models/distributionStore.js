const models = require("./index");

/**
 * Class representing a DistributionStore.
 * @extends models['DestinationId']
 */
class DistributionStore extends models["DestinationId"] {
	/**
	 * Create a DistributionStore.
	 * @member {boolean} [isLatest] Is the containing release the latest one in
	 * this distribution store.
	 * @member {string} [type] type of the distribution store currently stores
	 * type can be intune, googleplay or windows. Possible values include:
	 * 'intune', 'googleplay', 'windows'
	 * @member {string} [publishingStatus] publishing status of the release in
	 * the store.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of DistributionStore
	 *
	 * @returns {object} metadata of DistributionStore
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DistributionStore",
			type: {
				name: "Composite",
				className: "DistributionStore",
				modelProperties: {
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					isLatest: {
						required: false,
						serializedName: "is_latest",
						type: {
							name: "Boolean",
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

module.exports = DistributionStore;

/**
 * Class representing a StoreDestinationDetails.
 */
class StoreDestinationDetails {
	/**
	 * Create a StoreDestinationDetails.
	 * @member {string} [destPublishId] destination ID identifying a unique id in
	 * distribution store.
	 * @member {string} [storeType] type of store. Possible values include:
	 * 'intune', 'windows'
	 * @member {string} [appId] app id of application.
	 */
	constructor() {}

	/**
	 * Defines the metadata of StoreDestinationDetails
	 *
	 * @returns {object} metadata of StoreDestinationDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "StoreDestinationDetails",
			type: {
				name: "Composite",
				className: "StoreDestinationDetails",
				modelProperties: {
					destPublishId: {
						required: false,
						serializedName: "dest_publish_id",
						type: {
							name: "String",
						},
					},
					storeType: {
						required: false,
						serializedName: "store_type",
						type: {
							name: "String",
						},
					},
					appId: {
						required: false,
						serializedName: "appId",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = StoreDestinationDetails;

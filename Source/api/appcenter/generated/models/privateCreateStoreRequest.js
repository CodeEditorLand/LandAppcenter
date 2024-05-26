const models = require("./index");

/**
 * create the store through private API. Used by UI.
 *
 */
class PrivateCreateStoreRequest {
	/**
	 * Create a PrivateCreateStoreRequest.
	 * @member {string} [type] store Type. Possible values include: 'intune',
	 * 'windows'
	 * @member {string} [name] name of the store.
	 * @member {object} [intuneDetails]
	 * @member {object} [intuneDetails.targetAudience]
	 * @member {string} [intuneDetails.targetAudience.name] display name for the
	 * target audience/group
	 * @member {object} [intuneDetails.appCategory]
	 * @member {string} [intuneDetails.appCategory.name] display name for the app
	 * category
	 * @member {string} [intuneDetails.tenantId] tenant id of the intune store
	 */
	constructor() {}

	/**
	 * Defines the metadata of PrivateCreateStoreRequest
	 *
	 * @returns {object} metadata of PrivateCreateStoreRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PrivateCreateStoreRequest",
			type: {
				name: "Composite",
				className: "PrivateCreateStoreRequest",
				modelProperties: {
					type: {
						required: false,
						serializedName: "type",
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
					intuneDetails: {
						required: false,
						serializedName: "intune_details",
						type: {
							name: "Composite",
							className: "PrivateIntuneStoreRequest",
						},
					},
				},
			},
		};
	}
}

module.exports = PrivateCreateStoreRequest;

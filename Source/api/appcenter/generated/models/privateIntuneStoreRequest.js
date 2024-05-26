const models = require("./index");

/**
 * Class representing a PrivateIntuneStoreRequest.
 */
class PrivateIntuneStoreRequest {
	/**
	 * Create a PrivateIntuneStoreRequest.
	 * @member {object} [targetAudience]
	 * @member {string} [targetAudience.name] display name for the target
	 * audience/group
	 * @member {object} [appCategory]
	 * @member {string} [appCategory.name] display name for the app category
	 * @member {string} [tenantId] tenant id of the intune store
	 */
	constructor() {}

	/**
	 * Defines the metadata of PrivateIntuneStoreRequest
	 *
	 * @returns {object} metadata of PrivateIntuneStoreRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PrivateIntuneStoreRequest",
			type: {
				name: "Composite",
				className: "PrivateIntuneStoreRequest",
				modelProperties: {
					targetAudience: {
						required: false,
						serializedName: "target_audience",
						type: {
							name: "Composite",
							className: "IntuneTargetAudience",
						},
					},
					appCategory: {
						required: false,
						serializedName: "app_category",
						type: {
							name: "Composite",
							className: "IntuneAppCategory",
						},
					},
					tenantId: {
						required: false,
						serializedName: "tenant_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = PrivateIntuneStoreRequest;

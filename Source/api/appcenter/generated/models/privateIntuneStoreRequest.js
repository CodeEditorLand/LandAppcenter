/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a PrivateIntuneStoreRequest.
 */
class PrivateIntuneStoreRequest {
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

/**
 * A response from API containing information for a Auto Provisioning Config.
 *
 */
class AutoProvisioningConfigResponse {
	/**
	 * Create a AutoProvisioningConfigResponse.
	 * @member {number} [id] The identifier of the config.
	 * @member {string} [appId] The identifier of the App.
	 * @member {string} [destinationId] The identifier of the destination.
	 * @member {string} [appleDeveloperAccountKey] A key to a secret in
	 * customer-credential-store. apple_developer_account refers to the user's
	 * developer account that is used to log into https://developer.apple.com.
	 * Normally the user's email.
	 * @member {string} [appleDistributionCertificateKey] A key to a secret in
	 * customer-credential-store. distribution_certificate refers to the
	 * cusomer's certificate (that holds the private key) that will be used to
	 * sign the app.
	 * @member {boolean} [allowAutoProvisioning] When *true* enables auto
	 * provisioning
	 */
	constructor() {}

	/**
	 * Defines the metadata of AutoProvisioningConfigResponse
	 *
	 * @returns {object} metadata of AutoProvisioningConfigResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AutoProvisioningConfigResponse",
			type: {
				name: "Composite",
				className: "AutoProvisioningConfigResponse",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "Number",
						},
					},
					appId: {
						required: false,
						serializedName: "app_id",
						type: {
							name: "String",
						},
					},
					destinationId: {
						required: false,
						serializedName: "destination_id",
						type: {
							name: "String",
						},
					},
					appleDeveloperAccountKey: {
						required: false,
						serializedName: "apple_developer_account_key",
						type: {
							name: "String",
						},
					},
					appleDistributionCertificateKey: {
						required: false,
						serializedName: "apple_distribution_certificate_key",
						type: {
							name: "String",
						},
					},
					allowAutoProvisioning: {
						required: false,
						serializedName: "allow_auto_provisioning",
						type: {
							name: "Boolean",
						},
					},
				},
			},
		};
	}
}

module.exports = AutoProvisioningConfigResponse;

/**
 * A request containing information for creating a Auto Provisioning Config.
 *
 */
class AutoProvisioningConfigRequest {
	/**
	 * Create a AutoProvisioningConfigRequest.
	 * @member {string} appleDeveloperAccountKey A key to a secret in
	 * customer-credential-store. apple_developer_account refers to the user's
	 * developer account that is used to log into https://developer.apple.com.
	 * Normally the user's email.
	 * @member {string} appleDistributionCertificateKey A key to a secret in
	 * customer-credential-store. distribution_certificate refers to the
	 * cusomer's certificate (that holds the private key) that will be used to
	 * sign the app.
	 * @member {boolean} allowAutoProvisioning When *true* enables auto
	 * provisioning
	 */
	constructor() {}

	/**
	 * Defines the metadata of AutoProvisioningConfigRequest
	 *
	 * @returns {object} metadata of AutoProvisioningConfigRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "AutoProvisioningConfigRequest",
			type: {
				name: "Composite",
				className: "AutoProvisioningConfigRequest",
				modelProperties: {
					appleDeveloperAccountKey: {
						required: true,
						serializedName: "apple_developer_account_key",
						type: {
							name: "String",
						},
					},
					appleDistributionCertificateKey: {
						required: true,
						serializedName: "apple_distribution_certificate_key",
						type: {
							name: "String",
						},
					},
					allowAutoProvisioning: {
						required: true,
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

module.exports = AutoProvisioningConfigRequest;

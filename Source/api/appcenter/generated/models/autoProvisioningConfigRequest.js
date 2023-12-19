/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * A request containing information for creating a Auto Provisioning Config.
 *
 */
class AutoProvisioningConfigRequest {
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

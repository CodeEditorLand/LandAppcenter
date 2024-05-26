/**
 * Generic notification configuration.
 *
 */
class NotificationConfig {
	/**
	 * Create a NotificationConfig.
	 * @member {string} type Polymorphic Discriminator
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationConfig
	 *
	 * @returns {object} metadata of NotificationConfig
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationConfig",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationConfig",
				className: "NotificationConfig",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationConfig;

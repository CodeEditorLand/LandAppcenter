/**
 * Generic notification configuration result.
 *
 */
class NotificationConfigResult {
	/**
	 * Create a NotificationConfigResult.
	 * @member {string} type Polymorphic Discriminator
	 */
	constructor() {}

	/**
	 * Defines the metadata of NotificationConfigResult
	 *
	 * @returns {object} metadata of NotificationConfigResult
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "NotificationConfigResult",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationConfigResult",
				className: "NotificationConfigResult",
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

module.exports = NotificationConfigResult;

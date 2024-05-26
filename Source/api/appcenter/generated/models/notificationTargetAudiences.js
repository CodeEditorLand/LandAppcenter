const models = require("./index");

/**
 * Notification target audiences.
 *
 * @extends models['NotificationTarget']
 */
class NotificationTargetAudiences extends models["NotificationTarget"] {
	/**
	 * Create a NotificationTargetAudiences.
	 * @member {array} audiences List of target audiences.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationTargetAudiences
	 *
	 * @returns {object} metadata of NotificationTargetAudiences
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "audiences_target",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationTarget",
				className: "NotificationTargetAudiences",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					audiences: {
						required: true,
						serializedName: "audiences",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StringElementType",
								type: {
									name: "String",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = NotificationTargetAudiences;

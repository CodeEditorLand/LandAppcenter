const models = require("./index");

/**
 * Notification target devices. If null, all devices will be
 * targeted(broadcast).
 *
 * @extends models['NotificationTarget']
 */
class NotificationTargetDevices extends models["NotificationTarget"] {
	/**
	 * Create a NotificationTargetDevices.
	 * @member {array} devices List of target devices.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of NotificationTargetDevices
	 *
	 * @returns {object} metadata of NotificationTargetDevices
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "devices_target",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "NotificationTarget",
				className: "NotificationTargetDevices",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					devices: {
						required: true,
						serializedName: "devices",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "UuidElementType",
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

module.exports = NotificationTargetDevices;

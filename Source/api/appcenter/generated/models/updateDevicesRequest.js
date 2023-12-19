/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Information required to publish devices to the Apple Developer account and
 * resign the application.
 *
 */
class UpdateDevicesRequest {
	/**
	 * Defines the metadata of UpdateDevicesRequest
	 *
	 * @returns {object} metadata of UpdateDevicesRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "UpdateDevicesRequest",
			type: {
				name: "Composite",
				className: "UpdateDevicesRequest",
				modelProperties: {
					releaseId: {
						required: false,
						serializedName: "release_id",
						type: {
							name: "Number",
						},
					},
					username: {
						required: false,
						serializedName: "username",
						type: {
							name: "String",
						},
					},
					password: {
						required: false,
						serializedName: "password",
						type: {
							name: "String",
						},
					},
					accountServiceConnectionId: {
						required: false,
						serializedName: "account_service_connection_id",
						type: {
							name: "String",
						},
					},
					p12Base64: {
						required: false,
						serializedName: "p12_base64",
						type: {
							name: "String",
						},
					},
					p12ServiceConnectionId: {
						required: false,
						serializedName: "p12_service_connection_id",
						type: {
							name: "String",
						},
					},
					p12Password: {
						required: false,
						serializedName: "p12_password",
						type: {
							name: "String",
						},
					},
					publishAllDevices: {
						required: false,
						serializedName: "publish_all_devices",
						type: {
							name: "Boolean",
						},
					},
					devices: {
						required: false,
						serializedName: "devices",
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
					destinations: {
						required: false,
						serializedName: "destinations",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"UpdateDevicesRequestDestinationsItemElementType",
								type: {
									name: "Composite",
									className:
										"UpdateDevicesRequestDestinationsItem",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = UpdateDevicesRequest;

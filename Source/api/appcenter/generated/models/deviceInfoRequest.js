/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * The information for a single iOS device
 *
 */
class DeviceInfoRequest {
	/**
	 * Defines the metadata of DeviceInfoRequest
	 *
	 * @returns {object} metadata of DeviceInfoRequest
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "DeviceInfoRequest",
			type: {
				name: "Composite",
				className: "DeviceInfoRequest",
				modelProperties: {
					udid: {
						required: true,
						serializedName: "udid",
						type: {
							name: "String",
						},
					},
					model: {
						required: true,
						serializedName: "model",
						type: {
							name: "String",
						},
					},
					osBuild: {
						required: false,
						serializedName: "os_build",
						type: {
							name: "String",
						},
					},
					osVersion: {
						required: false,
						serializedName: "os_version",
						type: {
							name: "String",
						},
					},
					serial: {
						required: false,
						serializedName: "serial",
						type: {
							name: "String",
						},
					},
					imei: {
						required: false,
						serializedName: "imei",
						type: {
							name: "String",
						},
					},
					ownerId: {
						required: false,
						serializedName: "owner_id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = DeviceInfoRequest;

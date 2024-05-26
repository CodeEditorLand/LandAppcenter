/**
 * The information for a single iOS device
 *
 */
class DeviceInfoRequest {
	/**
	 * Create a DeviceInfoRequest.
	 * @member {string} udid The Unique Device IDentifier of the device
	 * @member {string} model The model identifier of the device, in the format
	 * iDeviceM,N
	 * @member {string} [osBuild] The build number of the last known OS version
	 * running on the device
	 * @member {string} [osVersion] The last known OS version running on the
	 * device
	 * @member {string} [serial] The device's serial number. Always empty or
	 * undefined at present.
	 * @member {string} [imei] The device's International Mobile Equipment
	 * Identity number. Always empty or undefined at present.
	 * @member {string} [ownerId] The user ID of the device owner.
	 */
	constructor() {}

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

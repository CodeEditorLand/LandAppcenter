/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

const models = require("./index");

/**
 * Describe a AppCenter.Start API call from the SDK.
 *
 * @extends models['Log']
 */
class StartServiceLog extends models["Log"] {
	/**
	 * Create a StartServiceLog.
	 * @member {array} [services] The list of services of the AppvCenter Start API
	 * call.
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of StartServiceLog
	 *
	 * @returns {object} metadata of StartServiceLog
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "start_service",
			type: {
				name: "Composite",
				polymorphicDiscriminator: {
					serializedName: "type",
					clientName: "type",
				},
				uberParent: "Log",
				className: "StartServiceLog",
				modelProperties: {
					timestamp: {
						required: true,
						serializedName: "timestamp",
						type: {
							name: "DateTime",
						},
					},
					installId: {
						required: true,
						serializedName: "install_id",
						type: {
							name: "String",
						},
					},
					device: {
						required: true,
						serializedName: "device",
						type: {
							name: "Composite",
							className: "Device",
						},
					},
					type: {
						required: true,
						serializedName: "type",
						isPolymorphicDiscriminator: true,
						type: {
							name: "String",
						},
					},
					services: {
						required: false,
						serializedName: "services",
						constraints: {
							MinItems: 1,
						},
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

module.exports = StartServiceLog;

const models = require("./index");

/**
 * Class representing a HandledErrorDetails.
 * @extends models['HandledError']
 */
class HandledErrorDetails extends models["HandledError"] {
	/**
	 * Create a HandledErrorDetails.
	 * @member {string} [name]
	 * @member {array} [reasonFrames]
	 * @member {object} [properties]
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of HandledErrorDetails
	 *
	 * @returns {object} metadata of HandledErrorDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "HandledErrorDetails",
			type: {
				name: "Composite",
				className: "HandledErrorDetails",
				modelProperties: {
					errorId: {
						required: false,
						serializedName: "errorId",
						type: {
							name: "String",
						},
					},
					timestamp: {
						required: false,
						serializedName: "timestamp",
						type: {
							name: "DateTime",
						},
					},
					deviceName: {
						required: false,
						serializedName: "deviceName",
						type: {
							name: "String",
						},
					},
					osVersion: {
						required: false,
						serializedName: "osVersion",
						type: {
							name: "String",
						},
					},
					osType: {
						required: false,
						serializedName: "osType",
						type: {
							name: "String",
						},
					},
					country: {
						required: false,
						serializedName: "country",
						type: {
							name: "String",
						},
					},
					language: {
						required: false,
						serializedName: "language",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
						type: {
							name: "String",
						},
					},
					reasonFrames: {
						required: false,
						serializedName: "reasonFrames",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"HandledErrorReasonFrameElementType",
								type: {
									name: "Composite",
									className: "HandledErrorReasonFrame",
								},
							},
						},
					},
					properties: {
						required: false,
						serializedName: "properties",
						type: {
							name: "Dictionary",
							value: {
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

module.exports = HandledErrorDetails;

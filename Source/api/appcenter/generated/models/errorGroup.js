const models = require("./index");

/**
 * Class representing a ErrorGroup.
 * @extends models['ErrorGroupState']
 */
class ErrorGroup extends models["ErrorGroupState"] {
	/**
	 * Create a ErrorGroup.
	 * @member {string} errorGroupId
	 * @member {string} appVersion
	 * @member {number} count
	 * @member {number} deviceCount
	 * @member {date} firstOccurrence
	 * @member {date} lastOccurrence
	 * @member {string} [exceptionType]
	 * @member {string} [exceptionMessage]
	 * @member {string} [exceptionFile]
	 * @member {string} [exceptionLine]
	 * @member {array} [reasonFrames]
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ErrorGroup
	 *
	 * @returns {object} metadata of ErrorGroup
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorGroup",
			type: {
				name: "Composite",
				className: "ErrorGroup",
				modelProperties: {
					state: {
						required: true,
						serializedName: "state",
						type: {
							name: "String",
						},
					},
					errorGroupId: {
						required: true,
						serializedName: "errorGroupId",
						type: {
							name: "String",
						},
					},
					appVersion: {
						required: true,
						serializedName: "appVersion",
						type: {
							name: "String",
						},
					},
					count: {
						required: true,
						serializedName: "count",
						type: {
							name: "Number",
						},
					},
					deviceCount: {
						required: true,
						serializedName: "deviceCount",
						type: {
							name: "Number",
						},
					},
					firstOccurrence: {
						required: true,
						serializedName: "firstOccurrence",
						type: {
							name: "DateTime",
						},
					},
					lastOccurrence: {
						required: true,
						serializedName: "lastOccurrence",
						type: {
							name: "DateTime",
						},
					},
					exceptionType: {
						required: false,
						serializedName: "exceptionType",
						type: {
							name: "String",
						},
					},
					exceptionMessage: {
						required: false,
						serializedName: "exceptionMessage",
						type: {
							name: "String",
						},
					},
					exceptionFile: {
						required: false,
						serializedName: "exceptionFile",
						type: {
							name: "String",
						},
					},
					exceptionLine: {
						required: false,
						serializedName: "exceptionLine",
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
				},
			},
		};
	}
}

module.exports = ErrorGroup;

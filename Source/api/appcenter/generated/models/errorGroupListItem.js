const models = require("./index");

/**
 * Class representing a ErrorGroupListItem.
 * @extends models['ErrorGroupState']
 */
class ErrorGroupListItem extends models["ErrorGroupState"] {
	/**
	 * Create a ErrorGroupListItem.
	 * @member {string} errorGroupId
	 * @member {string} appVersion
	 * @member {number} count
	 * @member {number} deviceCount
	 * @member {date} lastOccurrence
	 * @member {string} [exceptionType]
	 * @member {string} [exceptionMessage]
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ErrorGroupListItem
	 *
	 * @returns {object} metadata of ErrorGroupListItem
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ErrorGroupListItem",
			type: {
				name: "Composite",
				className: "ErrorGroupListItem",
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
				},
			},
		};
	}
}

module.exports = ErrorGroupListItem;

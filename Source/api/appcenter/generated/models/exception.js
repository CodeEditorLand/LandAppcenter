const models = require("./index");

/**
 * a exception
 *
 */
class Exception {
	/**
	 * Create a Exception.
	 * @member {string} [reason] Reason of the exception
	 * @member {string} [type] Type of the exception (NSSomethingException,
	 * NullPointerException)
	 * @member {array} frames frames of the excetpion
	 * @member {boolean} [relevant] relevant exception (crashed)
	 * @member {array} [innerExceptions]
	 * @member {string} [platform] SDK/Platform this thread is beeing generated
	 * from. Possible values include: 'ios', 'android', 'xamarin',
	 * 'react-native', 'ndk', 'unity', 'other'
	 */
	constructor() {}

	/**
	 * Defines the metadata of Exception
	 *
	 * @returns {object} metadata of Exception
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Exception",
			type: {
				name: "Composite",
				className: "Exception",
				modelProperties: {
					reason: {
						required: false,
						serializedName: "reason",
						type: {
							name: "String",
						},
					},
					type: {
						required: false,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
					frames: {
						required: true,
						serializedName: "frames",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "StackFrameElementType",
								type: {
									name: "Composite",
									className: "StackFrame",
								},
							},
						},
					},
					relevant: {
						required: false,
						serializedName: "relevant",
						type: {
							name: "Boolean",
						},
					},
					innerExceptions: {
						required: false,
						serializedName: "inner_exceptions",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ExceptionElementType",
								type: {
									name: "Composite",
									className: "Exception",
								},
							},
						},
					},
					platform: {
						required: false,
						serializedName: "platform",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = Exception;

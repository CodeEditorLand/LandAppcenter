/**
 * Class representing a HandledErrorReasonFrame.
 */
class HandledErrorReasonFrame {
	/**
	 * Create a HandledErrorReasonFrame.
	 * @member {string} [className] name of the class
	 * @member {string} [method] name of the method
	 * @member {boolean} [classMethod] is a class method
	 * @member {string} [file] name of the file
	 * @member {number} [line] line number
	 * @member {boolean} [appCode] this line isn't from any framework
	 * @member {string} [frameworkName] Name of the framework
	 * @member {string} [codeFormatted] Formatted frame string
	 * @member {string} [codeRaw] Unformatted Frame string
	 * @member {string} [language] programming language of the frame. Possible
	 * values include: 'JavaScript', 'CSharp', 'Objective-C', 'Objective-Cpp',
	 * 'Cpp', 'C', 'Swift', 'Java', 'Unknown'
	 * @member {string} [methodParams] parameters of the frames method
	 * @member {string} [exceptionType] Exception type.
	 * @member {string} [osExceptionType] OS exception type. (aka. SIGNAL)
	 */
	constructor() {}

	/**
	 * Defines the metadata of HandledErrorReasonFrame
	 *
	 * @returns {object} metadata of HandledErrorReasonFrame
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "HandledErrorReasonFrame",
			type: {
				name: "Composite",
				className: "HandledErrorReasonFrame",
				modelProperties: {
					className: {
						required: false,
						serializedName: "className",
						type: {
							name: "String",
						},
					},
					method: {
						required: false,
						serializedName: "method",
						type: {
							name: "String",
						},
					},
					classMethod: {
						required: false,
						serializedName: "classMethod",
						type: {
							name: "Boolean",
						},
					},
					file: {
						required: false,
						serializedName: "file",
						type: {
							name: "String",
						},
					},
					line: {
						required: false,
						serializedName: "line",
						type: {
							name: "Number",
						},
					},
					appCode: {
						required: false,
						serializedName: "appCode",
						type: {
							name: "Boolean",
						},
					},
					frameworkName: {
						required: false,
						serializedName: "frameworkName",
						type: {
							name: "String",
						},
					},
					codeFormatted: {
						required: false,
						serializedName: "codeFormatted",
						type: {
							name: "String",
						},
					},
					codeRaw: {
						required: false,
						serializedName: "codeRaw",
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
					methodParams: {
						required: false,
						serializedName: "methodParams",
						type: {
							name: "String",
						},
					},
					exceptionType: {
						required: false,
						serializedName: "exceptionType",
						type: {
							name: "String",
						},
					},
					osExceptionType: {
						required: false,
						serializedName: "osExceptionType",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = HandledErrorReasonFrame;

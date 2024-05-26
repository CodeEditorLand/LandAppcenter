/**
 * frame belonging to the reason of the crash
 *
 */
class ReasonStackFrame {
	/**
	 * Create a ReasonStackFrame.
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
	 * Defines the metadata of ReasonStackFrame
	 *
	 * @returns {object} metadata of ReasonStackFrame
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReasonStackFrame",
			type: {
				name: "Composite",
				className: "ReasonStackFrame",
				modelProperties: {
					className: {
						required: false,
						serializedName: "class_name",
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
						serializedName: "class_method",
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
						serializedName: "app_code",
						type: {
							name: "Boolean",
						},
					},
					frameworkName: {
						required: false,
						serializedName: "framework_name",
						type: {
							name: "String",
						},
					},
					codeFormatted: {
						required: false,
						serializedName: "code_formatted",
						type: {
							name: "String",
						},
					},
					codeRaw: {
						required: false,
						serializedName: "code_raw",
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
						serializedName: "method_params",
						type: {
							name: "String",
						},
					},
					exceptionType: {
						required: false,
						serializedName: "exception_type",
						type: {
							name: "String",
						},
					},
					osExceptionType: {
						required: false,
						serializedName: "os_exception_type",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = ReasonStackFrame;

const models = require("./index");

/**
 * a stacktrace in a processed and prettyfied way
 *
 */
class Stacktrace {
	/**
	 * Create a Stacktrace.
	 * @member {string} [title]
	 * @member {string} [reason]
	 * @member {array} [threads]
	 * @member {object} [exception]
	 * @member {string} [exception.reason] Reason of the exception
	 * @member {string} [exception.type] Type of the exception
	 * (NSSomethingException, NullPointerException)
	 * @member {array} [exception.frames] frames of the excetpion
	 * @member {boolean} [exception.relevant] relevant exception (crashed)
	 * @member {array} [exception.innerExceptions]
	 * @member {string} [exception.platform] SDK/Platform this thread is beeing
	 * generated from. Possible values include: 'ios', 'android', 'xamarin',
	 * 'react-native', 'ndk', 'unity', 'other'
	 */
	constructor() {}

	/**
	 * Defines the metadata of Stacktrace
	 *
	 * @returns {object} metadata of Stacktrace
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "Stacktrace",
			type: {
				name: "Composite",
				className: "Stacktrace",
				modelProperties: {
					title: {
						required: false,
						serializedName: "title",
						type: {
							name: "String",
						},
					},
					reason: {
						required: false,
						serializedName: "reason",
						type: {
							name: "String",
						},
					},
					threads: {
						required: false,
						serializedName: "threads",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "ThreadElementType",
								type: {
									name: "Composite",
									className: "Thread",
								},
							},
						},
					},
					exception: {
						required: false,
						serializedName: "exception",
						type: {
							name: "Composite",
							className: "Exception",
						},
					},
				},
			},
		};
	}
}

module.exports = Stacktrace;

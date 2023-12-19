/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a ActiveDeviceCounts.
 */
class ActiveDeviceCounts {
	/**
	 * Defines the metadata of ActiveDeviceCounts
	 *
	 * @returns {object} metadata of ActiveDeviceCounts
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ActiveDeviceCounts",
			type: {
				name: "Composite",
				className: "ActiveDeviceCounts",
				modelProperties: {
					daily: {
						required: false,
						serializedName: "daily",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DateTimeCountsElementType",
								type: {
									name: "Composite",
									className: "DateTimeCounts",
								},
							},
						},
					},
					weekly: {
						required: false,
						serializedName: "weekly",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DateTimeCountsElementType",
								type: {
									name: "Composite",
									className: "DateTimeCounts",
								},
							},
						},
					},
					monthly: {
						required: false,
						serializedName: "monthly",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DateTimeCountsElementType",
								type: {
									name: "Composite",
									className: "DateTimeCounts",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ActiveDeviceCounts;

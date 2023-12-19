/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

const models = require("./index");

/**
 * Class representing a ActiveCrashingAppDetails.
 */
class ActiveCrashingAppDetails {
	/**
	 * Defines the metadata of ActiveCrashingAppDetails
	 *
	 * @returns {object} metadata of ActiveCrashingAppDetails
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ActiveCrashingAppDetails",
			type: {
				name: "Composite",
				className: "ActiveCrashingAppDetails",
				modelProperties: {
					nextLink: {
						required: false,
						serializedName: "nextLink",
						type: {
							name: "String",
						},
					},
					appsWithCrashes: {
						required: false,
						serializedName: "appsWithCrashes",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "CrashingAppDetailElementType",
								type: {
									name: "Composite",
									className: "CrashingAppDetail",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ActiveCrashingAppDetails;

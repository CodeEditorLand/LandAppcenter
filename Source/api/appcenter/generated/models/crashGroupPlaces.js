const models = require("./index");

/**
 * Class representing a CrashGroupPlaces.
 */
class CrashGroupPlaces {
	/**
	 * Create a CrashGroupPlaces.
	 * @member {number} [crashCount]
	 * @member {array} [places]
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashGroupPlaces
	 *
	 * @returns {object} metadata of CrashGroupPlaces
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashGroupPlaces",
			type: {
				name: "Composite",
				className: "CrashGroupPlaces",
				modelProperties: {
					crashCount: {
						required: false,
						serializedName: "crash_count",
						type: {
							name: "Number",
						},
					},
					places: {
						required: false,
						serializedName: "places",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "CrashGroupPlaceElementType",
								type: {
									name: "Composite",
									className: "CrashGroupPlace",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = CrashGroupPlaces;

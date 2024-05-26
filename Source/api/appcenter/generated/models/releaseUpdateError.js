const models = require("./index");

/**
 * Class representing a ReleaseUpdateError.
 * @extends models['ErrorDetails']
 */
class ReleaseUpdateError extends models["ErrorDetails"] {
	/**
	 * Create a ReleaseUpdateError.
	 * @member {string} [releaseNotes]
	 * @member {boolean} [mandatoryUpdate]
	 * @member {array} [destinations]
	 */
	constructor() {
		super();
	}

	/**
	 * Defines the metadata of ReleaseUpdateError
	 *
	 * @returns {object} metadata of ReleaseUpdateError
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "ReleaseUpdateError",
			type: {
				name: "Composite",
				className: "ReleaseUpdateError",
				modelProperties: {
					code: {
						required: true,
						serializedName: "code",
						type: {
							name: "String",
						},
					},
					message: {
						required: true,
						serializedName: "message",
						type: {
							name: "String",
						},
					},
					releaseNotes: {
						required: false,
						serializedName: "release_notes",
						type: {
							name: "String",
						},
					},
					mandatoryUpdate: {
						required: false,
						serializedName: "mandatory_update",
						type: {
							name: "Boolean",
						},
					},
					destinations: {
						required: false,
						serializedName: "destinations",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DestinationErrorElementType",
								type: {
									name: "Composite",
									className: "DestinationError",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = ReleaseUpdateError;

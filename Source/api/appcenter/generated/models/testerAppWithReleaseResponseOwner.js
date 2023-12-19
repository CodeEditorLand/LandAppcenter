/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/**
 * The information about the app's owner
 *
 */
class TesterAppWithReleaseResponseOwner {
	/**
	 * Defines the metadata of TesterAppWithReleaseResponseOwner
	 *
	 * @returns {object} metadata of TesterAppWithReleaseResponseOwner
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "TesterAppWithReleaseResponse_owner",
			type: {
				name: "Composite",
				className: "TesterAppWithReleaseResponseOwner",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
					avatarUrl: {
						required: false,
						serializedName: "avatar_url",
						type: {
							name: "String",
						},
					},
					displayName: {
						required: false,
						serializedName: "display_name",
						type: {
							name: "String",
						},
					},
					email: {
						required: false,
						serializedName: "email",
						type: {
							name: "String",
						},
					},
					name: {
						required: false,
						serializedName: "name",
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
				},
			},
		};
	}
}

module.exports = TesterAppWithReleaseResponseOwner;

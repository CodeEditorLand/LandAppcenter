const models = require("./index");

/**
 * Basic information on a release
 *
 */
class BasicReleaseDetailsResponse {
	/**
	 * Create a BasicReleaseDetailsResponse.
	 * @member {number} [id] ID identifying this unique release.
	 * @member {string} [version] The release's version.<br>
	 * For iOS: CFBundleVersion from info.plist.<br>
	 * For Android: android:versionCode from AppManifest.xml.
	 * @member {string} [shortVersion] The release's short version.<br>
	 * For iOS: CFBundleShortVersionString from info.plist.<br>
	 * For Android: android:versionName from AppManifest.xml.
	 * @member {string} [uploadedAt] UTC time in ISO 8601 format of the uploaded
	 * time.
	 * @member {string} [destinationType] OBSOLETE. Will be removed in next
	 * version. The destination type.<br>
	 * <b>group</b>: The release distributed to internal groups and
	 * distribution_groups details will be returned.<br>
	 * <b>store</b>: The release distributed to external stores and
	 * distribution_stores details will be returned. <br>
	 * . Possible values include: 'group', 'store'
	 * @member {array} [distributionGroups] OBSOLETE. Will be removed in next
	 * version. A list of distribution groups that are associated with this
	 * release.
	 * @member {array} [distributionStores] OBSOLETE. Will be removed in next
	 * version. A list of distribution stores that are associated with this
	 * release.
	 * @member {array} [destinations] A list of distribution groups or stores.
	 */
	constructor() {}

	/**
	 * Defines the metadata of BasicReleaseDetailsResponse
	 *
	 * @returns {object} metadata of BasicReleaseDetailsResponse
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "BasicReleaseDetailsResponse",
			type: {
				name: "Composite",
				className: "BasicReleaseDetailsResponse",
				modelProperties: {
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "Number",
						},
					},
					version: {
						required: false,
						serializedName: "version",
						type: {
							name: "String",
						},
					},
					shortVersion: {
						required: false,
						serializedName: "short_version",
						type: {
							name: "String",
						},
					},
					uploadedAt: {
						required: false,
						serializedName: "uploaded_at",
						type: {
							name: "String",
						},
					},
					destinationType: {
						required: false,
						serializedName: "destination_type",
						type: {
							name: "String",
						},
					},
					distributionGroups: {
						required: false,
						serializedName: "distribution_groups",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DistributionGroupElementType",
								type: {
									name: "Composite",
									className: "DistributionGroup",
								},
							},
						},
					},
					distributionStores: {
						required: false,
						serializedName: "distribution_stores",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DistributionStoreElementType",
								type: {
									name: "Composite",
									className: "DistributionStore",
								},
							},
						},
					},
					destinations: {
						required: false,
						serializedName: "destinations",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "DestinationElementType",
								type: {
									name: "Composite",
									className: "Destination",
								},
							},
						},
					},
				},
			},
		};
	}
}

module.exports = BasicReleaseDetailsResponse;

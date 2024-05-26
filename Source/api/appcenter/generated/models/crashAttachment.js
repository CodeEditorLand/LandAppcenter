/**
 * Class representing a CrashAttachment.
 */
class CrashAttachment {
	/**
	 * Create a CrashAttachment.
	 * @member {string} appId
	 * @member {string} attachmentId
	 * @member {string} crashId
	 * @member {string} blobLocation
	 * @member {string} contentType
	 * @member {string} fileName
	 * @member {date} createdTime
	 * @member {number} size
	 */
	constructor() {}

	/**
	 * Defines the metadata of CrashAttachment
	 *
	 * @returns {object} metadata of CrashAttachment
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "CrashAttachment",
			type: {
				name: "Composite",
				className: "CrashAttachment",
				modelProperties: {
					appId: {
						required: true,
						serializedName: "app_id",
						type: {
							name: "String",
						},
					},
					attachmentId: {
						required: true,
						serializedName: "attachment_id",
						type: {
							name: "String",
						},
					},
					crashId: {
						required: true,
						serializedName: "crash_id",
						type: {
							name: "String",
						},
					},
					blobLocation: {
						required: true,
						serializedName: "blob_location",
						type: {
							name: "String",
						},
					},
					contentType: {
						required: true,
						serializedName: "content_type",
						type: {
							name: "String",
						},
					},
					fileName: {
						required: true,
						serializedName: "file_name",
						type: {
							name: "String",
						},
					},
					createdTime: {
						required: true,
						serializedName: "created_time",
						type: {
							name: "DateTime",
						},
					},
					size: {
						required: true,
						serializedName: "size",
						type: {
							name: "Number",
						},
					},
				},
			},
		};
	}
}

module.exports = CrashAttachment;

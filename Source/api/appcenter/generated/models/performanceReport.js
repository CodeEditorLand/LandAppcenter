const models = require("./index");

/**
 * @summary Performance Report
 *
 * Report data for a single test (a.k.a. scenario)
 *
 */
class PerformanceReport {
	/**
	 * Create a PerformanceReport.
	 * @member {string} [deviceSnapshotId]
	 * @member {object} [performanceData]
	 * @member {array} [performanceData.steps]
	 * @member {number} [performanceData.elapsedSecsEnd]
	 * @member {number} [performanceData.elapsedSecsStart]
	 * @member {number} [performanceData.elapsedSecs]
	 * @member {string} [performanceData.id]
	 * @member {object} [video]
	 * @member {object} [video.videoMetadata]
	 * @member {array} [video.videoMetadata.events]
	 * @member {string} [video.videoUrl]
	 */
	constructor() {}

	/**
	 * Defines the metadata of PerformanceReport
	 *
	 * @returns {object} metadata of PerformanceReport
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "PerformanceReport",
			type: {
				name: "Composite",
				className: "PerformanceReport",
				modelProperties: {
					deviceSnapshotId: {
						required: false,
						serializedName: "device_snapshot_id",
						type: {
							name: "String",
						},
					},
					performanceData: {
						required: false,
						serializedName: "performance_data",
						type: {
							name: "Composite",
							className: "PerformanceReportPerformanceData",
						},
					},
					video: {
						required: false,
						serializedName: "video",
						type: {
							name: "Composite",
							className: "PerformanceReportVideo",
						},
					},
				},
			},
		};
	}
}

module.exports = PerformanceReport;

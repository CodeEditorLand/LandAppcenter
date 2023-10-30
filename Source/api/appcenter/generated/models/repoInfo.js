/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

"use strict";

/**
 * Class representing a RepoInfo.
 */
class RepoInfo {
	/**
	 * Create a RepoInfo.
	 * @member {string} repoUrl The repository url
	 */
	constructor() {}

	/**
	 * Defines the metadata of RepoInfo
	 *
	 * @returns {object} metadata of RepoInfo
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "RepoInfo",
			type: {
				name: "Composite",
				className: "RepoInfo",
				modelProperties: {
					repoUrl: {
						required: true,
						serializedName: "repo_url",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = RepoInfo;

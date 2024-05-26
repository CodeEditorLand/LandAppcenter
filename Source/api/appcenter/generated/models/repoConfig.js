/**
 * Class representing a RepoConfig.
 */
class RepoConfig {
	/**
	 * Create a RepoConfig.
	 * @member {string} type Type of repository
	 * @member {string} state State of the configuration. Possible values
	 * include: 'unauthorized', 'inactive', 'active'
	 * @member {string} [repoUrl] URL of the repository
	 * @member {string} [id] Repository identifier
	 */
	constructor() {}

	/**
	 * Defines the metadata of RepoConfig
	 *
	 * @returns {object} metadata of RepoConfig
	 *
	 */
	mapper() {
		return {
			required: false,
			serializedName: "RepoConfig",
			type: {
				name: "Composite",
				className: "RepoConfig",
				modelProperties: {
					type: {
						required: true,
						serializedName: "type",
						type: {
							name: "String",
						},
					},
					state: {
						required: true,
						serializedName: "state",
						type: {
							name: "String",
						},
					},
					repoUrl: {
						required: false,
						serializedName: "repo_url",
						type: {
							name: "String",
						},
					},
					id: {
						required: false,
						serializedName: "id",
						type: {
							name: "String",
						},
					},
				},
			},
		};
	}
}

module.exports = RepoConfig;

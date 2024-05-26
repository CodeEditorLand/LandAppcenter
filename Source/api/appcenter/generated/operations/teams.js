const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Removes a user from a team that is owned by an organization
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {string} userName The slug name of the user
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _removeUser(orgName, teamName, userName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			userName === null ||
			userName === undefined ||
			typeof userName.valueOf() !== "string"
		) {
			throw new Error(
				"userName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}/users/{user_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);
	requestUrl = requestUrl.replace(
		"{user_name}",
		encodeURIComponent(userName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "DELETE";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 204) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Returns the users of a team which is owned by an organization
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TeamUserResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getUsers(orgName, teamName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}/users";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"TeamUserResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Adds a new user to a team that is owned by an organization
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {string} userEmail The user's email address'
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TeamUserResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addUser(orgName, teamName, userEmail, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			userEmail === null ||
			userEmail === undefined ||
			typeof userEmail.valueOf() !== "string"
		) {
			throw new Error(
				"userEmail cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}
	let userEmail1;
	if (userEmail !== null && userEmail !== undefined) {
		userEmail1 = new client.models["UserEmailRequest"]();
		userEmail1.userEmail = userEmail;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}/users";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "POST";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	// Serialize Request
	let requestContent = null;
	let requestModel = null;
	try {
		if (userEmail1 !== null && userEmail1 !== undefined) {
			const requestModelMapper = new client.models[
				"UserEmailRequest"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				userEmail1,
				"userEmail1",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(userEmail1, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 201) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 201) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"TeamUserResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Updates the permissions the team has to the app
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {string} appName The name of the application
 *
 * @param {array} permissions The permissions all members of the team have on
 * the app
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AppWithTeamPermissionsResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePermissions(
	orgName,
	teamName,
	appName,
	permissions,
	options,
	callback,
) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			appName === null ||
			appName === undefined ||
			typeof appName.valueOf() !== "string"
		) {
			throw new Error(
				"appName cannot be null or undefined and it must be of type string.",
			);
		}
		if (!Array.isArray(permissions)) {
			throw new Error(
				"permissions cannot be null or undefined and it must be of type array.",
			);
		}
		for (let i = 0; i < permissions.length; i++) {
			if (
				permissions[i] !== null &&
				permissions[i] !== undefined &&
				typeof permissions[i].valueOf() !== "string"
			) {
				throw new Error("permissions[i] must be of type string.");
			}
		}
	} catch (error) {
		return callback(error);
	}
	let team;
	if (permissions !== null && permissions !== undefined) {
		team = new client.models["TeamAppUpdateRequest"]();
		team.permissions = permissions;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}/apps/{app_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "PATCH";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	// Serialize Request
	let requestContent = null;
	let requestModel = null;
	try {
		if (team !== null && team !== undefined) {
			const requestModelMapper = new client.models[
				"TeamAppUpdateRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, team, "team");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(team, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"AppWithTeamPermissionsResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Removes an app from a team
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _removeApp(orgName, teamName, appName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			appName === null ||
			appName === undefined ||
			typeof appName.valueOf() !== "string"
		) {
			throw new Error(
				"appName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}/apps/{app_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "DELETE";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 204) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Adds an app to a team
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {string} name The name of the app to be added to the team
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AppWithTeamPermissionsResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addApp(orgName, teamName, name, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			name === null ||
			name === undefined ||
			typeof name.valueOf() !== "string"
		) {
			throw new Error(
				"name cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}
	let app;
	if (name !== null && name !== undefined) {
		app = new client.models["AppTeamAddRequest"]();
		app.name = name;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}/apps";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "POST";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	// Serialize Request
	let requestContent = null;
	let requestModel = null;
	try {
		if (app !== null && app !== undefined) {
			const requestModelMapper = new client.models[
				"AppTeamAddRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, app, "app");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(app, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 201) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 201) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"AppWithTeamPermissionsResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Returns the apps a team has access to
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listApps(orgName, teamName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}/apps";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = {
						required: false,
						serializedName: "parsedResponse",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName:
									"AppWithTeamPermissionsResponseElementType",
								type: {
									name: "Composite",
									className: "AppWithTeamPermissionsResponse",
								},
							},
						},
					};
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Returns the details of a single team
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TeamResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getTeam(orgName, teamName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"TeamResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Deletes a single team
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteMethod(orgName, teamName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "DELETE";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 204) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Updates a single team
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} teamName The team's name
 *
 * @param {string} displayName The display name of the team
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.name] The name of the team
 *
 * @param {string} [options.description] The description of the team
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TeamResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _update(orgName, teamName, displayName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const name =
		options && options.name !== undefined ? options.name : undefined;
	const description =
		options && options.description !== undefined
			? options.description
			: undefined;
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			teamName === null ||
			teamName === undefined ||
			typeof teamName.valueOf() !== "string"
		) {
			throw new Error(
				"teamName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			displayName === null ||
			displayName === undefined ||
			typeof displayName.valueOf() !== "string"
		) {
			throw new Error(
				"displayName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			name !== null &&
			name !== undefined &&
			typeof name.valueOf() !== "string"
		) {
			throw new Error("name must be of type string.");
		}
		if (
			description !== null &&
			description !== undefined &&
			typeof description.valueOf() !== "string"
		) {
			throw new Error("description must be of type string.");
		}
	} catch (error) {
		return callback(error);
	}
	let team;
	if (
		(displayName !== null && displayName !== undefined) ||
		(name !== null && name !== undefined) ||
		(description !== null && description !== undefined)
	) {
		team = new client.models["TeamRequest"]();
		team.displayName = displayName;
		team.name = name;
		team.description = description;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams/{team_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{team_name}",
		encodeURIComponent(teamName),
	);

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "PATCH";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	// Serialize Request
	let requestContent = null;
	let requestModel = null;
	try {
		if (team !== null && team !== undefined) {
			const requestModelMapper = new client.models[
				"TeamRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, team, "team");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(team, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"TeamResponse"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Returns the list of all teams in this org
 *
 * @param {string} orgName The organization's name
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listAll(orgName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "GET";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	httpRequest.body = null;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 200) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 200) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = {
						required: false,
						serializedName: "parsedResponse",
						type: {
							name: "Sequence",
							element: {
								required: false,
								serializedName: "TeamResponseElementType",
								type: {
									name: "Composite",
									className: "TeamResponse",
								},
							},
						},
					};
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Creates a team and returns it
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} displayName The display name of the team
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.name] The name of the team
 *
 * @param {string} [options.description] The description of the team
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createTeam(orgName, displayName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const name =
		options && options.name !== undefined ? options.name : undefined;
	const description =
		options && options.description !== undefined
			? options.description
			: undefined;
	// Validate
	try {
		if (
			orgName === null ||
			orgName === undefined ||
			typeof orgName.valueOf() !== "string"
		) {
			throw new Error(
				"orgName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			displayName === null ||
			displayName === undefined ||
			typeof displayName.valueOf() !== "string"
		) {
			throw new Error(
				"displayName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			name !== null &&
			name !== undefined &&
			typeof name.valueOf() !== "string"
		) {
			throw new Error("name must be of type string.");
		}
		if (
			description !== null &&
			description !== undefined &&
			typeof description.valueOf() !== "string"
		) {
			throw new Error("description must be of type string.");
		}
	} catch (error) {
		return callback(error);
	}
	let team;
	if (
		(displayName !== null && displayName !== undefined) ||
		(name !== null && name !== undefined) ||
		(description !== null && description !== undefined)
	) {
		team = new client.models["TeamRequest"]();
		team.displayName = displayName;
		team.name = name;
		team.description = description;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/teams";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "POST";
	httpRequest.url = requestUrl;
	httpRequest.headers = {};
	// Set Headers
	httpRequest.headers["Content-Type"] = "application/json; charset=utf-8";
	if (options) {
		for (const headerName in options["customHeaders"]) {
			if (options["customHeaders"].hasOwnProperty(headerName)) {
				httpRequest.headers[headerName] =
					options["customHeaders"][headerName];
			}
		}
	}
	// Serialize Request
	let requestContent = null;
	let requestModel = null;
	try {
		if (team !== null && team !== undefined) {
			const requestModelMapper = new client.models[
				"TeamRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, team, "team");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(team, null, 2)}.`,
		);
		return callback(serializationError);
	}
	httpRequest.body = requestContent;
	// Send Request
	return client.pipeline(httpRequest, (err, response, responseBody) => {
		if (err) {
			return callback(err);
		}
		const statusCode = response.statusCode;
		if (statusCode !== 201) {
			const error = new Error(responseBody);
			error.statusCode = response.statusCode;
			error.request = msRest.stripRequest(httpRequest);
			error.response = msRest.stripResponse(response);
			if (responseBody === "") responseBody = null;
			let parsedErrorResponse;
			try {
				parsedErrorResponse = JSON.parse(responseBody);
				if (parsedErrorResponse) {
					let internalError = null;
					if (parsedErrorResponse.error)
						internalError = parsedErrorResponse.error;
					error.code = internalError
						? internalError.code
						: parsedErrorResponse.code;
					error.message = internalError
						? internalError.message
						: parsedErrorResponse.message;
				}
				if (
					parsedErrorResponse !== null &&
					parsedErrorResponse !== undefined
				) {
					const resultMapper = new client.models[
						"ErrorResponse"
					]().mapper();
					error.body = client.deserialize(
						resultMapper,
						parsedErrorResponse,
						"error.body",
					);
				}
			} catch (defaultError) {
				error.message =
					`Error "${defaultError.message}" occurred in deserializing the responseBody ` +
					`- "${responseBody}" for the default response.`;
				return callback(error);
			}
			return callback(error);
		}
		// Create Result
		let result = null;
		if (responseBody === "") responseBody = null;
		// Deserialize Response
		if (statusCode === 201) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = {
						required: false,
						serializedName: "parsedResponse",
						type: {
							name: "Object",
						},
					};
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError.request = msRest.stripRequest(httpRequest);
				deserializationError.response = msRest.stripResponse(response);
				return callback(deserializationError);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/** Class representing a Teams. */
class Teams {
	/**
	 * Create a Teams.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._removeUser = _removeUser;
		this._getUsers = _getUsers;
		this._addUser = _addUser;
		this._updatePermissions = _updatePermissions;
		this._removeApp = _removeApp;
		this._addApp = _addApp;
		this._listApps = _listApps;
		this._getTeam = _getTeam;
		this._deleteMethod = _deleteMethod;
		this._update = _update;
		this._listAll = _listAll;
		this._createTeam = _createTeam;
	}

	/**
	 * Removes a user from a team that is owned by an organization
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} userName The slug name of the user
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	removeUserWithHttpOperationResponse(orgName, teamName, userName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._removeUser(
				orgName,
				teamName,
				userName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Removes a user from a team that is owned by an organization
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} userName The slug name of the user
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {null} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {null} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	removeUser(orgName, teamName, userName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._removeUser(
				orgName,
				teamName,
				userName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._removeUser(
					orgName,
					teamName,
					userName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Returns the users of a team which is owned by an organization
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<TeamUserResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getUsersWithHttpOperationResponse(orgName, teamName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._getUsers(
				orgName,
				teamName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Returns the users of a team which is owned by an organization
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {TeamUserResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link TeamUserResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	getUsers(orgName, teamName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._getUsers(orgName, teamName, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._getUsers(
					orgName,
					teamName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Adds a new user to a team that is owned by an organization
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} userEmail The user's email address'
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<TeamUserResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	addUserWithHttpOperationResponse(orgName, teamName, userEmail, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._addUser(
				orgName,
				teamName,
				userEmail,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Adds a new user to a team that is owned by an organization
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} userEmail The user's email address'
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {TeamUserResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link TeamUserResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	addUser(orgName, teamName, userEmail, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._addUser(
				orgName,
				teamName,
				userEmail,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._addUser(
					orgName,
					teamName,
					userEmail,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Updates the permissions the team has to the app
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {array} permissions The permissions all members of the team have on
	 * the app
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<AppWithTeamPermissionsResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	updatePermissionsWithHttpOperationResponse(
		orgName,
		teamName,
		appName,
		permissions,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._updatePermissions(
				orgName,
				teamName,
				appName,
				permissions,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Updates the permissions the team has to the app
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {array} permissions The permissions all members of the team have on
	 * the app
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {AppWithTeamPermissionsResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link AppWithTeamPermissionsResponse} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	updatePermissions(
		orgName,
		teamName,
		appName,
		permissions,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._updatePermissions(
				orgName,
				teamName,
				appName,
				permissions,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._updatePermissions(
					orgName,
					teamName,
					appName,
					permissions,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Removes an app from a team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	removeAppWithHttpOperationResponse(orgName, teamName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._removeApp(
				orgName,
				teamName,
				appName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Removes an app from a team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {null} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {null} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	removeApp(orgName, teamName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._removeApp(
				orgName,
				teamName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._removeApp(
					orgName,
					teamName,
					appName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Adds an app to a team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} name The name of the app to be added to the team
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<AppWithTeamPermissionsResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	addAppWithHttpOperationResponse(orgName, teamName, name, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._addApp(
				orgName,
				teamName,
				name,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Adds an app to a team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} name The name of the app to be added to the team
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {AppWithTeamPermissionsResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link AppWithTeamPermissionsResponse} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	addApp(orgName, teamName, name, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._addApp(
				orgName,
				teamName,
				name,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._addApp(
					orgName,
					teamName,
					name,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Returns the apps a team has access to
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	listAppsWithHttpOperationResponse(orgName, teamName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._listApps(
				orgName,
				teamName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Returns the apps a team has access to
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {Array} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {array} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	listApps(orgName, teamName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._listApps(orgName, teamName, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._listApps(
					orgName,
					teamName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Returns the details of a single team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<TeamResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getTeamWithHttpOperationResponse(orgName, teamName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._getTeam(
				orgName,
				teamName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Returns the details of a single team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {TeamResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link TeamResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	getTeam(orgName, teamName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._getTeam(orgName, teamName, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._getTeam(
					orgName,
					teamName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Deletes a single team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	deleteMethodWithHttpOperationResponse(orgName, teamName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._deleteMethod(
				orgName,
				teamName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Deletes a single team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {null} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {null} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	deleteMethod(orgName, teamName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._deleteMethod(
				orgName,
				teamName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._deleteMethod(
					orgName,
					teamName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Updates a single team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} displayName The display name of the team
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.name] The name of the team
	 *
	 * @param {string} [options.description] The description of the team
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<TeamResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	updateWithHttpOperationResponse(orgName, teamName, displayName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._update(
				orgName,
				teamName,
				displayName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Updates a single team
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} teamName The team's name
	 *
	 * @param {string} displayName The display name of the team
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.name] The name of the team
	 *
	 * @param {string} [options.description] The description of the team
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {TeamResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link TeamResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	update(orgName, teamName, displayName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._update(
				orgName,
				teamName,
				displayName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._update(
					orgName,
					teamName,
					displayName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Returns the list of all teams in this org
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	listAllWithHttpOperationResponse(orgName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._listAll(
				orgName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Returns the list of all teams in this org
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {Array} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {array} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	listAll(orgName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._listAll(orgName, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._listAll(
					orgName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}

	/**
	 * Creates a team and returns it
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} displayName The display name of the team
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.name] The name of the team
	 *
	 * @param {string} [options.description] The description of the team
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	createTeamWithHttpOperationResponse(orgName, displayName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._createTeam(
				orgName,
				displayName,
				options,
				(err, result, request, response) => {
					const httpOperationResponse =
						new msRest.HttpOperationResponse(request, response);
					httpOperationResponse.body = result;
					if (err) {
						reject(err);
					} else {
						resolve(httpOperationResponse);
					}
					return;
				},
			);
		});
	}

	/**
	 * Creates a team and returns it
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} displayName The display name of the team
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.name] The name of the team
	 *
	 * @param {string} [options.description] The description of the team
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @param {function} [optionalCallback] - The optional callback.
	 *
	 * @returns {function|Promise} If a callback was passed as the last parameter
	 * then it returns the callback else returns a Promise.
	 *
	 * {Promise} A promise is returned
	 *
	 *                      @resolve {Object} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	createTeam(orgName, displayName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._createTeam(
				orgName,
				displayName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._createTeam(
					orgName,
					displayName,
					options,
					(err, result, request, response) => {
						if (err) {
							reject(err);
						} else {
							resolve(result);
						}
						return;
					},
				);
			});
		}
	}
}

module.exports = Teams;

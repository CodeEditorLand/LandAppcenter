const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Returns the user profile data
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
 *                      See {@link UserProfileResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	const requestUrl =
		baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/user";

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
						"UserProfileResponse"
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
 * Updates the user profile and returns the updated user data
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.displayName] The full name of the user. Might for
 * example be first and last name
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
 *                      See {@link UserProfileResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _update(options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const displayName =
		options && options.displayName !== undefined
			? options.displayName
			: undefined;
	// Validate
	try {
		if (
			displayName !== null &&
			displayName !== undefined &&
			typeof displayName.valueOf() !== "string"
		) {
			throw new Error("displayName must be of type string.");
		}
	} catch (error) {
		return callback(error);
	}
	let user;
	if (displayName !== null && displayName !== undefined) {
		user = new client.models["UserUpdateRequest"]();
		user.displayName = displayName;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	const requestUrl =
		baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/user";

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
		if (user !== null && user !== undefined) {
			const requestModelMapper = new client.models[
				"UserUpdateRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, user, "user");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(user, null, 2)}.`,
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
						"UserProfileResponse"
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
 * Updates the given organization user
 *
 * @param {string} orgName The organization's name
 *
 * @param {string} userName The slug name of the user
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.role] The user's role in the organizatiion.
 * Possible values include: 'admin', 'collaborator'
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
 *                      See {@link OrganizationUserResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updateOrgRole(orgName, userName, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const role =
		options && options.role !== undefined ? options.role : undefined;
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
			userName === null ||
			userName === undefined ||
			typeof userName.valueOf() !== "string"
		) {
			throw new Error(
				"userName cannot be null or undefined and it must be of type string.",
			);
		}
		if (
			role !== null &&
			role !== undefined &&
			typeof role.valueOf() !== "string"
		) {
			throw new Error("role must be of type string.");
		}
	} catch (error) {
		return callback(error);
	}
	let organizationUser;
	if (role !== null && role !== undefined) {
		organizationUser = new client.models["OrganizationUserPatchRequest"]();
		organizationUser.role = role;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/orgs/{org_name}/users/{user_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
	requestUrl = requestUrl.replace(
		"{user_name}",
		encodeURIComponent(userName),
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
		if (organizationUser !== null && organizationUser !== undefined) {
			const requestModelMapper = new client.models[
				"OrganizationUserPatchRequest"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				organizationUser,
				"organizationUser",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(organizationUser, null, 2)}.`,
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
						"OrganizationUserResponse"
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
 * Removes a user from an organization.
 *
 * @param {string} orgName The organization's name
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
function _removeFromOrg(orgName, userName, options, callback) {
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
		"v0.1/orgs/{org_name}/users/{user_name}";
	requestUrl = requestUrl.replace("{org_name}", encodeURIComponent(orgName));
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
 * Returns a list of users that belong to an organization
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
function _listForOrg(orgName, options, callback) {
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
		"v0.1/orgs/{org_name}/users";
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
								serializedName:
									"OrganizationUserResponseElementType",
								type: {
									name: "Composite",
									className: "OrganizationUserResponse",
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
 * Returns the users associated with the app specified with the given app name
 * which belongs to the given owner.
 *
 * @param {string} ownerName The name of the owner
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
 *                      {array} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(ownerName, appName, options, callback) {
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
			ownerName === null ||
			ownerName === undefined ||
			typeof ownerName.valueOf() !== "string"
		) {
			throw new Error(
				"ownerName cannot be null or undefined and it must be of type string.",
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
		"v0.1/apps/{owner_name}/{app_name}/users";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

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
									"UserProfileResponseElementType",
								type: {
									name: "Composite",
									className: "UserProfileResponse",
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

/** Class representing a Users. */
class Users {
	/**
	 * Create a Users.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._get = _get;
		this._update = _update;
		this._updateOrgRole = _updateOrgRole;
		this._removeFromOrg = _removeFromOrg;
		this._listForOrg = _listForOrg;
		this._list = _list;
	}

	/**
	 * Returns the user profile data
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<UserProfileResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getWithHttpOperationResponse(options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._get(options, (err, result, request, response) => {
				const httpOperationResponse = new msRest.HttpOperationResponse(
					request,
					response,
				);
				httpOperationResponse.body = result;
				if (err) {
					reject(err);
				} else {
					resolve(httpOperationResponse);
				}
				return;
			});
		});
	}

	/**
	 * Returns the user profile data
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
	 *                      @resolve {UserProfileResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link UserProfileResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	get(options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._get(options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._get(options, (err, result, request, response) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
					return;
				});
			});
		}
	}

	/**
	 * Updates the user profile and returns the updated user data
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.displayName] The full name of the user. Might for
	 * example be first and last name
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<UserProfileResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	updateWithHttpOperationResponse(options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._update(options, (err, result, request, response) => {
				const httpOperationResponse = new msRest.HttpOperationResponse(
					request,
					response,
				);
				httpOperationResponse.body = result;
				if (err) {
					reject(err);
				} else {
					resolve(httpOperationResponse);
				}
				return;
			});
		});
	}

	/**
	 * Updates the user profile and returns the updated user data
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.displayName] The full name of the user. Might for
	 * example be first and last name
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
	 *                      @resolve {UserProfileResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link UserProfileResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	update(options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._update(options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._update(options, (err, result, request, response) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
					return;
				});
			});
		}
	}

	/**
	 * Updates the given organization user
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} userName The slug name of the user
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.role] The user's role in the organizatiion.
	 * Possible values include: 'admin', 'collaborator'
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<OrganizationUserResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	updateOrgRoleWithHttpOperationResponse(orgName, userName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._updateOrgRole(
				orgName,
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
	 * Updates the given organization user
	 *
	 * @param {string} orgName The organization's name
	 *
	 * @param {string} userName The slug name of the user
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.role] The user's role in the organizatiion.
	 * Possible values include: 'admin', 'collaborator'
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
	 *                      @resolve {OrganizationUserResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link OrganizationUserResponse} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	updateOrgRole(orgName, userName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._updateOrgRole(
				orgName,
				userName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._updateOrgRole(
					orgName,
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
	 * Removes a user from an organization.
	 *
	 * @param {string} orgName The organization's name
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
	removeFromOrgWithHttpOperationResponse(orgName, userName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._removeFromOrg(
				orgName,
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
	 * Removes a user from an organization.
	 *
	 * @param {string} orgName The organization's name
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
	removeFromOrg(orgName, userName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._removeFromOrg(
				orgName,
				userName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._removeFromOrg(
					orgName,
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
	 * Returns a list of users that belong to an organization
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
	listForOrgWithHttpOperationResponse(orgName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._listForOrg(
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
	 * Returns a list of users that belong to an organization
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
	listForOrg(orgName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._listForOrg(orgName, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._listForOrg(
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
	 * Returns the users associated with the app specified with the given app name
	 * which belongs to the given owner.
	 *
	 * @param {string} ownerName The name of the owner
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
	 * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	listWithHttpOperationResponse(ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._list(
				ownerName,
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
	 * Returns the users associated with the app specified with the given app name
	 * which belongs to the given owner.
	 *
	 * @param {string} ownerName The name of the owner
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
	list(ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._list(ownerName, appName, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._list(
					ownerName,
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
}

module.exports = Users;

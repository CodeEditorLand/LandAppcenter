const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Returns whether push config exists.
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
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _configExists(ownerName, appName, options, callback) {
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
		"v0.1/apps/{owner_name}/{app_name}/push/notifications_config";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "HEAD";
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
		if (statusCode !== 204 && statusCode !== 404) {
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
 * Get configuration.
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
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link NotificationConfigResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getConfig(ownerName, appName, options, callback) {
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
		"v0.1/apps/{owner_name}/{app_name}/push/notifications_config";
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
					const resultMapper = new client.models[
						"NotificationConfigResult"
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
 * Set notification configuration.
 *
 * @param {object} properties Notification configurations.
 *
 * @param {string} properties.type Polymorphic Discriminator
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
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link NotificationConfigResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _setConfig(properties, ownerName, appName, options, callback) {
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
		if (properties === null || properties === undefined) {
			throw new Error("properties cannot be null or undefined.");
		}
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
		"v0.1/apps/{owner_name}/{app_name}/push/notifications_config";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

	// Create HTTP transport objects
	const httpRequest = new WebResource();
	httpRequest.method = "PUT";
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
		if (properties !== null && properties !== undefined) {
			const requestModelMapper = new client.models[
				"NotificationConfig"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				properties,
				"properties",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(properties, null, 2)}.`,
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
						"NotificationConfigResult"
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
 * Delete notification configuration.
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
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteConfig(ownerName, appName, options, callback) {
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
		"v0.1/apps/{owner_name}/{app_name}/push/notifications_config";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
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
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Get notification details.
 *
 * @param {string} notificationId The id of the notification.
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
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link NotificationDetailsResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(notificationId, ownerName, appName, options, callback) {
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
			notificationId === null ||
			notificationId === undefined ||
			typeof notificationId.valueOf() !== "string"
		) {
			throw new Error(
				"notificationId cannot be null or undefined and it must be of type string.",
			);
		}
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
		"v0.1/apps/{owner_name}/{app_name}/push/notifications/{notification_id}";
	requestUrl = requestUrl.replace(
		"{notification_id}",
		encodeURIComponent(notificationId),
	);
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
					const resultMapper = new client.models[
						"NotificationDetailsResult"
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
 * Archive push campaign(s)
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {array} values List of notification Ids.
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
function _notificationArchive(ownerName, appName, values, options, callback) {
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
		if (!Array.isArray(values)) {
			throw new Error(
				"values cannot be null or undefined and it must be of type array.",
			);
		}
		for (let i = 0; i < values.length; i++) {
			if (
				values[i] !== null &&
				values[i] !== undefined &&
				typeof values[i].valueOf() !== "string"
			) {
				throw new Error("values[i] must be of type string.");
			}
		}
	} catch (error) {
		return callback(error);
	}
	let notificationIds;
	if (values !== null && values !== undefined) {
		notificationIds = new client.models["NotificationIdList"]();
		notificationIds.values = values;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/apps/{owner_name}/{app_name}/push/notifications/campaign/archive";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

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
		if (notificationIds !== null && notificationIds !== undefined) {
			const requestModelMapper = new client.models[
				"NotificationIdList"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				notificationIds,
				"notificationIds",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(notificationIds, null, 2)}.`,
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
		const result = null;
		if (responseBody === "") responseBody = null;

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Get list of notifications
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {number} [options.top] The maximum number of results to return. (0
 * will fetch all results)
 *
 * @param {string} [options.skiptoken] The value identifies a starting point in
 * the collection of entities. This parameter along with limit is used to
 * perform pagination.
 *
 * @param {string} [options.orderby] controls the sorting order and sorting
 * based on which column
 *
 * @param {string} [options.inlinecount] Controls whether or not to include a
 * count of all the items across all pages. Possible values include:
 * 'allpages', 'none'
 *
 * @param {boolean} [options.includeArchived] Include arhived push
 * notifications
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
 *                      See {@link NotificationsListResult} for more
 *                      information.
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
	const top = options && options.top !== undefined ? options.top : 30;
	const skiptoken =
		options && options.skiptoken !== undefined
			? options.skiptoken
			: undefined;
	const orderby =
		options && options.orderby !== undefined
			? options.orderby
			: "count desc";
	const inlinecount =
		options && options.inlinecount !== undefined
			? options.inlinecount
			: "none";
	const includeArchived =
		options && options.includeArchived !== undefined
			? options.includeArchived
			: undefined;
	// Validate
	try {
		if (top !== null && top !== undefined && typeof top !== "number") {
			throw new Error("top must be of type number.");
		}
		if (top !== null && top !== undefined) {
			if (top > 2000) {
				throw new Error(
					'"top" should satisfy the constraint - "InclusiveMaximum": 2000',
				);
			}
			if (top < 0) {
				throw new Error(
					'"top" should satisfy the constraint - "InclusiveMinimum": 0',
				);
			}
		}
		if (
			skiptoken !== null &&
			skiptoken !== undefined &&
			typeof skiptoken.valueOf() !== "string"
		) {
			throw new Error("skiptoken must be of type string.");
		}
		if (
			orderby !== null &&
			orderby !== undefined &&
			typeof orderby.valueOf() !== "string"
		) {
			throw new Error("orderby must be of type string.");
		}
		if (
			inlinecount !== null &&
			inlinecount !== undefined &&
			typeof inlinecount.valueOf() !== "string"
		) {
			throw new Error("inlinecount must be of type string.");
		}
		if (
			includeArchived !== null &&
			includeArchived !== undefined &&
			typeof includeArchived !== "boolean"
		) {
			throw new Error("includeArchived must be of type boolean.");
		}
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
		"v0.1/apps/{owner_name}/{app_name}/push/notifications";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));
	const queryParameters = [];
	if (top !== null && top !== undefined) {
		queryParameters.push("$top=" + encodeURIComponent(top.toString()));
	}
	if (skiptoken !== null && skiptoken !== undefined) {
		queryParameters.push("$skiptoken=" + encodeURIComponent(skiptoken));
	}
	if (orderby !== null && orderby !== undefined) {
		queryParameters.push("$orderby=" + encodeURIComponent(orderby));
	}
	if (inlinecount !== null && inlinecount !== undefined) {
		queryParameters.push("$inlinecount=" + encodeURIComponent(inlinecount));
	}
	if (includeArchived !== null && includeArchived !== undefined) {
		queryParameters.push(
			"include_archived=" +
				encodeURIComponent(includeArchived.toString()),
		);
	}
	if (queryParameters.length > 0) {
		requestUrl += "?" + queryParameters.join("&");
	}

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
						"NotificationsListResult"
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
 * Send notification.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} notificationContent
 *
 * @param {string} notificationContent.name Notification name
 *
 * @param {string} [notificationContent.title] Notification title
 *
 * @param {string} notificationContent.body Notification body
 *
 * @param {object} [notificationContent.customData] Notification custom
 * data(priority, expiration, etc.)
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.notificationTarget]
 *
 * @param {string} options.notificationTarget.type Polymorphic Discriminator
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
 *                      See {@link NotificationSendSucceededResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _send(ownerName, appName, notificationContent, options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const notificationTarget =
		options && options.notificationTarget !== undefined
			? options.notificationTarget
			: undefined;
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
		if (notificationContent === null || notificationContent === undefined) {
			throw new Error("notificationContent cannot be null or undefined.");
		}
	} catch (error) {
		return callback(error);
	}
	let properties;
	if (
		(notificationTarget !== null && notificationTarget !== undefined) ||
		(notificationContent !== null && notificationContent !== undefined)
	) {
		properties = new client.models["NotificationDefinition"]();
		properties.notificationTarget = notificationTarget;
		properties.notificationContent = notificationContent;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/apps/{owner_name}/{app_name}/push/notifications";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));

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
		if (properties !== null && properties !== undefined) {
			const requestModelMapper = new client.models[
				"NotificationDefinition"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				properties,
				"properties",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(properties, null, 2)}.`,
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
		if (statusCode !== 202) {
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
		if (statusCode === 202) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"NotificationSendSucceededResult"
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

/** Class representing a Push. */
class Push {
	/**
	 * Create a Push.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._configExists = _configExists;
		this._getConfig = _getConfig;
		this._setConfig = _setConfig;
		this._deleteConfig = _deleteConfig;
		this._get = _get;
		this._notificationArchive = _notificationArchive;
		this._list = _list;
		this._send = _send;
	}

	/**
	 * Returns whether push config exists.
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
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	configExistsWithHttpOperationResponse(ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._configExists(
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
	 * Returns whether push config exists.
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
	configExists(ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._configExists(
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._configExists(
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

	/**
	 * Get configuration.
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
	 * @resolve {HttpOperationResponse<NotificationConfigResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getConfigWithHttpOperationResponse(ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._getConfig(
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
	 * Get configuration.
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
	 *                      @resolve {NotificationConfigResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link NotificationConfigResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	getConfig(ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._getConfig(
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._getConfig(
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

	/**
	 * Set notification configuration.
	 *
	 * @param {object} properties Notification configurations.
	 *
	 * @param {string} properties.type Polymorphic Discriminator
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
	 * @resolve {HttpOperationResponse<NotificationConfigResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	setConfigWithHttpOperationResponse(
		properties,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._setConfig(
				properties,
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
	 * Set notification configuration.
	 *
	 * @param {object} properties Notification configurations.
	 *
	 * @param {string} properties.type Polymorphic Discriminator
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
	 *                      @resolve {NotificationConfigResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link NotificationConfigResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	setConfig(properties, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._setConfig(
				properties,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._setConfig(
					properties,
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

	/**
	 * Delete notification configuration.
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
	 * @resolve {HttpOperationResponse<null>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	deleteConfigWithHttpOperationResponse(ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._deleteConfig(
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
	 * Delete notification configuration.
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
	deleteConfig(ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._deleteConfig(
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._deleteConfig(
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

	/**
	 * Get notification details.
	 *
	 * @param {string} notificationId The id of the notification.
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
	 * @resolve {HttpOperationResponse<NotificationDetailsResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getWithHttpOperationResponse(notificationId, ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._get(
				notificationId,
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
	 * Get notification details.
	 *
	 * @param {string} notificationId The id of the notification.
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
	 *                      @resolve {NotificationDetailsResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link NotificationDetailsResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	get(notificationId, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._get(
				notificationId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._get(
					notificationId,
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

	/**
	 * Archive push campaign(s)
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {array} values List of notification Ids.
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
	notificationArchiveWithHttpOperationResponse(
		ownerName,
		appName,
		values,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._notificationArchive(
				ownerName,
				appName,
				values,
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
	 * Archive push campaign(s)
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {array} values List of notification Ids.
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
	notificationArchive(ownerName, appName, values, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._notificationArchive(
				ownerName,
				appName,
				values,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._notificationArchive(
					ownerName,
					appName,
					values,
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
	 * Get list of notifications
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {number} [options.top] The maximum number of results to return. (0
	 * will fetch all results)
	 *
	 * @param {string} [options.skiptoken] The value identifies a starting point in
	 * the collection of entities. This parameter along with limit is used to
	 * perform pagination.
	 *
	 * @param {string} [options.orderby] controls the sorting order and sorting
	 * based on which column
	 *
	 * @param {string} [options.inlinecount] Controls whether or not to include a
	 * count of all the items across all pages. Possible values include:
	 * 'allpages', 'none'
	 *
	 * @param {boolean} [options.includeArchived] Include arhived push
	 * notifications
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<NotificationsListResult>} - The deserialized result object.
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
	 * Get list of notifications
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {number} [options.top] The maximum number of results to return. (0
	 * will fetch all results)
	 *
	 * @param {string} [options.skiptoken] The value identifies a starting point in
	 * the collection of entities. This parameter along with limit is used to
	 * perform pagination.
	 *
	 * @param {string} [options.orderby] controls the sorting order and sorting
	 * based on which column
	 *
	 * @param {string} [options.inlinecount] Controls whether or not to include a
	 * count of all the items across all pages. Possible values include:
	 * 'allpages', 'none'
	 *
	 * @param {boolean} [options.includeArchived] Include arhived push
	 * notifications
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
	 *                      @resolve {NotificationsListResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link NotificationsListResult} for more
	 *                      information.
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

	/**
	 * Send notification.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} notificationContent
	 *
	 * @param {string} notificationContent.name Notification name
	 *
	 * @param {string} [notificationContent.title] Notification title
	 *
	 * @param {string} notificationContent.body Notification body
	 *
	 * @param {object} [notificationContent.customData] Notification custom
	 * data(priority, expiration, etc.)
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.notificationTarget]
	 *
	 * @param {string} options.notificationTarget.type Polymorphic Discriminator
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<NotificationSendSucceededResult>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	sendWithHttpOperationResponse(
		ownerName,
		appName,
		notificationContent,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._send(
				ownerName,
				appName,
				notificationContent,
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
	 * Send notification.
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} notificationContent
	 *
	 * @param {string} notificationContent.name Notification name
	 *
	 * @param {string} [notificationContent.title] Notification title
	 *
	 * @param {string} notificationContent.body Notification body
	 *
	 * @param {object} [notificationContent.customData] Notification custom
	 * data(priority, expiration, etc.)
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.notificationTarget]
	 *
	 * @param {string} options.notificationTarget.type Polymorphic Discriminator
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
	 *                      @resolve {NotificationSendSucceededResult} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link NotificationSendSucceededResult} for more
	 *                      information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	send(ownerName, appName, notificationContent, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._send(
				ownerName,
				appName,
				notificationContent,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._send(
					ownerName,
					appName,
					notificationContent,
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

module.exports = Push;

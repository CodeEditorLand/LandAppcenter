const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Gets the URL to download the symbol upload
 *
 * @param {string} symbolUploadId The ID of the symbol upload
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
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getLocation(symbolUploadId, ownerName, appName, options, callback) {
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
			symbolUploadId === null ||
			symbolUploadId === undefined ||
			typeof symbolUploadId.valueOf() !== "string"
		) {
			throw new Error(
				"symbolUploadId cannot be null or undefined and it must be of type string.",
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
		"v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id}/location";
	requestUrl = requestUrl.replace(
		"{symbol_upload_id}",
		encodeURIComponent(symbolUploadId),
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
		if (
			statusCode !== 200 &&
			statusCode !== 403 &&
			statusCode !== 404 &&
			statusCode !== 500
		) {
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
						"SymbolUploadLocation"
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
		// Deserialize Response
		if (statusCode === 403) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError1 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError1.request =
					msRest.stripRequest(httpRequest);
				deserializationError1.response = msRest.stripResponse(response);
				return callback(deserializationError1);
			}
		}
		// Deserialize Response
		if (statusCode === 404) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError2 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError2.request =
					msRest.stripRequest(httpRequest);
				deserializationError2.response = msRest.stripResponse(response);
				return callback(deserializationError2);
			}
		}
		// Deserialize Response
		if (statusCode === 500) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError3 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError3.request =
					msRest.stripRequest(httpRequest);
				deserializationError3.response = msRest.stripResponse(response);
				return callback(deserializationError3);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Gets a symbol upload by id for the specified application
 *
 * @param {string} symbolUploadId The ID of the symbol upload
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
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(symbolUploadId, ownerName, appName, options, callback) {
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
			symbolUploadId === null ||
			symbolUploadId === undefined ||
			typeof symbolUploadId.valueOf() !== "string"
		) {
			throw new Error(
				"symbolUploadId cannot be null or undefined and it must be of type string.",
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
		"v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id}";
	requestUrl = requestUrl.replace(
		"{symbol_upload_id}",
		encodeURIComponent(symbolUploadId),
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
		if (
			statusCode !== 200 &&
			statusCode !== 403 &&
			statusCode !== 404 &&
			statusCode !== 500
		) {
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
						"SymbolUpload"
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
		// Deserialize Response
		if (statusCode === 403) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError1 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError1.request =
					msRest.stripRequest(httpRequest);
				deserializationError1.response = msRest.stripResponse(response);
				return callback(deserializationError1);
			}
		}
		// Deserialize Response
		if (statusCode === 404) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError2 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError2.request =
					msRest.stripRequest(httpRequest);
				deserializationError2.response = msRest.stripResponse(response);
				return callback(deserializationError2);
			}
		}
		// Deserialize Response
		if (statusCode === 500) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError3 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError3.request =
					msRest.stripRequest(httpRequest);
				deserializationError3.response = msRest.stripResponse(response);
				return callback(deserializationError3);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Commits or aborts the symbol upload process for a new set of symbols for the
 * specified application
 *
 * @param {string} symbolUploadId The ID of the symbol upload
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {string} status The desired operation for the symbol upload. Possible
 * values include: 'committed', 'aborted'
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
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _complete(
	symbolUploadId,
	ownerName,
	appName,
	status,
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
			symbolUploadId === null ||
			symbolUploadId === undefined ||
			typeof symbolUploadId.valueOf() !== "string"
		) {
			throw new Error(
				"symbolUploadId cannot be null or undefined and it must be of type string.",
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
		if (
			status === null ||
			status === undefined ||
			typeof status.valueOf() !== "string"
		) {
			throw new Error(
				"status cannot be null or undefined and it must be of type string.",
			);
		}
	} catch (error) {
		return callback(error);
	}
	let body;
	if (status !== null && status !== undefined) {
		body = new client.models["SymbolUploadEndRequest"]();
		body.status = status;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	let requestUrl =
		baseUrl +
		(baseUrl.endsWith("/") ? "" : "/") +
		"v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id}";
	requestUrl = requestUrl.replace(
		"{symbol_upload_id}",
		encodeURIComponent(symbolUploadId),
	);
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
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
		if (body !== null && body !== undefined) {
			const requestModelMapper = new client.models[
				"SymbolUploadEndRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, body, "body");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(body, null, 2)}.`,
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
		if (
			statusCode !== 200 &&
			statusCode !== 400 &&
			statusCode !== 403 &&
			statusCode !== 500
		) {
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
						"SymbolUpload"
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
		// Deserialize Response
		if (statusCode === 400) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError1 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError1.request =
					msRest.stripRequest(httpRequest);
				deserializationError1.response = msRest.stripResponse(response);
				return callback(deserializationError1);
			}
		}
		// Deserialize Response
		if (statusCode === 403) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError2 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError2.request =
					msRest.stripRequest(httpRequest);
				deserializationError2.response = msRest.stripResponse(response);
				return callback(deserializationError2);
			}
		}
		// Deserialize Response
		if (statusCode === 500) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError3 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError3.request =
					msRest.stripRequest(httpRequest);
				deserializationError3.response = msRest.stripResponse(response);
				return callback(deserializationError3);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Deletes a symbol upload by id for the specified application
 *
 * @param {string} symbolUploadId The ID of the symbol upload
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
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteMethod(symbolUploadId, ownerName, appName, options, callback) {
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
			symbolUploadId === null ||
			symbolUploadId === undefined ||
			typeof symbolUploadId.valueOf() !== "string"
		) {
			throw new Error(
				"symbolUploadId cannot be null or undefined and it must be of type string.",
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
		"v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id}";
	requestUrl = requestUrl.replace(
		"{symbol_upload_id}",
		encodeURIComponent(symbolUploadId),
	);
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
		if (
			statusCode !== 200 &&
			statusCode !== 403 &&
			statusCode !== 404 &&
			statusCode !== 500
		) {
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
						"SymbolUpload"
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
		// Deserialize Response
		if (statusCode === 403) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError1 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError1.request =
					msRest.stripRequest(httpRequest);
				deserializationError1.response = msRest.stripResponse(response);
				return callback(deserializationError1);
			}
		}
		// Deserialize Response
		if (statusCode === 404) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError2 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError2.request =
					msRest.stripRequest(httpRequest);
				deserializationError2.response = msRest.stripResponse(response);
				return callback(deserializationError2);
			}
		}
		// Deserialize Response
		if (statusCode === 500) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError3 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError3.request =
					msRest.stripRequest(httpRequest);
				deserializationError3.response = msRest.stripResponse(response);
				return callback(deserializationError3);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Gets a list of all uploads for the specified application
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {number} [options.top] The maximum number of results to return.
 *
 * @param {string} [options.status] Filter results by the current status of a
 * symbol upload: * all: all states in the symbol upload process. Includes
 * created, aborted, committed, processing, indexed and failed states *
 * uploaded: all states after package is uploaded. Includes committed,
 * processing, indexed and failed states * processed: symbol upload processing
 * is completed. Includes indexed and failed states.
 * . Possible values include: 'all', 'uploaded', 'processed'
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
	const status =
		options && options.status !== undefined ? options.status : undefined;
	// Validate
	try {
		if (top !== null && top !== undefined && typeof top !== "number") {
			throw new Error("top must be of type number.");
		}
		if (top !== null && top !== undefined) {
			if (top > 100) {
				throw new Error(
					'"top" should satisfy the constraint - "InclusiveMaximum": 100',
				);
			}
			if (top < 1) {
				throw new Error(
					'"top" should satisfy the constraint - "InclusiveMinimum": 1',
				);
			}
		}
		if (
			status !== null &&
			status !== undefined &&
			typeof status.valueOf() !== "string"
		) {
			throw new Error("status must be of type string.");
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
		"v0.1/apps/{owner_name}/{app_name}/symbol_uploads";
	requestUrl = requestUrl.replace(
		"{owner_name}",
		encodeURIComponent(ownerName),
	);
	requestUrl = requestUrl.replace("{app_name}", encodeURIComponent(appName));
	const queryParameters = [];
	if (top !== null && top !== undefined) {
		queryParameters.push("top=" + encodeURIComponent(top.toString()));
	}
	if (status !== null && status !== undefined) {
		queryParameters.push("status=" + encodeURIComponent(status));
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
		if (statusCode !== 200 && statusCode !== 403 && statusCode !== 500) {
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
								serializedName: "SymbolUploadElementType",
								type: {
									name: "Composite",
									className: "SymbolUpload",
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
		// Deserialize Response
		if (statusCode === 403) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError1 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError1.request =
					msRest.stripRequest(httpRequest);
				deserializationError1.response = msRest.stripResponse(response);
				return callback(deserializationError1);
			}
		}
		// Deserialize Response
		if (statusCode === 500) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError2 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError2.request =
					msRest.stripRequest(httpRequest);
				deserializationError2.response = msRest.stripResponse(response);
				return callback(deserializationError2);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/**
 * Begins the symbol upload process for a new set of symbols for the specified
 * application
 *
 * @param {object} body The symbol information
 *
 * @param {string} body.symbolType The type of the symbol for the current
 * symbol upload. Possible values include: 'Apple', 'Breakpad',
 * 'AndroidProguard', 'UWP'
 *
 * @param {string} [body.clientCallback] The callback URL that the client can
 * optionally provide to get status updates for the current symbol upload
 *
 * @param {string} [body.fileName] The file name for the symbol upload
 *
 * @param {string} [body.build] The build number. Optional for Apple. Required
 * for Android.
 *
 * @param {string} [body.version] The version number. Optional for Apple.
 * Required for Android.
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
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _create(body, ownerName, appName, options, callback) {
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
		if (body === null || body === undefined) {
			throw new Error("body cannot be null or undefined.");
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
		"v0.1/apps/{owner_name}/{app_name}/symbol_uploads";
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
		if (body !== null && body !== undefined) {
			const requestModelMapper = new client.models[
				"SymbolUploadBeginRequest"
			]().mapper();
			requestModel = client.serialize(requestModelMapper, body, "body");
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(body, null, 2)}.`,
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
		if (
			statusCode !== 200 &&
			statusCode !== 400 &&
			statusCode !== 403 &&
			statusCode !== 500
		) {
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
						"SymbolUploadBeginResponse"
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
		// Deserialize Response
		if (statusCode === 400) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError1 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError1.request =
					msRest.stripRequest(httpRequest);
				deserializationError1.response = msRest.stripResponse(response);
				return callback(deserializationError1);
			}
		}
		// Deserialize Response
		if (statusCode === 403) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError2 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError2.request =
					msRest.stripRequest(httpRequest);
				deserializationError2.response = msRest.stripResponse(response);
				return callback(deserializationError2);
			}
		}
		// Deserialize Response
		if (statusCode === 500) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"Failure"
					]().mapper();
					result = client.deserialize(
						resultMapper,
						parsedResponse,
						"result",
					);
				}
			} catch (error) {
				const deserializationError3 = new Error(
					`Error ${error} occurred in deserializing the responseBody - ${responseBody}`,
				);
				deserializationError3.request =
					msRest.stripRequest(httpRequest);
				deserializationError3.response = msRest.stripResponse(response);
				return callback(deserializationError3);
			}
		}

		return callback(null, result, httpRequest, response);
	});
}

/** Class representing a SymbolUploads. */
class SymbolUploads {
	/**
	 * Create a SymbolUploads.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._getLocation = _getLocation;
		this._get = _get;
		this._complete = _complete;
		this._deleteMethod = _deleteMethod;
		this._list = _list;
		this._create = _create;
	}

	/**
	 * Gets the URL to download the symbol upload
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
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
	 * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getLocationWithHttpOperationResponse(
		symbolUploadId,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._getLocation(
				symbolUploadId,
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
	 * Gets the URL to download the symbol upload
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
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
	getLocation(symbolUploadId, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._getLocation(
				symbolUploadId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._getLocation(
					symbolUploadId,
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
	 * Gets a symbol upload by id for the specified application
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
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
	 * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	getWithHttpOperationResponse(symbolUploadId, ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._get(
				symbolUploadId,
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
	 * Gets a symbol upload by id for the specified application
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
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
	get(symbolUploadId, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._get(
				symbolUploadId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._get(
					symbolUploadId,
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
	 * Commits or aborts the symbol upload process for a new set of symbols for the
	 * specified application
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {string} status The desired operation for the symbol upload. Possible
	 * values include: 'committed', 'aborted'
	 *
	 * @param {object} [options] Optional Parameters.
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
	completeWithHttpOperationResponse(
		symbolUploadId,
		ownerName,
		appName,
		status,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._complete(
				symbolUploadId,
				ownerName,
				appName,
				status,
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
	 * Commits or aborts the symbol upload process for a new set of symbols for the
	 * specified application
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {string} status The desired operation for the symbol upload. Possible
	 * values include: 'committed', 'aborted'
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
	complete(
		symbolUploadId,
		ownerName,
		appName,
		status,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._complete(
				symbolUploadId,
				ownerName,
				appName,
				status,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._complete(
					symbolUploadId,
					ownerName,
					appName,
					status,
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
	 * Deletes a symbol upload by id for the specified application
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
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
	 * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	deleteMethodWithHttpOperationResponse(
		symbolUploadId,
		ownerName,
		appName,
		options,
	) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._deleteMethod(
				symbolUploadId,
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
	 * Deletes a symbol upload by id for the specified application
	 *
	 * @param {string} symbolUploadId The ID of the symbol upload
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
	deleteMethod(
		symbolUploadId,
		ownerName,
		appName,
		options,
		optionalCallback,
	) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._deleteMethod(
				symbolUploadId,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._deleteMethod(
					symbolUploadId,
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
	 * Gets a list of all uploads for the specified application
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {number} [options.top] The maximum number of results to return.
	 *
	 * @param {string} [options.status] Filter results by the current status of a
	 * symbol upload: * all: all states in the symbol upload process. Includes
	 * created, aborted, committed, processing, indexed and failed states *
	 * uploaded: all states after package is uploaded. Includes committed,
	 * processing, indexed and failed states * processed: symbol upload processing
	 * is completed. Includes indexed and failed states.
	 * . Possible values include: 'all', 'uploaded', 'processed'
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
	 * Gets a list of all uploads for the specified application
	 *
	 * @param {string} ownerName The name of the owner
	 *
	 * @param {string} appName The name of the application
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {number} [options.top] The maximum number of results to return.
	 *
	 * @param {string} [options.status] Filter results by the current status of a
	 * symbol upload: * all: all states in the symbol upload process. Includes
	 * created, aborted, committed, processing, indexed and failed states *
	 * uploaded: all states after package is uploaded. Includes committed,
	 * processing, indexed and failed states * processed: symbol upload processing
	 * is completed. Includes indexed and failed states.
	 * . Possible values include: 'all', 'uploaded', 'processed'
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
	 * Begins the symbol upload process for a new set of symbols for the specified
	 * application
	 *
	 * @param {object} body The symbol information
	 *
	 * @param {string} body.symbolType The type of the symbol for the current
	 * symbol upload. Possible values include: 'Apple', 'Breakpad',
	 * 'AndroidProguard', 'UWP'
	 *
	 * @param {string} [body.clientCallback] The callback URL that the client can
	 * optionally provide to get status updates for the current symbol upload
	 *
	 * @param {string} [body.fileName] The file name for the symbol upload
	 *
	 * @param {string} [body.build] The build number. Optional for Apple. Required
	 * for Android.
	 *
	 * @param {string} [body.version] The version number. Optional for Apple.
	 * Required for Android.
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
	 * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	createWithHttpOperationResponse(body, ownerName, appName, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._create(
				body,
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
	 * Begins the symbol upload process for a new set of symbols for the specified
	 * application
	 *
	 * @param {object} body The symbol information
	 *
	 * @param {string} body.symbolType The type of the symbol for the current
	 * symbol upload. Possible values include: 'Apple', 'Breakpad',
	 * 'AndroidProguard', 'UWP'
	 *
	 * @param {string} [body.clientCallback] The callback URL that the client can
	 * optionally provide to get status updates for the current symbol upload
	 *
	 * @param {string} [body.fileName] The file name for the symbol upload
	 *
	 * @param {string} [body.build] The build number. Optional for Apple. Required
	 * for Android.
	 *
	 * @param {string} [body.version] The version number. Optional for Apple.
	 * Required for Android.
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
	create(body, ownerName, appName, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._create(
				body,
				ownerName,
				appName,
				options,
				optionalCallback,
			);
		} else {
			return new Promise((resolve, reject) => {
				this._create(
					body,
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

module.exports = SymbolUploads;

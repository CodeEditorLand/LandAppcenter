const msRest = require("ms-rest");
const WebResource = msRest.WebResource;

/**
 * Delete the api_token object with the specific id
 *
 * @param {string} apiTokenId The unique ID (UUID) of the api token
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
 *                      See {@link ErrorResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteMethod(apiTokenId, options, callback) {
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
			apiTokenId === null ||
			apiTokenId === undefined ||
			typeof apiTokenId.valueOf() !== "string"
		) {
			throw new Error(
				"apiTokenId cannot be null or undefined and it must be of type string.",
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
		"v0.1/api_tokens/{api_token_id}";
	requestUrl = requestUrl.replace(
		"{api_token_id}",
		encodeURIComponent(apiTokenId),
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
		if (
			statusCode !== 204 &&
			statusCode !== 400 &&
			statusCode !== 401 &&
			statusCode !== 404
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
		if (statusCode === 400) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"ErrorResponse"
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
		if (statusCode === 401) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"ErrorResponse"
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
						"ErrorResponse"
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
 * Returns api tokens for the authenticated user
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
function _list(options, callback) {
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
		baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/api_tokens";

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
		if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401) {
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
								serializedName:
									"ApiTokensGetResponseElementType",
								type: {
									name: "Composite",
									className: "ApiTokensGetResponse",
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
		if (statusCode === 400) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"ErrorResponse"
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
		if (statusCode === 401) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"ErrorResponse"
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
 * Creates a new API token
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.description] The description of the token
 *
 * @param {array} [options.scope] The scope for this token.
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
function _newMethod(options, callback) {
	/* jshint validthis: true */
	const client = this.client;
	if (!callback && typeof options === "function") {
		callback = options;
		options = null;
	}
	if (!callback) {
		throw new Error("callback cannot be null.");
	}
	const description =
		options && options.description !== undefined
			? options.description
			: undefined;
	const scope =
		options && options.scope !== undefined ? options.scope : undefined;
	// Validate
	try {
		if (
			description !== null &&
			description !== undefined &&
			typeof description.valueOf() !== "string"
		) {
			throw new Error("description must be of type string.");
		}
		if (Array.isArray(scope)) {
			for (let i = 0; i < scope.length; i++) {
				if (
					scope[i] !== null &&
					scope[i] !== undefined &&
					typeof scope[i].valueOf() !== "string"
				) {
					throw new Error("scope[i] must be of type string.");
				}
			}
		}
	} catch (error) {
		return callback(error);
	}
	let description1;
	if (
		(description !== null && description !== undefined) ||
		(scope !== null && scope !== undefined)
	) {
		description1 = new client.models["ApiTokensCreateRequest"]();
		description1.description = description;
		description1.scope = scope;
	}

	// Construct URL
	const baseUrl = this.client.baseUri;
	const requestUrl =
		baseUrl + (baseUrl.endsWith("/") ? "" : "/") + "v0.1/api_tokens";

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
		if (description1 !== null && description1 !== undefined) {
			const requestModelMapper = new client.models[
				"ApiTokensCreateRequest"
			]().mapper();
			requestModel = client.serialize(
				requestModelMapper,
				description1,
				"description1",
			);
			requestContent = JSON.stringify(requestModel);
		}
	} catch (error) {
		const serializationError = new Error(
			`Error "${error.message}" occurred in serializing the ` +
				`payload - ${JSON.stringify(description1, null, 2)}.`,
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
		if (statusCode !== 201 && statusCode !== 400 && statusCode !== 401) {
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
		if (statusCode === 201) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"ApiTokensCreateResponse"
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
						"ErrorResponse"
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
		if (statusCode === 401) {
			let parsedResponse = null;
			try {
				parsedResponse = JSON.parse(responseBody);
				result = JSON.parse(responseBody);
				if (parsedResponse !== null && parsedResponse !== undefined) {
					const resultMapper = new client.models[
						"ErrorResponse"
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

/** Class representing a ApiTokens. */
class ApiTokens {
	/**
	 * Create a ApiTokens.
	 * @param {AppCenterClient} client Reference to the service client.
	 */
	constructor(client) {
		this.client = client;
		this._deleteMethod = _deleteMethod;
		this._list = _list;
		this._newMethod = _newMethod;
	}

	/**
	 * Delete the api_token object with the specific id
	 *
	 * @param {string} apiTokenId The unique ID (UUID) of the api token
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {object} [options.customHeaders] Headers that will be added to the
	 * request
	 *
	 * @returns {Promise} A promise is returned
	 *
	 * @resolve {HttpOperationResponse<ErrorResponse>} - The deserialized result object.
	 *
	 * @reject {Error} - The error object.
	 */
	deleteMethodWithHttpOperationResponse(apiTokenId, options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._deleteMethod(
				apiTokenId,
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
	 * Delete the api_token object with the specific id
	 *
	 * @param {string} apiTokenId The unique ID (UUID) of the api token
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
	 *                      @resolve {ErrorResponse} - The deserialized result object.
	 *
	 *                      @reject {Error} - The error object.
	 *
	 * {function} optionalCallback(err, result, request, response)
	 *
	 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
	 *
	 *                      {object} [result]   - The deserialized result object if an error did not occur.
	 *                      See {@link ErrorResponse} for more information.
	 *
	 *                      {object} [request]  - The HTTP Request object if an error did not occur.
	 *
	 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
	 */
	deleteMethod(apiTokenId, options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._deleteMethod(apiTokenId, options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._deleteMethod(
					apiTokenId,
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
	 * Returns api tokens for the authenticated user
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
	listWithHttpOperationResponse(options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._list(options, (err, result, request, response) => {
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
	 * Returns api tokens for the authenticated user
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
	list(options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._list(options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._list(options, (err, result, request, response) => {
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
	 * Creates a new API token
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.description] The description of the token
	 *
	 * @param {array} [options.scope] The scope for this token.
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
	newMethodWithHttpOperationResponse(options) {
		const client = this.client;
		return new Promise((resolve, reject) => {
			this._newMethod(options, (err, result, request, response) => {
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
	 * Creates a new API token
	 *
	 * @param {object} [options] Optional Parameters.
	 *
	 * @param {string} [options.description] The description of the token
	 *
	 * @param {array} [options.scope] The scope for this token.
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
	newMethod(options, optionalCallback) {
		const client = this.client;
		if (!optionalCallback && typeof options === "function") {
			optionalCallback = options;
			options = null;
		}
		if (optionalCallback) {
			return this._newMethod(options, optionalCallback);
		} else {
			return new Promise((resolve, reject) => {
				this._newMethod(options, (err, result, request, response) => {
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
}

module.exports = ApiTokens;

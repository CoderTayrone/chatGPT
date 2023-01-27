"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/message";
exports.ids = ["pages/api/message"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "(api)/./pages/api/message.js":
/*!******************************!*\
  !*** ./pages/api/message.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openAI = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    const sentMessage = req.body.Body || \"\";\n    let replyToBeSent = \"\";\n    if (sentMessage.trim().length === 0) {\n        replyToBeSent = \"We could not get your message. Please try again\";\n    } else {\n        try {\n            const completion = await openAI.createCompletion({\n                model: \"text-davinci-003\",\n                prompt: req.body.Body,\n                temperature: 0.6,\n                n: 1,\n                max_tokens: 50\n            });\n            replyToBeSent = completion.data.choices[0].text;\n        } catch (error) {\n            if (error.response) {\n                console.log(error.response);\n                replyToBeSent = \"There was an issue with the server\";\n            } else {\n                replyToBeSent = \"An error occurred during your request.\";\n            }\n        }\n    }\n    messageResponse.message(replyToBeSent);\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHb0I7QUFDaEIsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3hDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDbEM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUNkLGVBQWVNLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hELE1BQU1DLG9CQUFvQkMscUVBQXlDO0lBQ25FLElBQUlFLGtCQUFrQixJQUFJSDtJQUUxQixNQUFNSSxjQUFjTixJQUFJTyxJQUFJLENBQUNDLElBQUksSUFBSTtJQUN6QyxJQUFJQyxnQkFBZ0I7SUFDcEIsSUFBSUgsWUFBWUksSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUNyQ0YsZ0JBQWdCO0lBQ2hCLE9BQU87UUFDUCxJQUFJO1lBQ0osTUFBTUcsYUFBYSxNQUFNZCxPQUFPZSxnQkFBZ0IsQ0FBQztnQkFDakRDLE9BQU87Z0JBQ1BDLFFBQVFmLElBQUlPLElBQUksQ0FBQ0MsSUFBSTtnQkFDckJRLGFBQWE7Z0JBQ2JDLEdBQUc7Z0JBQ0hDLFlBQVk7WUFFWjtZQUNBVCxnQkFBZ0JHLFdBQVdPLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUMvQyxFQUFFLE9BQU9DLE9BQU87WUFDaEIsSUFBSUEsTUFBTUMsUUFBUSxFQUFFO2dCQUNoQkMsUUFBUUMsR0FBRyxDQUFDSCxNQUFNQyxRQUFRO2dCQUM5QmQsZ0JBQWdCO1lBQ2hCLE9BQU87Z0JBQ1BBLGdCQUFnQjtZQUNoQixDQUFDO1FBQ0Q7SUFDQSxDQUFDO0lBQ0RKLGdCQUFnQnFCLE9BQU8sQ0FBQ2pCO0lBQ3hCLGdCQUFnQjtJQUNoQlIsSUFBSTBCLFNBQVMsQ0FBQyxLQUFLO1FBQ25CLGdCQUFnQjtJQUNoQjtJQUNBMUIsSUFBSTJCLEdBQUcsQ0FBQ3ZCLGdCQUFnQndCLFFBQVE7QUFDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doYXRzYXBwLWdwdC1tYWluLy4vcGFnZXMvYXBpL21lc3NhZ2UuanM/ZmRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29uZmlndXJhdGlvbixcclxuICAgIE9wZW5BSUFwaVxyXG4gICAgfSBmcm9tIFwib3BlbmFpXCI7XHJcbiAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb3BlbkFJID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcclxuICAgIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IE1lc3NhZ2luZ1Jlc3BvbnNlID0gcmVxdWlyZSgndHdpbGlvJykudHdpbWwuTWVzc2FnaW5nUmVzcG9uc2U7XHJcbiAgICB2YXIgbWVzc2FnZVJlc3BvbnNlID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XHJcblxyXG4gICAgY29uc3Qgc2VudE1lc3NhZ2UgPSByZXEuYm9keS5Cb2R5IHx8ICcnO1xyXG5sZXQgcmVwbHlUb0JlU2VudCA9IFwiXCI7XHJcbmlmIChzZW50TWVzc2FnZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbnJlcGx5VG9CZVNlbnQgPSBcIldlIGNvdWxkIG5vdCBnZXQgeW91ciBtZXNzYWdlLiBQbGVhc2UgdHJ5IGFnYWluXCI7XHJcbn0gZWxzZSB7XHJcbnRyeSB7XHJcbmNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuQUkuY3JlYXRlQ29tcGxldGlvbih7XHJcbm1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIiwgLy8gcmVxdWlyZWRcclxucHJvbXB0OiByZXEuYm9keS5Cb2R5LCAvLyBjb21wbGV0aW9uIGJhc2VkIG9uIHRoaXNcclxudGVtcGVyYXR1cmU6IDAuNiwgLy9cclxubjogMSxcclxubWF4X3Rva2VuczogNTAsXHJcbi8vIHN0b3A6IFwiLlwiXHJcbn0pO1xyXG5yZXBseVRvQmVTZW50ID0gY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dFxyXG59IGNhdGNoIChlcnJvcikge1xyXG5pZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKVxyXG5yZXBseVRvQmVTZW50ID0gXCJUaGVyZSB3YXMgYW4gaXNzdWUgd2l0aCB0aGUgc2VydmVyXCJcclxufSBlbHNlIHsgLy8gZXJyb3IgZ2V0dGluZyByZXNwb25zZVxyXG5yZXBseVRvQmVTZW50ID0gXCJBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LlwiO1xyXG59XHJcbn1cclxufVxyXG5tZXNzYWdlUmVzcG9uc2UubWVzc2FnZShyZXBseVRvQmVTZW50KTtcclxuLy8gc2VuZCByZXNwb25zZVxyXG5yZXMud3JpdGVIZWFkKDIwMCwge1xyXG4nQ29udGVudC1UeXBlJzogJ3RleHQveG1sJ1xyXG59KTtcclxucmVzLmVuZChtZXNzYWdlUmVzcG9uc2UudG9TdHJpbmcoKSk7XHJcbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuQUkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiTWVzc2FnaW5nUmVzcG9uc2UiLCJyZXF1aXJlIiwidHdpbWwiLCJtZXNzYWdlUmVzcG9uc2UiLCJzZW50TWVzc2FnZSIsImJvZHkiLCJCb2R5IiwicmVwbHlUb0JlU2VudCIsInRyaW0iLCJsZW5ndGgiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJuIiwibWF4X3Rva2VucyIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsImVycm9yIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIndyaXRlSGVhZCIsImVuZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/message.js"));
module.exports = __webpack_exports__;

})();
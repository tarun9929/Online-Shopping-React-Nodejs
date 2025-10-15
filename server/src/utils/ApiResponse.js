class ApiResponse {
    constructor (message, data = null , statusCode) {
        this.statusCode = statusCode;
        this.data = data;
        this.success = statusCode < 400;
        this.message = message || "success";
    }
}


export default ApiResponse;
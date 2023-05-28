
export default class Validation {
    isEmpty(value) {
        return (value == null || value === undefined || !value || value.length === 0) ? true : false;
    }

    isNotEmpty(value) {
        if (typeof value === "object") {
            return true
        }
        return (value == null || value === undefined || !value || value.length === 0 || !value.trim()) ? false : true;
    }

}

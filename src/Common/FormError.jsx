import React from "react"

const FormError = ({ className, error, success, show = false }) => {
    return show === true && <div className={`errorInputMsg`}>
        {error}
        </div>
}

export default FormError
import PropTypes from "prop-types"
import { forwardRef } from "react"

import InputLabel from "./InputLabel"
const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        id="time"
        className="placeholder:text-brand-text-gray focus:outline-brand-primary border-brand-border rounded-lg border border-solid px-4 py-3 placeholder:text-sm focus:outline-solid"
        ref={ref}
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
      {props.errorMessage && (
        <p className="text-left text-xs text-red-500">{props.errorMessage}</p>
      )}
    </div>
  )
})
TimeSelect.displayName = "TimeSelect"

TimeSelect.propTypes = {
  errorMessage: PropTypes.string,
}

export default TimeSelect

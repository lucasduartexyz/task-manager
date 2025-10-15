const InputLabel = ({ children, ...rest }) => {
  return (
    <label className="text-sm font-semibold text-[#3538E]" {...rest}>
      {children}
    </label>
  )
}

export default InputLabel

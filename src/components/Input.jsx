const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <label className="text-sm font-semibold text-[#3538E]" htmlFor={rest.id}>
        {label}
      </label>
      <input
        {...rest}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder:text-sm placeholder:text-[#9A9C9F] focus:outline-[#00ad85] focus:outline-solid"
      />
    </div>
  )
}

export default Input

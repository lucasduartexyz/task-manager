const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="flex gap-3 border-b border-solid border-[#F4F4F5] pb-1">
      {icon}
      <p className="text-sm text-[#9a9c9f]">{title}</p>
    </div>
  )
}

export default TasksSeparator

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-[rgba(0,173,181,0.1)] text-[#00ADB5]"
    }
    if (task.status === "in_progress") {
      return "bg-[rgba(255,170,4,0.1)] text-[#FFAA04]"
    }
    if (task.status === "not_started") {
      return "bg-[rgba(53,56,62,0.1)] text-[#35383E]"
    }
  }

  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      {task.title}
    </div>
  )
}

export default TaskItem

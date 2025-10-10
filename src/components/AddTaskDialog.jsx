import { createPortal } from "react-dom"

const AddTaskDialog = ({ isOpen }) => {
  if (!isOpen) {
    return null
  }
  return createPortal(
    <div className="h-sreen fixed top-0 bottom-0 left-0 flex w-screen items-center justify-center backdrop-blur">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-xl font-semibold text-[#35383e]">Nova tarefa</h2>
        <p className="mt-1 text-sm text-[#9a9c9f]">
          Insira as informações abaixo
        </p>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDialog

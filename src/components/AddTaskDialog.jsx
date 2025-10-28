import "./AddTaskDialog.css"

import { useRef } from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { v4 } from "uuid"

import Button from "./Button"
import Input from "./Input"
import TimeSelect from "./TimeSelect"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [errors, setErrors] = useState([])
  const nodeRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const timeRef = useRef()

  const handleSaveClick = () => {
    const newErrors = []
    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const time = timeRef.current.value
    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        message: "O titulo é obrigatório",
      })
    }
    if (!time.trim()) {
      newErrors.push({
        inputName: "time",
        message: "O horário é obrigatório",
      })
    }
    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        message: "A descrição é obrigatória",
      })
    }

    setErrors(newErrors)

    if (newErrors.length > 0) {
      return
    }

    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: "not_started",
    })
    handleClose()
  }

  const titleError = errors.find((error) => error.inputName == "title")
  const timeError = errors.find((error) => error.inputName == "time")
  const descriptionError = errors.find(
    (error) => error.inputName == "description"
  )
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="h-sreen fixed top-0 bottom-0 left-0 flex w-screen items-center justify-center backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-brand-dark-blue text-xl font-semibold">
                Nova tarefa
              </h2>
              <p className="text-brand-text-gray mt-1 mb-4 text-sm">
                Insira as informações abaixo
              </p>
              <div className="flex w-[366px] flex-col space-y-4">
                <Input
                  errorMessage={titleError?.message}
                  id="title"
                  placeholder="Insira o título da tarefa"
                  label="Titulo"
                  ref={titleRef}
                />

                <TimeSelect errorMessage={timeError?.message} ref={timeRef} />

                <Input
                  errorMessage={descriptionError?.message}
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  ref={descriptionRef}
                />

                <div className="flex gap-3">
                  <Button
                    size="large"
                    variant="secondary"
                    className="w-full"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={() => handleSaveClick()}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog

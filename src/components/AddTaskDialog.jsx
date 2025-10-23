import "./AddTaskDialog.css"

import { useEffect, useRef } from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { v4 } from "uuid"

import Button from "./Button"
import Input from "./Input"
import InputLabel from "./InputLabel"
import TimeSelect from "./TimeSelect"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("morning")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])
  const nodeRef = useRef()
  useEffect(() => {
    if (!isOpen) {
      setTitle("")
      setTime("morning")
      setDescription("")
    }
  }, [isOpen])

  const handleSaveClick = () => {
    const newErrors = []
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
              <h2 className="text-xl font-semibold text-[#35383e]">
                Nova tarefa
              </h2>
              <p className="mt-1 mb-4 text-sm text-[#9a9c9f]">
                Insira as informações abaixo
              </p>
              <div className="flex w-[366px] flex-col space-y-4">
                <Input
                  errorMessage={titleError?.message}
                  id="title"
                  placeholder="Insira o título da tarefa"
                  label="Titulo"
                  onChange={(event) => setTitle(event.target.value)}
                />

                <TimeSelect
                  errorMessage={timeError?.message}
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />

                <Input
                  errorMessage={descriptionError?.message}
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  onChange={(event) => setDescription(event.target.value)}
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

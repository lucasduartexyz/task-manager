import "./AddTaskDialog.css"

import { useRef } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"

import Button from "./Button"
import Input from "./Input"
import InputLabel from "./InputLabel"
import TimeSelect from "./TimeSelect"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const nodeRef = useRef()

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
                  id="title"
                  placeholder="Insira o título da tarefa"
                  label="Titulo"
                />

                <TimeSelect />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
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
                  <Button size="large" className="w-full">
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

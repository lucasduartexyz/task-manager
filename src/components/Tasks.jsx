import Button from "./Button"
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import CloudSun from "../assets/icons/cloud-sun.svg?react"

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00AD85]">
            Minhas Tarefas
          </span>

          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas <TrashIcon />
          </Button>

          <Button>
            Nova Tarefas <AddIcon />
          </Button>
        </div>
      </div>

      {/* LISTA DE TAREFAS */}

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <div className="flex gap-3 border-b border-solid border-[#F4F4F5] pb-1">
            <SunIcon />
            <p className="text-sm text-[#9a9c9f]">Manhã</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-3 border-b border-solid border-[#F4F4F5] pb-1">
            <CloudSun />
            <p className="text-sm text-[#9a9c9f]">Tarde</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-3 border-b border-solid border-[#F4F4F5] pb-1">
            <MoonIcon />
            <p className="text-sm text-[#9a9c9f]">Noite</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks

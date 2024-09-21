import { Task } from '../types'

'use client'

import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TaskList from './TaskList'

interface TaskState {
  [key: string]: Task[]
}

interface BoardProps {
  tasks: Task[]
}

export default function Board({ tasks }: BoardProps) {
  const [taskState, setTaskState] = useState<TaskState>({
    notStarted: tasks.filter((_, index) => index % 3 === 0),
    ongoing: tasks.filter((_, index) => index % 3 === 1),
    completed: tasks.filter((_, index) => index % 3 === 2),
  })

  const onDrop = (item: Task, listId: string) => {
    setTaskState((prevTasks) => {
      const newTasks = { ...prevTasks }
      const sourceListId = Object.keys(newTasks).find((key) =>
        newTasks[key].some((task) => task.id === item.id)
      )

      if (sourceListId) {
        newTasks[sourceListId] = newTasks[sourceListId].filter((task) => task.id !== item.id)
        newTasks[listId] = [...newTasks[listId], item]
      }

      return newTasks
    })
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <TaskList id="notStarted" title="Not Started" tasks={taskState.notStarted} onDrop={onDrop} />
        <TaskList id="ongoing" title="Ongoing" tasks={taskState.ongoing} onDrop={onDrop} />
        <TaskList id="completed" title="Completed" tasks={taskState.completed} onDrop={onDrop} />
      </div>
    </DndProvider>
  )
}
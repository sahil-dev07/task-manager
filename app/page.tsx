import { Task } from './types'
import Board from './components/Board'
import Calendar from './components/Calendar'
import Header from './components/Header'

const tasks: Task[] = [
  { id: 'T1', title: 'Complete project proposal', description: 'Finish the draft and send for review', dueDate: '2023-06-15' },
  { id: 'T2', title: 'Team meeting', description: 'Discuss project timeline and milestones', dueDate: '2023-06-16' },
  { id: 'T3', title: 'Client presentation', description: 'Prepare slides and practice delivery', dueDate: '2023-06-17' },
  { id: 'T4', title: 'Code review', description: 'Review pull requests and provide feedback', dueDate: '2023-06-14' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your Task Manager</h1>
          <p className="text-xl text-gray-600">Organize, prioritize, and conquer your day</p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Task Board</h2>
              <Board tasks={tasks} />
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Tasks</h2>
              <Calendar tasks={tasks} />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{tasks.length}</p>
                  <p className="text-gray-600">Total Tasks</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">2</p>
                  <p className="text-gray-600">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

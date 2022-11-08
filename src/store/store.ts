import create from "zustand"

type Student = {
    id:number,
    name:string,
}

interface studentStore{
    students: Student[]
    addStudent: (student: Student) => void
    deleteStudent: (id: number) => void

}

export const useStudentStore = create<studentStore>(set => ({
    students: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "John Smith" },
    ],
    addStudent: (student) => {
        set(state => ({
            students: [...state.students , student]
        }))

    },
    deleteStudent: (id) => {
        set(state => ({
            students : state.students.filter(student => student.id !== id)
        }))

    }
    
}))

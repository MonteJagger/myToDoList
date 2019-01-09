import { ToDoItem } from './todo-item';

// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday
// 0 = Sunday

export const LISTITEMS: ToDoItem[] = [
    {
        toDo: "finish hw",
        isProgress: true,
        isCompleted: false,
        dateCreated: new Date('jan-1-2019'),
        dateProgressStart: setTestDay(1),
        dateCompletion: null,
        forDay: setTestDay(1)
    },
    {
        toDo: "finish hw",
        isProgress: true,
        isCompleted: false,
        dateCreated: setTestDay(1),
        dateProgressStart: setTestDay(1),
        dateCompletion: null,
        forDay: setTestDay(1)
    },
    {
        toDo: "bath",
        isProgress: false,
        isCompleted: true,
        dateCreated: setTestDay(1),
        dateProgressStart: setTestDay(1),
        dateCompletion: setTestDay(1),
        forDay: setTestDay(1)
    },
    {
        toDo: "read ch. 1",
        isProgress: false,
        isCompleted: true,
        dateCreated: setTestDay(2),
        dateProgressStart: setTestDay(3),
        dateCompletion: setTestDay(4),
        forDay: setTestDay(2)
    },
    {
        toDo: "do ch. 1 review",
        isProgress: true,
        isCompleted: false,
        dateCreated: setTestDay(4),
        dateProgressStart: setTestDay(4),
        dateCompletion: null,
        forDay: setTestDay(4)
    },
    {
        toDo: "workout",
        isProgress: true,
        isCompleted: true,
        dateCreated: setTestDay(2),
        dateProgressStart: setTestDay(5),
        dateCompletion: setTestDay(5),
        forDay: setTestDay(5)
    },
    {
        toDo: "read a chapter",
        isProgress: true,
        isCompleted: false,
        dateCreated: setTestDay(1),
        dateProgressStart: setTestDay(6),
        dateCompletion: null,
        forDay: setTestDay(6)
    },
    {
        toDo: "workout",
        isProgress: false,
        isCompleted: false,
        dateCreated: setTestDay(2),
        dateProgressStart: null,
        dateCompletion: null,
        forDay: setTestDay(6)
    },
    {
        toDo: "workout",
        isProgress: false,
        isCompleted: false,
        dateCreated: setTestDay(2),
        dateProgressStart: null,
        dateCompletion: null,
        forDay: setTestDay(0)
    },
]

function setToSunday() {
    const currentDate = new Date();
    const day: number = currentDate.getDay();
    const newDate: Date = new Date();

    if (day === 1) { // if Monday go to upcoming Sunday
        newDate.setTime(currentDate.getTime()+6*86400000);
    }
    else if (day === 2) { // if Tuesday go to upcoming Sunday
        newDate.setTime(currentDate.getTime()+5*86400000);
    }
    else if (day === 3) { // if Wednesday go to upcoming Sunday
        newDate.setTime(currentDate.getTime()+4*86400000);
    }
    else if (day === 4) { // if Thursday go to upcoming Sunday
        newDate.setTime(currentDate.getTime()+3*86400000);
    }
    else if (day === 5) { // if Friday go to upcoming Sunday
        newDate.setTime(currentDate.getTime()+2*86400000);
    }   
    else if (day === 6) { // if Saturday go to upcoming Sunday
        newDate.setTime(currentDate.getTime()+86400000);
    }
    else { // if Sunday it is the same
        newDate.setTime(currentDate.getTime());
    }

    return newDate;
}

function setTestDay(day: number) {
    const sunday : Date = setToSunday();
    const newDate: Date = new Date();
    newDate.setTime(sunday.getTime()-(7-day)*86400000);
    
    return newDate;
}
export default function appReducer(state, action) {
    console.log(state, action);

    switch (action.type) {
        case 'ADD_TASK':
            return  {
                tasks: [...state.tasks, action.payload]
            }

        case 'DELETE_TASK':
            console.log(action.payload)
            return {
                tasks: state.tasks.filter( task => task.id !== action.payload )
            } 
    
        default:
            break;
    }

    
}
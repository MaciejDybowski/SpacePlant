const initState = {
    projects: [
        {id: '1', title: 'sialala', content:"asdasdasdsadsa"},
        {id: '2', title: 'qwe', content:"asdasdasdczxxsadsa"},
        {id: '3', title: 'sialasdasala', content:"asdasdasdzxczxcsadsa"},
    ]
}

const projectReducer = ( state = initState , action) => {
    switch(action.type){
        case "add_project" :
            console.log(action.project)
            return state
        default:
            return state
    }
}

export default projectReducer;
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch(action.type){
        case 'addBlog':
            return [...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title, 
                    content: action.payload.content 
                }];
        case 'deleteBlog':
            return state.filter(blog => blog.id!==action.payload)
        case 'editBlog':
            return state.map(blog => {
                return blog.id == action.payload.id ? action.payload : blog
            })
        default: return state;
    }
}

const addBlog = dispatch => {
    return (title, content, callback) => { 
        dispatch({ type: 'addBlog', payload: {title, content} })
        callback()
    }
}
const deleteBlog = dispatch => {
    return (id) => {
        dispatch({ type: 'deleteBlog', payload: id })
    }
}
const editBlog = dispatch => {
    return (id, title, content) => {
        dispatch({ type: 'editBlog', payload: {id, title, content} })
    }
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlog, deleteBlog, editBlog}, []);
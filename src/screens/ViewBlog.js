import React,{ useContext } from 'react';
import { View, Text} from 'react-native';
import { styles } from './Index'
import { Context } from '../context/BlogContext'

const ViewBlog = ({route}) => {
    const {id} = route.params;
    const {state} = useContext(Context);
    const blog = state.filter((blog) => blog.id===id)[0];

    return (
        <View style={styles.container}>
            <Text> {blog.content} </Text>
        </View>
    )

}


export default ViewBlog;

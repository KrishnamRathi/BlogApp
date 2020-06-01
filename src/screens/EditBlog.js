import React,{ useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditBlog = ({navigation, route}) => {
    const { editBlog } = useContext(Context)
    const blog = route.params.blog
    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);
    const id = blog.id;
    return(
        <View>
            <Text style={{fontSize: 20}}>Title:</Text>
            <TextInput style={styles.inputField} value={title} onChangeText={text => setTitle(text)} />
            <Text style={{fontSize: 20}}>Content:</Text>
            <TextInput style={styles.inputField} value={content} onChangeText={(text) => setContent(text)} />
            <Button title="Done" onPress={() => {
                editBlog(id, title, content);
                navigation.goBack()
                }} 
            />
        </View>
    )
}

const styles=StyleSheet.create({
    inputField:{
        borderWidth: 1,
        margin: 5,
        padding: 2,
    }
})

export default EditBlog;
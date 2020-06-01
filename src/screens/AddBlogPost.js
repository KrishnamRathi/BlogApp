import React,{ useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const AddBlogPost = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlog } = useContext(Context);
    return(
        <View>
            <Text style={{fontSize: 20}}>Title:</Text>
            <TextInput style={styles.inputField} value={title} onChangeText={text => setTitle(text)} />
            <Text style={{fontSize: 20}}>Content:</Text>
            <TextInput style={styles.inputField} value={content} onChangeText={(text) => setContent(text)} />
            <Button title="Add Post" onPress={ () => {
                addBlog(title, content, () => navigation.navigate('Index') )
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

export default AddBlogPost;
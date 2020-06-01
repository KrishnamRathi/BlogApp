import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';


const Index = ({navigation}) => {
    const { state, deleteBlog } = useContext(BlogContext)
    return (
        <View style={styles.container} >
                <FlatList
                    data={state}
                    keyExtractor={blog => blog.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.listStyles} onPress={() => navigation.navigate('ViewBlog', { id:item.id, title: item.title, content: item.content })}>
                                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                                <Button title="Delete" color={'red'} onPress={() => deleteBlog(item.id)} />
                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
    )
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listStyles: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        paddingVertical: 20,
        alignItems: 'center'
    },
})

export default Index;

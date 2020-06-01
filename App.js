import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Index from './src/screens/Index'
import ViewBlog from './src/screens/ViewBlog'
import AddBlogPost from './src/screens/AddBlogPost'
import EditBlog from './src/screens/EditBlog'
import { Provider } from './src/context/BlogContext'
import { Context } from './src/context/BlogContext'


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" >
        <Stack.Screen name="Index" component={Index} options={({navigation}) => ({ title: 'Blog',
            headerRight: () => <Button title="Add" color={"green"} onPress={() => navigation.navigate('AddBlogPost')} />
          })} 
        />

        <Stack.Screen name="ViewBlog" component={ViewBlog} options={({route, navigation}) => ({title: route.params.title,
            headerRight: () => <Button title="Edit" onPress={() => navigation.navigate('EditBlog', {blog: route.params})} />
          })}  
        />
        <Stack.Screen name="AddBlogPost" component={AddBlogPost} />
        <Stack.Screen name="EditBlog" component={EditBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => (
  <Provider>
    <Routes/>
  </Provider>
);

export default App;

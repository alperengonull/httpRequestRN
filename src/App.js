import {
  Button,
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    setLoading(true);
    const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );

  useEffect(() =>{
    fetchData();
  },[])

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
      <Button title="Fetch Data" onPress={fetchData} />
    </SafeAreaView>
  );
};

export default App;

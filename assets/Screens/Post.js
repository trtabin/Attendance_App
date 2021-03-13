import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';


export default function App() {
  const [data, setData] = React.useState([
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "আমার সোনার বাংলা",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    ]);
  return(

    <View style={{backgroundColor: "#eee"}} >
      <FlatList 
        data = {data}
        renderItem = { ({ item }) => (
            <View style={{margin: 10, padding: 20, backgroundColor:'#fff'}}>
              <View style={{flex: 1 , flexDirection: 'row'}}>
                <Image
                    style={{width:50, height:50, borderRadius:100}}
                    source={require('./assets/image/tabin.JPG')}
                />
                <Text style={{fontSize: 25, marginLeft: 20}}>Tahmdur Rahman Tabin</Text>
              </View>
              <View style={{flex:15}}>
                <Text style={{fontSize: 15}}>{item.body}</Text>
              </View>

            </View>

          )}
      />
    </View>
  );
}







import {useEffect, useState} from "react";
import {FlatList, Pressable, Text} from "react-native";



export function TestComponent() {

  const [nombreClic, setNombreClic] = useState(99)

  //const [jsxUserList, jsxUserList] = useState(99)


  
  //useEffect(() => {

  //  fetch("https://jsonplaceholder.typicode.com/users")
   //     .then(reponse => reponse.json())
    //    .then(users => jsxUserList = users.map(
   //         (user: {name : string}) => (<Text key={user.name}>{user.name}</Text>)
   //     ))
    //fetch(https://172.18.112.1.)
  //}, []); // se déclenche une seule fois, à cause du tableau vide

  type UserType = {name: string}
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
         .then(reponse => reponse.json())
         .then(users => setUsers(users))
    //fetch(https://172.18.112.1.)
    }, []); // se déclenche une seule fois, à cause du tableau vide


  //prend une Maj, c'est un composant
  const UserCard = ({user}: {user : UserType}) => (
      <Text>{user.name}</Text>
  );

  return <>
    <FlatList data={users} renderItem={
      ({item}) => (
          <UserCard user ={item}></UserCard>)
    }></FlatList>
    </>

}

import {Text} from "react-native";
import {UserType} from "@/models/user.d";

type UserCardProps = {user : UserType}

export function UserCard  ({user} : UserCardProps) {
    return (

        <Text>{user.name}</Text>
    );
}
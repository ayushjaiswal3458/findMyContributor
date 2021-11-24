
import { Entity } from "./Entity";
import { User } from "./User";

export interface Group extends Entity{
    
    name:                 string;
    description:          string;
    group_image_url:      string;
    creator:              User ;
    participants:         User[];
    invitedMembers:       User[];
}
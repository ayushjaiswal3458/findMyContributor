import { Entity } from "./Entity";

export interface User extends Entity {
  _type:                      string;
    guid:                        string;
    first_name:                  string;
    middle_name:                 string;
    last_name:                   string;
   
    profile_pic_url:             string;
    email:                       string;
    job_type:                    string;
    phone_number:                string;
    gender:                      string;
    birth_year:                  Date;
    birth_month:                 Date;
    birth_date:                  Date;
    last_invited_to_platform_at: null;
    education:                   null | string;
    
    
    is_2fa_enabled:              boolean;
    default_2fa_type:            null | string;
    created_at:                  Date;
    updated_at:                  Date;
    isMyContact:                 boolean;
}

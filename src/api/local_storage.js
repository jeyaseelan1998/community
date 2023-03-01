const USER_KEY = 'com.elenchittugal.user'

// localStorage.clear();

export const addUserName = () => {
    let user = localStorage.getItem(USER_KEY);
    
    if(!user || user === "null") {
        localStorage.setItem(USER_KEY, prompt("Enter user name for chatting"));
        user = localStorage.getItem(USER_KEY);
    };

    if(!user || user === "null") addUserName();

    return user;
}

export const change_user_name = () => {
    localStorage.removeItem(USER_KEY);
    let user = addUserName();
    return user;
}


import React from "react";

const UserContext = React.createContext({
    arr: null,
    setArr: () => {}
})

export default UserContext;
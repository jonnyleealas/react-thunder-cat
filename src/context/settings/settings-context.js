import React, { useState, useContext} from 'react'

export const SettingContext = React.createContext()

function Settings(props){

    const [page, setPage] = useState(2)

    return(
        <SettingsContext page={page}>
        {props.children}
        </SettingsContext>
    )
}

export default Settings; 
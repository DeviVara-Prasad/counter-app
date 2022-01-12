import React from "react";
import Item from "./Item";
import { Stack,Button } from "@mui/material";
import { Autorenew, SettingsBackupRestore } from "@mui/icons-material";

export default class List extends React.Component{
    render(){
        let {items,counterReset,incCount,decCount,itemDelete,counterRecycle} = this.props;
        // console.log(items);
        return (
            <Stack direction="column" alignContent="center" justifyContent="center">
                <Stack alignContent="center" justifyContent="center">
                    <Stack direction="row" justifyContent="center" alignContent="center" className=" " spacing={2} sx={ {mb:1}} >
                        <Button className="reset" onClick= {counterReset} disabled={ items.length === 0 ? true : false} variant="contained" ><SettingsBackupRestore/></Button>
                        <Button variant="outlined" className="recycle" onClick = {counterRecycle} disabled = {items.length !==0 ? true : false}><Autorenew/></Button>
                    </Stack>
                </Stack>
                {
                    items.map((item) => (
                        
                        <Item key = {item.id}
                              item = {item}
                              incCount = {incCount}
                              decCount = {decCount}
                              itemDelete = {itemDelete}            
                        />
                    ))
                }
            </Stack>
        )
    }
}
import {createContext, useState} from 'react'

const InventoryContext = createContext({

    wallet: null,
    gainMoney: () => {}

})

export const InventoryContextProvider = (props) => {
//States:
const [wallet, setWallet] = useState(0);


//End States:



//Wallet Functions:
const gainMoney = (amount) => {
     let newBalance = wallet + amount
     setWallet(newBalance)
     console.log(wallet)
    
    //api call to Wallet/increase with the current wallet state, and amount to be added as props.
    //set new wallet state
}

const loseMoney = (amount) => {
    //api call to Wallet/decrease with the current wallet state, and amount to be removed as props.
    //set new wallet state

}

//End Wallet Functions

//Inventory Handling:

    //Equipment:

const gainEquipment = (equip) => {
//api request to Inventory/addEquipment with inventory and equip data.
//set new equipment state.

}  

const loseEquipment = (equip) => {
    //api request to Inventory/remove Equipment with inventory and equip data.
    //set new equipment state.
    
    } 


//Items:

const gainItems = (item) => {
    //api request to Inventory/addItem with inventory and item data.
    //set new Item state.
    
    } 

const loseItems = (item) => {
     //api request to Inventory/removeItem with inventory and Item data.
    //set new Item state.
        
     } 

//Key Items:

const gainKeyItems = (kItem) => {
    //api request to Inventory/addItem with inventory and Key Item data.
    //set new Key Item state.
    
    } 

const loseKeyItems = (kItem) => {
     //api request to Inventory/removeItem with inventory and Key Item data.
    //set new Key Item state.
        
     } 


     let contextValue = {
        wallet,
        gainMoney
     }

return (

<InventoryContext.Provider value={contextValue}>
    {props.children}
</InventoryContext.Provider>

)
}

export default InventoryContext
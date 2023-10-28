import Image from "next/image"
import Equipment from "../database/Equipment.json"
import InventoryContext from "../store/InventoryContext"
import { useContext } from "react"
import Button from "@/components/Button"

const storeWeapons = Equipment.filter((weapon) => weapon.type === "Weapon")
const storeArmor = Equipment.filter((armor) => armor.type === "Armor")
const storeAccessories = Equipment.filter((acc) => acc.armorType === "Accessory")


export default function Home() {
  const inventory = useContext(InventoryContext)
  let wallet = inventory.wallet
  const gainMoney = inventory.gainMoney


  
  return (
    
    <section >
      
      <div className=' flex flex-col justify-center items-center'>
        <Image alt="Half-Road Design Logo" src="/Half-Road.png" height={255} width={255} className="m-5" />
        <h1 className="text-center text-3xl font-bold">Welcome to the new and Improved design lab!</h1>
        <Image alt="Darkness Titan" src="/images/Enemies/Boss-Darkness-Titan-Ilnoct.png" height={255} width={255} className="m-5" />
        <h2>The first thing on the Docket is the re-vamping of our Store!</h2>
        <p className="text-center">With the growth of this idea, I now need to expand and Improve the store ( Mostly the U.I ) to make it easier for players to navigate and find what they need.
          <br/>
          This includes dividing the now extensive equipment database into three sperate lists in shop or perhaps just three seperate shops like Dragon Quest.
          <br/>
          Also in this I will be testing and figuring out how to allow the player to buy multiples at once. I am fairly certain that it&#39;s as simple as clearing state, <br/>
          and resetting the input when focus is lost. Another alternative is to make an array state of Selected items and ammounts, with appropriate clearing on losing focus.
          <br/>
          Below is the rendering of the player wallet, and the Complete Equipment Database. Only the Name, Equip Type, and Description are Displayed.
        </p>
      </div>

      <br />
      <div>
        Wallet: {wallet}
      <br/>
      <Button type={"Add 100"} onClick={() => gainMoney(100)}/>
      
      </div>
      <br />
      <div id="Equipment-Display" className="m-3 p-5 flex justify-between items-start">
        <div className='p-2 flex flex-col justify-center border-4 border-double border-blue-700 text-center'> 
          <h1 className="text-3xl">Weapons:</h1>
            {storeWeapons.map((w) => (
              <div key={w.id} className="m-5 p-3 border-4 border-solid border-red-900 ">
                <p>Name: {w.name}</p>
                <p>Weapon Type: {w.weaponType}</p>
                <p>Description: <br/> {w.desc}</p>

              </div>

            ))
            
            
            
            }
        </div>

        <div className='p-2 flex flex-col justify-center border-4 border-double border-blue-700 text-center'>
          <h1 className="text-3xl">Armor:</h1>
          {storeArmor.map((a) => (
              <div key={a.id} className="m-5 p-3 border-4 border-solid border-red-900 ">
                <p>Name: {a.name}</p>
                <p>Armor Type: {a.armorType}</p>
                <p>Description: <br/> {a.desc}</p>

              </div>
               ))}

        </div>
         

        <div className='p-2 flex flex-col justify-center border-4 border-double border-blue-700 text-center'>
          <h1 className="text-3xl">Accessories:</h1>
          {storeAccessories.map((ac) => (
              <div key={ac.id} className="m-5 p-3 border-4 border-solid border-red-900 ">
                <p>Name: {ac.name}</p>
                <p>Equip Type: {ac.type}</p>
                <p>Description: <br/> {ac.desc}</p>

              </div>
               ))}

        </div>

        </div>  
    </section>

  
  )
}

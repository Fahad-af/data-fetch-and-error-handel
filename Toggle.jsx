import React ,{useState} from 'react'

const Toggle = () => {
      const [toggle,settoggle] =useState(true);
      let button;
      const hide =()=>{
            settoggle(false)
      }
      const show = () =>{
            settoggle(true)
      }
      if(toggle===true){
            button =(< button onClick={hide}>go to hide</button>)
      }else if(toggle===false){
            button = (< button onClick={show}>go to show</button>)
      }
  return (
    <div style={{backgroundColor
    :'pink',padding:'30px'}}>
      {
            toggle &&   <p >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit quibusdam ut unde nulla in atque laboriosam, maiores, non recusandae odio placeat officiis numquam iusto et, voluptates laborum magni tenetur voluptatum a expedita explicabo aspernatur! Mollitia aperiam reiciendis perferendis laboriosam! Quidem quae distinctio voluptatibus suscipit dolor iste necessitatibus commodi nisi.
        </p>
      }
       {
            button
       }
    </div>
  )
}

export default Toggle
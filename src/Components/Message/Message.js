import React, { useEffect, useState } from 'react'
import { Checkbox } from '@material-ui/core'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import axios from "axios"
function Message() {
     
    const [mail, setMail] = useState("")

    useEffect(() => {
        axios('https://server-gmail-new2.onrender.com/api/mail/', { method: 'GET' })
        .then((response) => response.data.e)
          .then((data) => {
            console.log(data[0]);
            setMail(data)
          })
          .catch((error) => {
            console.log(error);

          });
      }, []);

  return (<div>
 { mail && mail.map((data,i)=>(
    <table className=' ml-16 w-full justify-around '>
    <th>
      <tr>
        <th className=' mx-8'>{data.topic}</th>
        
      </tr>
    </th>
     <tr key={i} className=' shadow-xl ' >
<td><Checkbox className =" m-1"   /><span> <StarOutlinedIcon  fontSize='medium' /></span></td>
{/* <td className=''>{data.topic}</td> */}
<td className=' justify-end'>{data.description}</td>
<td className=' justify-end align-bottom  '>{data.createdAt}</td>
<td>
</td>
</tr>
        
    </table>
 )
     )
  
}</div>
  )
}

export default Message
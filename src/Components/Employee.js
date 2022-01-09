import React, { useState } from 'react'
import './Style.css'

export const Employee = () => {
    const [isToggle, setIsToggle] = useState(true)
    const [data, setData] = useState(
        {
            username: "",
            department: "",
            rating: ""

        }
    )
    console.log(data)
    const [record, setRecord] = useState([])
    const HandleInput = (e) => {
        const name = e.target.name
        const value = e.target.value


        setData({ ...data, [name]: value });
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log("hello")
        const newData = { ...data, id: new Date().getTime().toString() }
        console.log(data)
        setIsToggle(false)


        setRecord([...record, newData])

        setData({
            username: "",
            department: "",
            rating: ""

        })
        // console.log(record)


    }
    return (
        <>
            {isToggle ?
                <>

                    <h1 className='Header'>EMPLOYEE FEEDBACK FORM</h1>
                    <form action='' onSubmit={HandleSubmit}>
                        <div className='card'>
                            <label htmlFor='username'>Name  </label>
                            <br />
                            <input type='text' autoComplete='off' value={data.username} onChange={HandleInput} name='username' id='username' />
                        </div>

                        <div className='card'>
                            <label htmlFor='department'>Department  </label>
                            <br />
                            <input type='text' autoComplete='off' value={data.department} onChange={HandleInput} name='department' id='department' />
                        </div>

                        <div className='card'>
                            <label htmlFor='rate'>Rating  </label>
                            <br />
                            <input type="number" autoComplete='off' value={data.rate} onChange={HandleInput} name='rating' id='rating' />
                        </div>
                        <button type="submit">Submit</button>

                    </form></>
                : <>
                    <div className='parent'>
                        {
                            record.map((curElem) => {
                                const { id, username, department, rating } = curElem;
                                return (
                                    <div key={id} className='child'>
                                        <span>Name : {username} | </span>
                                        <span>Department : {department} | </span>
                                        <span>Rating : {rating}</span>
                                    </div>
                                )

                            })


                        }
                    </div>
                    <button className="btn" onClick={() => setIsToggle(true)}>Go Back</button>
                </>
            }




        </>
    )
}

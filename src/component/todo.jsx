import todo from '../images/todo.svg'


import React, { useEffect, useState } from 'react'



// to get the data from LS

const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}


    

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items,setItems] = useState(getLocalItems());
    
    const addItem =() =>{
        if(!inputData){
                alert('why!!')
        }else{
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }

    // deleting 
    const deleteitem= (index) =>{
        // console.log(id);
    const updateditems = items.filter((elem) =>{
        return index !== (elem.id);
    });
        setItems(updateditems);
    }

    // remove all
      const removeAll = () => {
          setItems([]);
      }

   // add data to localStorage
   useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
 }, [items]);

  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src={todo} alt='Logo'/>
                     <figcaption>Add Your List Here ✌ </figcaption>
                </figure>

                <div className='addItems'>
                    <input type="text" placeholder='📝 Add Items ...' 
                    value={inputData} 
                    onChange= {(event) => setInputData(event.target.value)}
                    />
                    <i className="fa fa-plus add-btn" title='Add Item 📝'
                        onClick={addItem}
                        
                    ></i>
                </div>

                <div className='showItems'>
                    {
                        items.map((elem, ind) =>{
                            return(
                                <div className='eachItem' key={elem.id} >
                                <h3>{elem.name}</h3>
                                <i className="far fa-trash-alt add-btn" title='❌ Delete Item' onClick={() => deleteitem(elem.id)}></i>
                        
                    </div>
                            )
                        })
                    }
                    
                </div>
                {/* clear all Button  */}
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>Check List</span>
                    </button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Todo
import React from 'react';


const PersonFinder : React.FC<any> = (props : any) => {

    const handleSubmit = (event : any) => {
                
        props.sendRequest(props.input);
        event.preventDefault();
    };

    const handleInput = (event : any) => {
        props.changeInput(event.target.value);
    };
    


    
    return (
        <div className='content-main-container'>
            <div className="App-content block " >
                
                <div className='content'> 
                    <div>
                        <h5>
                            Result: 
                            {props.person.name && 
                                <div className='inner-person-block'>
                                    name : {props.person.name} 
                                    <br />
                                    age : {props.person.age}
                                    <br />
                                    counts : {props.person.count}
                                </div>
                            }
                        </h5>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <label >
                            <input type="text" value={props.input} onChange={handleInput}/>
                        </label>

                        <div>
                            <button onClick={handleSubmit}>
                                <div className="">
                                    Send
                                </div>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div> 
    )
}

export default PersonFinder;

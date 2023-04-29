import { useState , useEffect } from 'react';
import { ITask, INewPanelProps } from '../interfaces/ITask'

import { IPanelProps } from '../interfaces/IPanel'

function NewPanel(props: INewPanelProps) {

    const [error, setError] = useState<string[]>([])

    const validateForm = () => {
        
        let newError: string[] = [];
        

        if(!props.task.name || props.task.name === '') {            
            newError = [...newError, 'El Panel ya existe']            
        }

       
        if( newError.length === 0 ) {
            props.onSave()
            setError([]) 
        }else{
            setError([...newError])    
        }
        
    }

    return (
        <div className="newpanel">
        <h2>Agregar nuevo Panel</h2>
        <form>
            <label htmlFor="filtro-tarea">Panel:</label>
            <input type="text" id="newpanel" name="newpanel" placeholder="New Panel Name" />            
            <button type="button">Add</button>

            <ul>
                <li></li>
            </ul>

        </form>
        
    </div>

    )
}

export default NewPanel;
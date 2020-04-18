import React, {useState} from 'react';
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
    Container
} from 'reactstrap'
import {v4} from "uuid"

const Todoform = ({addTodos}) => {

    const [todoString, SetTodoString] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(todoString === ''){
            return alert("please enter a Todo")
        }

        const todo = {
            todoString,
            id: v4()
        }

                addTodos(todo);

                SetTodoString("");
    }


    return(
        <Form 
        onSubmit={handleSubmit}
        >
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id='todo'
                placeholder='Enter A Todo'
                value={todoString}
                onChange={e => SetTodoString(e.target.value)}
                />
                <InputGroupAddon addonType='prepend'>
                    <Button
                    color="success">Add Todo</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}

export default Todoform
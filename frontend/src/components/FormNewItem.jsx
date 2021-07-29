import { useState } from 'react'
import { dogfacts, newItem } from '../services/api'

import { connect } from 'react-redux'
import { toggleLoading, newItems } from '../store/actions/application'

const FormNewItem = ({dispatch, ...props}) => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [show,setShow] = useState(false)

    const dogFactshandler = async (e) => {
        dispatch(toggleLoading(true))
        const resp = await dogfacts()
        if(resp) {
            dispatch(newItems(...resp))
            setEmail('')
            setName('')
            setDescription('')
            setShow(false)
        }
        dispatch(toggleLoading(false))
    }

    const submitHandler = async (e) => {
        if(!email || !name || !description) {
            alert('Todos os campos são obrigatórios!')
            return
        }
        dispatch(toggleLoading(true))
        e.preventDefault()
        const resp = await newItem({name, email, description})
        if(resp) {
            dispatch(newItems(resp))
            setEmail('')
            setName('')
            setDescription('')
            setShow(false)
        }
        dispatch(toggleLoading(false))
    }

    return (
        <>
            {!show && <button className='btn btn-primary mb-3' onClick={() => setShow(true)}>Adicionar Item</button>}
            {show && <div className="border my-4 rounded p-3 bg-light">
                <form action="#" onSubmit={(e) => submitHandler(e)}>
                    <h5>Adicionar item</h5>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="E-mail" />
                    </div>

                    <div className="form-group">
                        <label for="name">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nome" />
                    </div>

                    <div className="form-group">
                        <label for="description">Descrição</label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" id="description" placeholder="Descrição" />
                    </div>
                </form>
                <div className="row mt-3">
                    <div className="col d-flex align-items-center justify-content-between">
                        <div className="insert">
                            <button className="btn btn-primary" onClick={(e) => submitHandler(e)} type='submit'>Adicionar item</button>
                            <button className="btn btn-danger mx-2" onClick={() => setShow(false)}>Cancelar</button>
                        </div>
                        <button className="btn btn-success" onClick={(e) => dogFactshandler(e)}>Estou sem tarefas!</button>
                    </div>
                </div>
            </div>}
        </>
    );
}
 
const mapState = state => ({...state})
export default connect(mapState)(FormNewItem);
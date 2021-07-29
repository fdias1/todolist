import React from 'react';
import { useState } from 'react'
import { rollbackItem } from '../../services/api'

import { connect } from 'react-redux'
import { rollbackItem as rollbackItemAction, toggleLoading } from '../../store/actions/application'


const RollbackForm = ({dispatch, ...props}) => {
    const [supervisorCode, setSupervisorCode] = useState('')
    const [toggle, setToggle] = useState(false)

    const rollbackHandler = async (e) => {
        dispatch(toggleLoading(true))
        e.preventDefault()
        const resp = await rollbackItem(props.id, supervisorCode)
        if(resp) {
            dispatch(rollbackItemAction(props.id))
        }
        setSupervisorCode('')
        dispatch(toggleLoading(false))
    }

    return (
        <form>
            {!toggle && <button className='btn btn-warning' onClick={() => setToggle(!toggle)}>Solicitar volta do item</button>}
            {toggle && 
            <>
                <div className="form-group mb-3">
                    <div className="row">
                        <div className="col-4 align-items-center">
                            <label htmlFor="code">Senha do supervisor:</label>
                        </div>
                        <div className="col-8 align-items-center">
                            <input type='password' value={supervisorCode} onChange={e => setSupervisorCode(e.target.value)} className="form-control" id="code" placeholder="Senha do supervisor" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-between">
                        <button onClick={e => rollbackHandler(e)} className="mt-2 btn btn-warning">
                            Voltar item
                        </button>
                        <button className='btn btn-danger' onClick={() => setToggle(!toggle)}>Cancelar</button>
                    </div>
                </div>
            </>}
        </form>
    );
}

const mapState = state => ({...state})
export default connect(mapState)(RollbackForm);
import React, { useState } from 'react'
import ContatoFormulario from './ContatoFormulario'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { MdFileCopy } from 'react-icons/md'

export default props=>{
    const [msgCopiadoClasse, setMsgCopiadoClasse] = useState(null)
    const [msgCopiado, setMsgCopiado] = useState('Copiar')

    function mostrarMsgCopiado(){
        setMsgCopiadoClasse('ContatoOpcaoMsgCopiadoAparecer')
        setTimeout(()=>{
            setMsgCopiadoClasse(null)
        }, 1000)
    }

    return (
        <div className='ContatoOpcao'>
            <div>
                <span className='ContatoOpcaoIcone'>{props.icone}</span>
                <span className='ContatoOpcaoTexto'>{props.texto}</span>
            </div>
            {/* <div className={'ContatoOpcaoMsgCopiado ' + msgCopiadoClasse}>Copiado</div> */}
            <OverlayTrigger placement='bottom' overlay={<Tooltip>{msgCopiado}</Tooltip>}>
                <span className={'ContatoOpcaoCopiar '} onClick={()=>{navigator.clipboard.writeText(props.texto); setMsgCopiado('Copiado!')}} onMouseLeave={()=>{setMsgCopiado('Copiar')}}>{MdFileCopy()}</span>  
            </OverlayTrigger>
        </div>
    )
}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './css/IconeSecao.css'

export default props=>
<div className={'IconeSecao ' + props.classe}><FontAwesomeIcon icon={props.icone} /></div>
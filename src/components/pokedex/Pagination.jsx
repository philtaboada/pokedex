import React from 'react'
import './pagination.css'

const Pagination = ({ setPagination, pagination }) => {

    const nextPage = () => {
        let nextpage = pagination + 20
        setPagination(nextpage)
    }

    const previewPage = () => {
        if (pagination) {
            let previewpage = pagination - 20
            setPagination(previewpage)
        }
    }

    return (
        <div className='pagination-container'>
            <ul className='ul-pagination'>
                <li className="unit-page"><a className='a-pagination' onClick={previewPage}>Anterior</a></li>
                <li className="unit-page"><a className='a-pagination' onClick={nextPage}>Siguiente</a></li>
            </ul>
        </div>
    )
}

export default Pagination
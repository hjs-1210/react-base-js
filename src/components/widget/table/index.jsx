import React from 'react';
import "./style.css"

const Table = (props) => {
    const {columnList, dataList} = props
    return (
        <table className='table'>
            <thead>
            <tr>
                {columnList.map(item =>{
                    return <th>{item.title}</th>
                    }
                )}
            </tr>
            </thead>
            <tbody>
                {dataList.map(data =>{
                    return <tr>
                        {columnList.map(col =>{
                            return <td>{data[col.title]}</td>
                        })}
                    </tr>
                })
                }
            </tbody>
        </table>
    );
};

export default Table;
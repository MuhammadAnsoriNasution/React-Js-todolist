import React from 'react'

export default function Detail({ data }) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td width={10}>:</td>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>:</td>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>:</td>
                        <td>{data.description}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>:</td>
                        <td>{data.status ? 'Selesai' : 'Proses'}</td>
                    </tr>
                    <tr>
                        <th>CreatedAt</th>
                        <td>:</td>
                        <td>{data.createdAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

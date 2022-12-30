import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import { API_URL } from "./url";


export function Tab(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        getall();
    }, []);

    const getall = async () => {
        const response = await axios.get(API_URL);
        setData(response.data);

    }
    const edittable = ({ id, name, age, skills }) => {
        props .setEditing(true);
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('skills',skills);

    }

    const remove = async (id) => {
        await axios.delete(API_URL + id);
        getall();

    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>age</th>
                        <th>skills</th>
                        <th colSpan={4}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?
                        (data.map((datas, index) => (<tr key={datas.id}>
                            <td>{datas.name}</td>
                            <td>{datas.age}</td>
                            <td>{datas.skills}</td>
                            <td>
                                <button onClick={() => edittable(datas)}>Edit</button></td>
                            <td><button onClick={() =>
                                remove(index)}>Delete</button>
                            </td>
                        </tr>
                        ))) : (<tr>
                            <td colSpan={4}>No data found</td>
                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    )

}
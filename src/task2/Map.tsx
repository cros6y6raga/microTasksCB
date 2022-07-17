import React from 'react';

type MapType = {
    students: Array<StudentType>
    topCars: Array<TopCars>
}
type StudentType = {
    id: number,
    name: string,
    age: number
}
type TopCars = {
    manufacturer: string,
    model: string
}
export const Map = (props: MapType) => {
    return (
        <>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span> age: {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
            {props.topCars.map((objectFromTopCars, index) => {
                debugger
                return (
                    <table key={index}>
                        <thead>
                        <tr>
                            <th>Manufacturer</th>
                            <th>Model</th>
                        </tr>
                        <tr>
                            <td>{objectFromTopCars.manufacturer}</td>
                            <td>{objectFromTopCars.model}</td>
                        </tr>
                        </thead>
                    </table>
                )
            })}
        </>
    );
};
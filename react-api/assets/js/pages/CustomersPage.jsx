import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CustomersPage(props){

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/customers")
            .then(response => response.data["hydra:member"])
            .then(data => setCustomers(data))
            .catch(error => console.log(error.response))
    },[]);
    return (
        <>
            <h1>Liste des clients</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>id</th>
                    <th>client</th>
                    <th>Email</th>
                    <th>Entreprise</th>
                    <th className="text-center">Factures</th>
                    <th className="text-center">Montant total</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                { customers.map(customer => (
                    <tr key={ customer.id }>
                        <th>{ customer.id }</th>
                        <th>{ customer.firstName } { customer.lastName }</th>
                        <th>{ customer.email }</th>
                        <th>{ customer.company }</th>
                        <th className="text-center">
                            <span className="badge badge-primary">{ customer.invoices.length }</span>
                        </th>
                        <th className="text-center">{ customer.totalAmount.toLocaleString() }</th>
                        <th><button className="btn btn-danger">supprimer</button></th>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};
import React from 'react';

export default function CustomersPage(props){
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
                    <tr>
                        <th>1</th>
                        <th>Gauthier</th>
                        <th>gautier@meil.com</th>
                        <th>AOL</th>
                        <th className="text-center">
                            <span className="badge badge-primary">4</span>
                        </th>
                        <th className="text-center">4500 €</th>
                        <th><button className="btn btn-danger">supprimer</button></th>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

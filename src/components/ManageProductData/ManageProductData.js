import React from 'react';
import './ManageProductData.css';
import Edit from '../../icons/edit 1.png';
import Delete from '../../icons/Group 33150.png';

const ManageProductData = (props) => {
    const { productName, price, brand, _id} = props.product;
    const [managePd, setManagePd] = props.managePd;
    

    const deleteHandle = () => {
        fetch(`https://gentle-mesa-65432.herokuapp.com/deleteProduct/${_id}`, {
            method : 'DELETE'
        })
        .then(res=> {
            if(res.status === 200){
               const newManagePd = managePd.filter(pd => pd !== props.product);
               setManagePd(newManagePd);
            }
        })
    }
    return (
        <div>
            <div className="table-data">
                <p className="pdName">{productName}</p>
                <div className="brand-price-action-data">
                    <p>{brand}</p>
                    <p>{price}</p>
                    <div className="edit-delete">
                        <img src={Edit} alt=""/>
                        <img onClick={deleteHandle} src={Delete}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductData;
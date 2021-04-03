import React, { useState } from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imgUrl, setImgUrl] = useState();

    const onSubmit = data => {
        const { productName, price, brand, stock, strapType } = data;
        const productData = {
            productName,
            price,
            imgUrl,
            brand,
            stock,
            strapType
        }
        fetch('http://localhost:5055/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        }).then(res => {
            if (res.status === 200) {
                window.alert('Product added successfully!')
            }
            else {
                window.alert('Sorry try again!')
            }
        });
    };

    //Generate image url
    const handleImgUp = e => {
        const imgData = new FormData();
        imgData.set('key', '2776edc2118bb2862526ca87bf8e6434');
        imgData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(response => {
                setImgUrl(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="add-product">
            <h2>Add Product</h2>
            <form className="addProduct-form" onSubmit={handleSubmit(onSubmit)}>
                <label>Product Name:</label><br />
                <input className="name-input" name="productName" placeholder="Product name" ref={register({ required: true })} /><br />
                <label>Add Price:</label><br />
                <input placeholder="Product Price" name="price" ref={register({ required: true })} /> <br />
                <label>Strap Material:</label><br />
                <input placeholder="Strap material type" name="strapType" ref={register} /> <br />
                <label>Brand:</label><br />
                <input placeholder="Brand name" name="brand" ref={register} /> <br />
                <label>Stock:</label><br />
                <input placeholder="Stock amount" name="stock" ref={register} /> <br />
                <label>Upload Image:</label><br />
                <input name="imgUrl" type='file' onChange={handleImgUp} ref={register({ required: true })} /> <br />
                {errors.required && <span>This field is required</span>}
                <br />
                <input className="button add-btn" type="Submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;
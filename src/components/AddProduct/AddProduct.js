import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className="add-product">
            <h2>Add Product</h2>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className="addProduct-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Product Name:</label><br/>
                <input className="name-input" name="example" placeholder="Product name" ref={register} /><br/>
                <label htmlFor="">Add Price:</label><br/>
                <input name="exampleRequired" placeholder="Product Price"/> <br/>
                <label htmlFor="">Strap Material:</label><br/>
                <input name="exampleRequired" placeholder="Strap material type"/> <br/>
                <label htmlFor="">Brand:</label><br/>
                <input name="exampleRequired" placeholder="Brand name"/> <br/>
                <label htmlFor="">Stock:</label><br/>
                <input name="exampleRequired" placeholder="Stock amount"/> <br/>
                <label htmlFor="">Upload Image:</label><br/>
                <input name="exampleRequired" type='file'  ref={register({ required: true })}/> <br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <br/>
                <input className="buy-btn add-btn" type="Submit"  value="Add Product"/>
            </form>
        </div>
    );
};

export default AddProduct;
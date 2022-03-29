import React, { useState } from 'react';
import '@styles/productitem.scss';
import addTocart from '@icons/bt_add_to_cart.svg';



const productitem = () => {
	const [cart, setCart] = useState('hola');

	const handleClick =()=> {
		setCart('se esta cambiando la info');
	} 

	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addTocart} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default productitem;
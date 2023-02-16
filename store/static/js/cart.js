/* get all the elements with classname update_cart*/
var updateBtns = document.getElementsByClassName('update-cart')

for (i=0; i<updateBtns.length; i++){
	updateBtns[i].addEventListener('click',function(){
		var productId = this.dataset.product
		var action = this.dataset.action
		console.log('productId:',productId,'Action:',action)
		
		console.log('USER:',user)
		if(user === 'AnonymousUser'){
			console.log('Not logged in')
		}
		else{
			updateUserOrder(productId,action)
		}

	})
}

function updateUserOrder(productId,action){
	console.log('User is authenticated,sending data')

/*  we want to send data to this url */
	var url = '/update_item/'

	fetch(url,{
		/* 1. type of data that will be sent */
		method:'POST',
		headers:{
			'Content-Type':'application/json',
			'X-CSRFToken':csrftoken,
		},
		/* we want to send data in the form of string*/
		body:JSON.stringify({'productId':productId,'action':action})
	})
	.then((response)=>{
		return response.json();
	})
	.then((data)=>{
		console.log('data:',data)
		location.reload()
	})
}
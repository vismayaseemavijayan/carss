function storeFunction(){
	car={
		brand:brand.value,
		price:price.value,
		key:key.value
	}
	if(car.brand=="" || car.price=="" || car.key==""){
		alert("please fill the missing field")
	}
	else{
		if(car.key in localStorage){
			alert("user already exist")
		}
		else{
			localStorage.setItem(car.key,JSON.stringify(car))
			alert("car added successfully")
		}
	}

} 


function retrieveRecords(){
    let key=retrieveKey.value
    let car=JSON.parse(localStorage.getItem(key))
    result.innerHTML=`<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${car.brand}</li>
    <li class="list-group-item">${ car.price}</li>
    <li class="list-group-item">${car.key}</li>
  </ul>
</div>`
}


function removeRecords(){
	if(removeKey.value in localStorage){
		localStorage.removeItem(removeKey.value)
		alert("data removed")
		result.innerHTML=``
		removeKey.value=""
	}
	else{
		alert("key not found")
	}
}
function clearAll(){
	localStorage.clear()
	alert("all records deleted")
	result.innerHTML=``
}
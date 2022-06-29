const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
  ];
  
  function getUniqueProductCount(listOfProducts){
  let obj={}

  for(let i=0;i<listOfProducts.length;i++){

  if(obj[listOfProducts[i].productName]==undefined){
   obj[listOfProducts[i].productName]=1
  }
  
  else{
  obj[listOfProducts[i].productName]++
  }

  }
  
  console.log(obj)
  }
   
  getUniqueProductCount(listOfProducts)


  function getUniquePrducts(listOfProducts){
    let obj={}
    let arr=[]

    for(let i=0;i<listOfProducts.length;i++){
        if(obj[listOfProducts[i].productName]==undefined){
            obj[listOfProducts[i].productName]=1
            arr.push(listOfProducts[i])
        }

        else{
            for(let j=0;j<arr.length;j++){
                if(arr[j].productName=listOfProducts[i].productName){
                    arr[j].quantity=arr[j].quantity+listOfProducts[i].quantity
                }
            }
        }
    }

    console.log(arr)
  }

  getUniquePrducts(listOfProducts)
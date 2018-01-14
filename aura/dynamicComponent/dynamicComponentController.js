({
	performAction: function(component, event, helper) {
		var buttonValue =event.getParam("value");
		alert("Hello, you have selected "+buttonValue);
		switch(buttonValue){
			case "View":
	//			alert("you have selected view");
				$A.createComponent("c:dynamicComponentModel",
					{
						"header": "View Details",
						"body":"Details of contact will be present here",
						"buttonName" : "Done"
					},
					function(response){
						var targerDiv = component.find("dynamicComponentGrid");
						var targetDivBody = targerDiv.get("v.body");
						targetDivBody.push(response);
						targerDiv.set("v.body",targetDivBody);
					});
				break;
			case "Edit":
	//		 	alert("you have selected Edit");
			 	$A.createComponent("c:dynamicComponentModel",
					{
						"header": "Edit Record",
						"body":"Pleae review the details befor click on submit. to undo the changes anytime you can click on cancel button.",
						"buttonName" : "Submit"
					},
					function(response){
						var targerDiv = component.find("dynamicComponentGrid");
						var targetDivBody = targerDiv.get("v.body");
						targetDivBody.push(response);
						targerDiv.set("v.body",targetDivBody);
					});
				break;
			case "Delete":
	//		 	alert("you have selected Delete");
			 	$A.createComponent("c:dynamicComponentModel",
					{
						"header": "Delete Record",
						"body":"Please click on delete button if you want to delete or else click on cancel.",
						"buttonName" : "Delete"
					},
					function(response){
						var targerDiv = component.find("dynamicComponentGrid");
						var targetDivBody = targerDiv.get("v.body");
						targetDivBody.push(response);
						targerDiv.set("v.body",targetDivBody);
					});
				break;		

		}
		
	}
})
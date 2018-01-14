({
	showModel: function(component, event, helper) {
		component.destroy();
	},

	closeModel: function(component, event, helper) {
		component.destroy();
	},
	okModel: function(component, event, helper) {
		var buttonValue = event.getSource().get("v.value");
	//	alert(pa);
		switch(buttonValue){
			case "Done":
				alert("Thanks For visiting this Page. If you have any suggestions please write back to us.");
				component.destroy();
				break;
			case "Submit":
				alert("Record has been Submitted Successfully");
				component.destroy();
				break;
			case "Delete":
				alert("Record deleted Successfully");
				component.destroy();
				break;	
			default:
				alert("Thank You :)")		
		}
		
	}
})
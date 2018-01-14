({
	showModel: function(component, event, helper) {
		component.set("v.isOpen","true");
	},

	closeModel: function(component, event, helper) {
		component.set("v.isOpen","false");
	},
	okModel: function(component, event, helper) {
		alert("thanks for Viewing this page");
		component.set("v.isOpen","false");
	}
})
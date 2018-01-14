({
	addNumber: function(component, event, helper) {
		var v1 = parseInt(component.get('v.var1'));
		var v2 = parseInt(component.get('v.var2'));
		var v3 = v1+v2;
		component.set('v.result',v3);
	},
	substractNumber: function(component, event, helper) {
		var v1 = parseInt(component.get('v.var1'));
		var v2 = parseInt(component.get('v.var2'));
		var v3 = v1-v2;
		component.set('v.result',v3);
	},
	multiplyNumber: function(component, event, helper) {
		var v1 = parseInt(component.get('v.var1'));
		var v2 = parseInt(component.get('v.var2'));
		var v3 = v1*v2;
		component.set('v.result',v3);
	}
})
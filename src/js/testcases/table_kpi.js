StandaloneDashboard(function(db){
	var table = new TableComponent ('test');
	table.setCaption ("Regional Sales");
	table.setDimensions(4, 4);
	table.addColumn ('zone', "Zone");
	table.addColumn ('name', "Store Name");
	table.addColumn ('sale', "Sales amount");
	var data = [
		{zone: "North", name: "Northern Stores", sale: 4000},
		{zone: "South", name: "Southern Stores", sale: 4500},
	];
	table.addMultipleRows (data);
	table.addComponentKPI("overall", {
		caption: "hello",
		value: "20"
	});
	db.addComponent(table);
});
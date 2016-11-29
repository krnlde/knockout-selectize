import ko from 'knockout';

class ViewModel {

	selected = ko.observable();

	availableOptions = ko.observableArray([
		{
			id: 0,
			title: 'A'
		},
		{
			id: 1,
			title: 'B'
		},
		{
			id: 2,
			title: 'C'
		},
		{
			id: 3,
			title: 'D'
		},
	]);

}

ko.applyBindings(new ViewModel());
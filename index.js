// thanks to https://gist.github.com/DrSammyD/3ae055ca1280ccd9a4ae
//
// also we can copy some knowledge from this angular dircetive which works great: https://github.com/machineboy2045/angular-selectize/blob/master/dist/angular-selectize.js

let beQuiet = false;
ko.bindingHandlers.selectizeOptions = {
  init: (element, valueAccessor, allBindingsAccessor) => {
    let $element = $(element);

    $element.selectize({
      dropdownParent: 'body',
      valueField: ko.unwrap(allBindingsAccessor.get('optionsValue')) || 'id',
      labelField: ko.unwrap(allBindingsAccessor.get('optionsText')) || 'title',
      searchField: ko.unwrap(allBindingsAccessor.get('optionsSearch')) || 'title',
      placeholder: ko.unwrap(allBindingsAccessor.get('selectizePlaceholder')) || null,
      options: ko.toJS(valueAccessor()),
      onChange: function (value) {
        if (beQuiet) return;
        let accessor = allBindingsAccessor.get('selectize');
        if (ko.isObservable(accessor)) {
          beQuiet = true;
          accessor(this.options[value]);
          beQuiet = false;
        }
      },
      render: {
        option: function (item, escape) {
          const labelField = this.settings.labelField;
          if (ko.isObservable(labelField)) {
            return '<div class="option">' + labelField(ko.toJS(item), escape) + '</div>';
          }
          return '<div class="option">' + escape(ko.unwrap(ko.unwrap(item)[labelField])) + '</div>';
        },
        item: function (item, escape) {
          const labelField = this.settings.labelField;
          if (ko.isObservable(labelField)) {
            return '<div class="item">' + labelField(ko.toJS(item), escape) + '</div>';
          }
          return '<div class="item">' + escape(ko.unwrap(ko.unwrap(item)[labelField])) + '</div>';
        }
      }
    });

    ko.utils.domNodeDisposal.addDisposeCallback(element, () => $element[0].selectize.destroy() );
  },
  update: (element, valueAccessor) => {
    const $el = $(element);
    const selectizeInstance = $el[0].selectize;
    const options = [...ko.unwrap(valueAccessor())];
    Object.values(selectizeInstance.options).forEach((option) => {
      if (options.includes(option)) options.splice(options.indexOf(option), 1);
      else selectizeInstance.removeOption(option[selectizeInstance.settings.valueField]);
    });

    options.forEach((option) => {
      selectizeInstance.addOption(option);
    });

    selectizeInstance.refreshOptions(selectizeInstance.isFocused);
    selectizeInstance.refreshItems();
  }
}

ko.bindingHandlers.selectizePlaceholder = {
  update: (element, valueAccessor) => {
    const selectize = $(element).data('selectize');
    selectize.settings.placeholder = ko.unwrap(valueAccessor());
    selectize.updatePlaceholder();
  }
};

ko.bindingHandlers.selectize = {
  update: (element, valueAccessor) => {
    let value = valueAccessor();
    let selectizeInstance = element.selectize;
    // console.log('Update Selected', ko.unwrap(value()));
    selectizeInstance.setValue(ko.unwrap(value) == null ? null : ko.unwrap(value)[selectizeInstance.settings.valueField], /* silent */ true);
  },
  after: ['selectizeOptions']
};

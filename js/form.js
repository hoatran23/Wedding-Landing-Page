// Hàm đối tượng
function Validator(options) {
	// Hàm get element cha (.form-group) từ cái inputElement 
	function getParent(element, selector) {
		while (element.parentElement) {
			if (element.parentElement.matches(selector)) {
				return element.parentElement;
			}
			element = element.parentElement;
		}
	}

	var selectorRules = {};

	// Hàm thục hiện Validate
	function Validate(inputElement, rule) {
		// var errorElement = getParent(inputElement, '.form-group');
		// Lấy ra cái thẻ cảnh báo bằng cách từ thẻ input gọi ra thẻ cha rồi trỏ đến thằng span
		var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector);
		// var errorMessage = rule.test(inputElement.value);
		var errorMessage;
		// Lay ra cac rule cua selector
		var rules = selectorRules[rule.selector];
		
		// Lap qua tung rule va kiem tra
		// Neu co loi thi dung viec kiem tra
		for (var i = 0; i < rules.length; ++i) {
			switch (inputElement.type) {
				case 'radio':
				case 'checkbox':
					errorMessage = rules[i](
						formElement.querySelector(rule.selector + ':checked')
					);
					break;
				default:
					errorMessage = rules[i](inputElement.value);
			}
			if (errorMessage) break;		
		}

		// Nếu mà người dùng chưa nhập vào thì có errorMessage
		// Khi có errorMessage thì
		if (errorMessage) {
			// add text cho element span
			errorElement.innerText = errorMessage;
			// add class cho form-message thông qua hàm getParent
			getParent(inputElement, options.formGroup).classList.add('invalid');
		} else {
			errorElement.innerText = '';
			getParent(inputElement, options.formGroup).classList.remove('invalid');
		}

		return !errorMessage;
	}
	// Lấy Element của form
	var formElement = document.querySelector(options.form);
	if (formElement) {
		// Khi submit form
		formElement.onsubmit = function(e) {
			e.preventDefault();

			var isFormValid = true;

			// Lap qua tung rule va Validate 
			options.rules.forEach(function(rule) {
				var inputElement = formElement.querySelector(rule.selector);
				var isValid = Validate(inputElement, rule);

				if	(!isValid) {
					isFormValid = false;
				}
			});

			if	(isFormValid) {
				// Truong hop submit voi JS
				if (typeof options.onSubmit === 'function') {					
					var enableInputs = formElement.querySelectorAll('[name]');					
					var formValues = Array.from(enableInputs).reduce(function (values, input){
						switch(input.type) {
							case 'radio':
								values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
								break;
							case 'checkbox':
								if (!input.matches(':checked')) {
									values[input.name] = '';
									return values;
								}
								if (!Array.isArray(values[input.name]) && input.matches(':checked')) {
									values[input.name] = [];
								} 

								values[input.name].push(input.value);
								break;
							case 'file':
								values[input.name] = input.files;
								break;
							default:
								values[input.name] = input.value;
						}
						return values;
					}, {})
					options.onSubmit(formValues); 
				}
				// Truong hop submit voi hanh vi mac dinh cua trinh duyet
				else {
					formElement.submit();
				}
			}
			// else {
			// 	console.log('co loi');
			// }
		}

		// Lap qua moi rule va xu ly cac su kien vd: lang nghe, blur,...
		options.rules.forEach(function(rule) {
			// Luu lai cac rule cho moi input
			if (Array.isArray(selectorRules[rule.selector])) {
				selectorRules[rule.selector].push(rule.test);
			} else {
				selectorRules[rule.selector] = [rule.test];
			}
			var inputElement = formElement.querySelector(rule.selector);
			var inputElements = formElement.querySelectorAll(rule.selector);
			Array.from(inputElements).forEach(function(inputElements) {
				if(inputElement) {
					// Xu ly truong hop blur khoi input
					inputElement.onblur = function() {
						Validate(inputElement, rule);
					}
					
					// Xu ly khi nguoi dung nhap vao input
					inputElement.oninput = function() {
						errorElement.innerText = '';
						getParent(inputElement, options.formGroup).classList.remove('invalid');
					}
				}
			});
			var errorElement = getParent(inputElement, options.formGroup).querySelector('.form-message'); 
			
		})
	}
}

// Định nghĩa các rules
// Nguyen tac cua cac relus 
//	1. Khi co loi thi tra ve message loi
// 	2. Khi hop le thi kh tra ve gi ca
Validator.isRequired = function(selector, message) {
	return {
		selector: selector,
		test: function(value) {
			// return value.trim() ? undefined :  message || 'Vui lòng nhập trường này!';
			return value ? undefined :  message || 'Vui lòng nhập trường này!';
		}
	}
}

Validator.isEmail = function(selector, message) {
	return {
		selector: selector,
		test: function(value) {
			var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
			return regex.test(value) ?  undefined :  message || 'Vui lòng nhập trường này phải là Email!';
		}
	}
}

Validator.minLength = function(selector, min, message) {
	return {
		selector: selector,
		test: function(value) {
			return value.length >= min ?  undefined :  message || `Vui lòng nhập tối thiểu ${min} ký tự`;
		}
	}
}

Validator.isConfirmed = function(selector, getPassword, message) {
	return {
		selector: selector,
		test: function(value) {
			return value === getPassword() ? undefined : message || 'Giá trị nhập vào không hợp lệ!';
		}
	}
}



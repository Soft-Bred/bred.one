$('.burger').click(function () {
	$('.showHide').toggleClass('hidden');
});

$('.Cart-button').click(function () {
	alert('Product was added to cart');
});

$('.Info-button').click(function () {
	var imageSrc = $(this).parent().parent().parent().find('img').attr('src');
	var description = descriptions[$(this).parent().parent().parent().attr('class')];
	var info = $(this).parent().parent().parent().find('.item-info').text();
	var title = $(this).parent().parent().parent().find('.item-title').text().split('€')[0];

	$('body').css('overflow', 'hidden');
	$('.background').css('opacity', '1');
	$('.background').css('visibility', 'visible');
	$('.background').css('transition', 'opacity 0.3s');
	$('.modal-image').attr('src', imageSrc);
	$('.modal-title').text(title);
	$('.modal-description').text(description);
	$('.modal-notes').text(info);
});

$('.close-icon').click(function () {
	$('body').css('overflow', 'auto');
	$('.background').css('opacity', '0');
	$('.background').css('transition', 'opacity 0.3s');
	setTimeout(function () {
		$('.background').css('visibility', 'hidden');
	}, 1000);
});

let descriptions = {
	Cookies: "This bundle of chocolate chip cookies has everything a cookie aficionado could want. It's a classic chocolate chip cookie recipe that's been top-rated by hundreds of happy home chefs, with a texture that's slightly crispy on the exterior and chewy on the inside.",
	MixedBreads: 'A basket filled with four types of breads, each with its own unique flavour and texture. The breads are baked in our special oven and then placed together in a to create a unique mix of breads, perfect for any bread needs.',
	Macaroons: 'A macaroon is a small cake or biscuit, typically made from ground almonds, coconut or other nuts, with sugar and sometimes flavourings, food colouring, glacé cherries, jam or a chocolate coating; or a combination of these or other ingredients.',
	BreadLoaf: 'A loaf is a (generally) circular or rectangular bulk of food, traditionally and historically made of bread. Because some types of bread dough tend to collapse and spread out during the cooking process, it is typical to bake bread in a rectangular bread pan, also known as a loaf pan.',
	BriocheSquares: "Brioche is an enriched dough French bread. Brioche is similar to bread but far superior! It's a soft, gently sweet, rich bread that may be used in both sweet and savoury meals. Brioche is created with enriched dough, which gives it its distinctive mild sweetness and rich flavour. It's famous for its golden color, silky texture, and absolutely delectable flavour.",
	CaramelDoughnut: 'These soft, fluffy caramel doughnuts are filled with a creamy brown sugar custard and topped with caramel icing.',
	CheeseBread: 'A form of basic bread flavored with cheese. The cheese is grated and kneaded into the dough before being used to top the dough.',
	ChocolateDoughnut: 'These soft, fluffy chocolate doughnuts are filled with a creamy brown sugar custard and topped with chocolate icing.',
	HardShell: 'These huge guys have a delightful crackly/crunchy crust, which is due in part to letting them proof in the refrigerator and in part to an egg white wash added shortly before baking. They have a light and airy feel rather than a robust one.',
	PinkFrostingCupcake: 'These cupcakes are topped with a creamy pink frosting and have a cute cherry on top for extra sweetness.',
	RedVelvetCookies: "Red velvet cake in cookie form—what that's these Red Velvet Cookies are! Every mouthful is tangy and sweet because to the cream cheese and white chocolate chips.",
	WholeWheat: "Whole wheat bread, often known as wholemeal bread, is a form of bread produced using flour that is partially or totally milled from whole or almost-whole wheat grains. It's a type of brown bread.",
};

$('#form').submit(function (event) {
	event.preventDefault();

	var name = $('#name').val();
	var lastname = $('#lastname').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var message = $('#message').val();
	var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var nameReg = /^[a-zA-Z ]{2,30}$/;
	var phoneReg = /^[0-9]{0,11}$/;
	var messageReg = /.{10,500}/;

	if (name == '' || name == null) {
		alert('Name must be filled out');
		return false;
	} else if (!nameReg.test(name)) {
		alert('Name must be at least 2 characters and no more than 30');
		return false;
	}

	if (lastname == '' || lastname == null) {
		alert('Last name must be filled out');
		return false;
	} else if (!nameReg.test(name)) {
		alert('Last name must be at least 2 characters and no more than 30');
		return false;
	}

	if (email == '' || email == null) {
		alert('Email must be filled out');
		return false;
	} else if (!emailReg.test(email)) {
		alert('Email must be a valid email address');
		return false;
	}

	if (phone == '' || phone == null) {
		alert('Phone must be filled out');
		return false;
	} else if (!phoneReg.test(phone)) {
		alert('Phone must be a valid phone number');
		return false;
	}

	if (message == '' || message == null) {
		alert('Message must be filled out');
		return false;
	} else if (!messageReg.test(message)) {
		alert('Message must be at least 10 characters and no more than 500');
		return false;
	}

	window.location.href = 'mailto:hi@bred.one?subject=Contact%20Me%20Please&body=' + name + ' ' + lastname + '%0D%0A' + phone + '%0D%0A %0D%0A' + message;
});

JavaScriptGallery.initGallery();
JavaScriptGallery.setGalleryTransition('zoomin');

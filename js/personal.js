$(window).on('load', function() {
    //console.log('Погнали что ли');
	function digit (number) {
		var figures = "" + number;
		var sum = 0;
		for (var i = 0; i < figures.length; i++) 
			sum += +figures[i];
		return sum;
	}
	function arcan22(summ) {
		var sl1 = 0;
		var sl2 = 0;
		var sl3 = 0;
		summ = String(summ); // строку
		// длинна строки
		//let l_summ = summ.length;
		//console.log('Длинна строки_' + l_summ);
		if (summ.length==3) {
			console.log('Длинна 3 :' + summ);
			summ = digit(summ);
			return Number(summ);
		}
		else if (summ.length==2) {
			console.log('Длинна 2 :' + summ);
			if (Number(summ)>22) {
			sl1 = summ.substr(0,1);
			sl2 = summ.substr(1,1);
			sl3 = Number(sl1)+Number(sl2);
			console.log('Длинна 2 слог :' + sl3);
			return sl3;
			} else return Number(summ);
		}
		else if (summ.length==1) {
			console.log('Длинна 1 :' + summ);
			return Number(summ);
		}
		else if (summ.length<1) {
			console.log('Пусто :' + summ);
			return Number(summ);
		}
		else {
			console.log('Более 3-х знаков :' + summ);
			summ = digit(summ);
			console.log('Длинна 2 слог :' + summ);
			if (summ<23) {
				console.log('Меньше 23 :' + summ);
				return Number(summ);
			} else if (summ>23){
				console.log('Опять больше 22 слог :' + summ);
				summ = digit(summ);
				return Number(summ);
			}
		}
	}

    /* код на jQuery */
      // установим body фон #eee
      $('body').css('background-color', '#e1e1e1');
      // выровняем h1 по центру
      $('h1').css('text-align', 'center');

	// Считывает GET переменную по тегу и отдает.
	function get(name) {
	    if(name=(new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)){
	        return decodeURIComponent(name[1]);
	    };
	}
    	// Выводим некоторую информацию перед схемой
	var name = get('firstname');
	$('span.firstname').html('<b>'+name+'</b>');
	var birth = get('birthday');
	var year = birth[0] + birth[1] + birth[2] + birth[3];
	var month = birth[5] + birth[6];
	var day = birth[8] + birth[9];
	$('span.birthday').html('<b>'+day+' '+month+' '+year+'г.</b>');
	var vozr = 2024-Number(year);
	$('span.oldest').html('<b>'+vozr+'</b>');
	
	a = arcan22(+day);
	b = arcan22(+month);
	c = arcan22(+year);
	d = arcan22(a+b+c);
	e = arcan22(a+b+c+d);
	f = arcan22(a+b);
	g = arcan22(b+c);
	h = arcan22(c+d);
	i = arcan22(a+d);
	/*console.log(a);console.log(b);console.log(c);console.log(d);console.log(e);console.log(f);console.log(g);console.log(h);console.log(i);*/
	// Устанавливаем значения A-I на схему
	$('div.A').html(a);
	$('div.B').html(b);
	$('div.C').html(c);
	$('div.D').html(d);
	$('div.E').html(e);
	$('div.F').html(f);
	$('div.G').html(g);
	$('div.H').html(h);
	$('div.I').html(i);

	a2 = arcan22(e+a);
	b2 = arcan22(e+b);
	c2 = arcan22(e+c);
	d2 = arcan22(e+d);
	$('div.A2').html(a2);
	$('div.B2').html(b2);
	$('div.C2').html(c2);
	$('div.D2').html(d2);
	a1 = arcan22(a+a2);
	b1 = arcan22(b+b2);
	c1 = arcan22(c+c2);
	d1 = arcan22(d+d2);
	$('div.A1').html(a1);
	$('div.B1').html(b1);
	$('div.C1').html(c1);
	$('div.D1').html(d1);

	
	f2 = arcan22(e+f);
	g2 = arcan22(e+g);
	h2 = arcan22(e+h);
	i2 = arcan22(e+i);
	$('div.F2').html(f2);
	$('div.G2').html(g2);
	$('div.H2').html(h2);
	$('div.I2').html(i2);
	
    	f1 = arcan22(f+f2);
	g1 = arcan22(g+g2);
	h1 = arcan22(h+h2);
	i1 = arcan22(i+i2);
	$('div.F1').html(f1);
	$('div.G1').html(g1);
	$('div.H1').html(h1);
	$('div.I1').html(i1);
});

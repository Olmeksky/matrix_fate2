$(window).on('load', function() {
    console.log('Погнали что ли');

    function arcan22(summ) {
    
        let sl1 = 0;
        let sl2 = 0;
        let sl3 = 0;
        summ = String(summ); // строку
        // длинна строки
        //let l_summ = summ.length;
        //	console.log('Длинна строки_' + l_summ);
        
        if (summ.length==3) {
            console.log('Длинна 3 :' + summ);
            return Number(summ);
        }
        else if (summ.length==2) {
            console.log('Длинна 2 :' + summ);
            if (Number(summ)>22) {
                console.log('Длинна 2 AT :' + summ.substr(0,1) + ' _ ' + summ.substr(1,1));
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
            console.log('Более 3-х :' + summ);
            return Number(summ);
        }
    
    }


    /* код на jQuery */
      // установим body фон #eee
      //$('body').css('background-color', '#eee');
      // выровняем h1 по центру
      $('h1').css('text-align', 'center');

	// Считывает GET переменную по тегу и отдает.
	function get(name) {
	    if(name=(new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)){
	        return decodeURIComponent(name[1]);
	    };
	}
    
	var name = get('firstname');
	$('span.firstname').html('<b>'+name+'</b>');
	var birth = get('birthday');
	var year = birth[0] + birth[1] + birth[2] + birth[3];
	var month = birth[5] + birth[6];
	var day = birth[8] + birth[9];
	$('span.birthday').html('<b>'+day+' '+month+' '+year+'г.</b>');
	var vozr = 2024-Number(year);
		//console.log(vozr);
	$('span.oldest').html('<b>'+vozr+'</b>');
	var gen = get('gender');
	    //console.log(gen);
	if(gen=='Гендер') {
		$('span.gender').html('<u>не пожелали указать гендерную позицию</u>');
	} else {
		$('span.gender').html('<b>'+gen+'</b>');
	}

    
    console.log(name);
    console.log(birth);
    console.log('год '+year);
    console.log('число мес '+month);
    console.log('число дня '+ day);

    
});

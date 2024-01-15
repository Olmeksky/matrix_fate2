
function get(name){
    
    if(name=(new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)){
        return decodeURIComponent(name[1]);
    };
} 



var year;
var month;
var day;

//Эти переменные
var a; //Дата рождения
var b; //номер месяца рождения.
var c; //год рождения.
var d; //D = A + B + C.
var e; //E = A + B + C + D.

var j; //J = A + E.
var k; //K = B + E.
var l; //L = C + E.
var m; //M = D + E.

var o; //O = A + J.
var p; //P = B + K.
var q; //Q = L + C.
var n; //N = M +D.
var s; //S = J + E.
var t; //T = K + E.

var f; //F = A + B.
var g; //G = B + C.
var h; //H = C + D.
var i; //I = D + A.
var l2; //L2 = F + G + H + I.
var l1; //L1 = E+L2

var f2; //F2 = F + L2
var g2; //G2 = G + L2
var h2; //H2 = H + L2
var i2; //I2 = I + L2

var f1; //F1 = F + F2
var g1; //G1 = G + G2
var h1; //H1 = H + H2
var i1; //I1 = I + I2

var r; //R = M + L
var r1; //R1 = R+M
var r2; //R2 = R+L

var op1; //OP1 = A + B
var op2; //OP2 = A + OP1
var op3; //OP3 = B + OP1
var op4; //OP4 = B + OP1
var op5; //R2 = R+L;var r; //R = M + L;
var op6; //R1 = R+M;
var op7; //R2 = R+L;var r; //R = M + L;
var op8; //R1 = R+M;
var op9; //R2 = R+L;var r; //R = M + L;
var op10; //R1 = R+M;
var op11; //R2 = R+L;
var op12; //R1 = R+M;
var op13; //R2 = R+L;var r; //R = M + L;
var op14; //R1 = R+M;
var op15; //R2 = R+L;

var Sahasra; //Сахасрара = А + B.
var Adzhna; //Аджна = O + P.
var Vishudha; //Вишудха = J + K.
var Anahata; //Анахата = S + T.
var Manipura; //Манипура = E + E.
var Muladhara; //Муладхара = C + D.
var Svadhistana; //Свадхистана = L + M.

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

function arcanes(b){
    let c1 = 0;
    let c2 = 0;
    if(b > 22){
        c1 = b / 10;
        c1 = parseInt(c1);
        c2 = b % 10;
        b = c1 + c2;
    };
    return b;
}
function arcanes2(b){
    let c1 = 0;
    let c2 = 0;
        c1 = b / 10;
        c1 = parseInt(c1);
        c2 = b % 10;
        b = c1 + c2;
    return b;
}

var a = 0;

function schet(db){
    
    if(db == ""){
        alert("Извините, но вы не указали дату");
    }else{
        
        //var vb1 = document.getElementById('vb1');
        //alert(vb1);
       // window.location.href="./index2.html";
        year = parseInt(db[0]) + parseInt(db[1]) + parseInt(db[2]) + parseInt(db[3]);  
			//console.log('1 цифра года :'+ parseInt(db[0]));
			//console.log('2 цифра года :'+ parseInt(db[1]));
			//console.log('3 цифра года :'+ parseInt(db[2]));
			//console.log('4 цифра года :'+ parseInt(db[3]));
			//console.log('Год_ :'+ year);
        month = db[5] + db[6];
        day = db[8] + db[9];
        month = parseInt(month);
        day = parseInt(day);

        a = arcan22(day);
        b = arcan22(month);
        c = arcan22(year);
			console.log('День :'+a);
			console.log('месяц :'+b);
			console.log('год :'+c);

        d = arcan22(a + b + c);
        e = arcan22(a + b + c + d);
        j = arcan22(a + e);
        k = arcan22(b + e);
        l = arcan22(c + e);
        m = arcan22(d + e);
			//console.log('D :'+d);
			//console.log('E без нум :'+ a + b + c + d);
			//console.log('E :'+e);
			//console.log('J :'+j);
			//console.log('K :'+k);
			//console.log('L :'+l);
			//console.log('M :'+m);

        o = arcan22(a + j);
        p = arcan22(b + k);
        q = arcan22(l + c);
        n = arcan22(m + d);
        s = arcan22(j + e);
        t = arcan22(k + e);

        f = arcan22(a + b);
        g = arcan22(b + c);
        h = arcan22(c + d);
        i = arcan22(d + a);
        l2 = arcan22(f + g + h + i); //L2 = F + G + H + I.
        l1 = arcan22(e + l2);

        f2 = arcan22(f + e);
        g2 = arcan22(g + e);
        h2 = arcan22(h + e);
        i2 = arcan22(i + e);

        f1 = arcan22(f  + f2); //F1 = F + F2;
        g1 = arcan22(g + g2); 
        h1 = arcan22(h + h2);
        i1 = arcan22(i + i2);

        r = arcan22(m + l); 
        r1 = arcan22(r + m);
        r2 = arcan22(r + l);

        op1 = arcan22(a + b);
        op2 = arcan22(a + op1);
        op3 = arcan22(b + op1);
        op4 = arcan22(o + p);
        op5 = arcan22(o + op4);
        op6 = arcan22(p + op4);
        op7 = arcan22(j + k);
        op8 = arcan22(k + op7);
        op9 = arcan22(j + op7);
        op10 = arcan22(s + t);
        op11 = arcan22(s + op10);
        op12 = arcan22(t + op10);
        op13 = arcan22(d + c);
        op14 = arcan22(d + op13);
        op15 = arcan22(c + op13);

        Sahasra = arcan22(a + b); //Сахасрара = А + B.
        Adzhna = arcan22(o + p); //Аджна = O + P.
        Vishudha = arcan22(j + k); //Вишудха = J + K.
        Anahata = arcan22(s + t); //Анахата = S + T.
        Manipura = arcan22(e + e); //Манипура = E + E.
        Muladhara = arcan22(c + d); //Муладхара = C + D.
        Svadhistana = arcan22(l + m); //Свадхистана = L + M.

        //alert("a =" + a + "; b = " + b + "; c = " + c + "; d = " + d + "; e = " + e +  "; j = " + j + "; k = " + k + "; l = " + l + "; m = " + m + "; o = " + o +  "; p = " + p + "; q = " + q + "; n = " + n + "; s = " + s + "; t = " + t);
        //alert("f =" + f + "; g =" + g + "; h = " + h + "; i = " + i + "; l1 = " + l1 + "; l2 = " + l2);
        //alert("f2 =" + f2 + "; g2 =" + g2 + "; h2 = " + h2 + "; i2 = " + i2 );

        var bla = document.getElementById('1a');
        var blb = document.getElementById('1b');
        var blc = document.getElementById('1c');
        var bld = document.getElementById('1d');
        var ble = document.getElementById('1e');
        var blf = document.getElementById('1f');
        var blg = document.getElementById('1g');
        var blh = document.getElementById('1h');
        var bli = document.getElementById('1i');
        var blj = document.getElementById('1j');
        var blk = document.getElementById('1k');
        var bll = document.getElementById('1l');
        var blm = document.getElementById('1m');
        var blo = document.getElementById('1o');
        var blp = document.getElementById('1p');
        var blq = document.getElementById('1q');
        var bln = document.getElementById('1n');
        var bls = document.getElementById('1s');
        var blt = document.getElementById('1t');
        var bll2 = document.getElementById('1l2');
        var bll1 = document.getElementById('1l1');
        var blf2 = document.getElementById('1f2');
        var blg2 = document.getElementById('1g2');
        var blh2 = document.getElementById('1h2');
        var bli2 = document.getElementById('1i2');
        var blf1 = document.getElementById('1f1');
        var blg1 = document.getElementById('1g1');
        var blh1 = document.getElementById('1h1');
        var bli1 = document.getElementById('1i1');
        var blr = document.getElementById('1r');
        var blr1 = document.getElementById('1r1');
        var blr2 = document.getElementById('1r2');

        var bop1 = document.getElementById('1op1');
        var bop2 = document.getElementById('1op2');
        var bop3 = document.getElementById('1op3');
        var bop4 = document.getElementById('1op4');
        var bop5 = document.getElementById('1op5');
        var bop6 = document.getElementById('1op6');
        var bop7 = document.getElementById('1op7');
        var bop8 = document.getElementById('1op8');
        var bop9 = document.getElementById('1op9');
        var bop10 = document.getElementById('1op10');
        var bop11 = document.getElementById('1op11');
        var bop12 = document.getElementById('1op12');
        var bop13 = document.getElementById('1op13');
        var bop14 = document.getElementById('1op14');
        var bop15 = document.getElementById('1op15');

        bla.textContent = a;
        blb.textContent = b;
        blc.textContent = c;
        bld.textContent = d;
        ble.textContent = e;
        blf.textContent = f;
        blg.textContent = g;
        blh.textContent = h;
        bli.textContent = i;
        blj.textContent = j;
        blk.textContent = k;
        bll.textContent = l;
        blm.textContent = m;
        blo.textContent = o;
        blp.textContent = p;
        blq.textContent = q;
        bln.textContent = n;
        bls.textContent = s;
        blt.textContent = t;
        bll2.textContent = l2;
        bll1.textContent = l1;
        blf2.textContent = f2;
        blg2.textContent = g2;
        blh2.textContent = h2;
        bli2.textContent = i2;
        blf1.textContent = f1;
        blg1.textContent = g1;
        blh1.textContent = h1;
        bli1.textContent = i1;
        blr.textContent = r;
        blr1.textContent = r1;
        blr2.textContent = r2;
        
        bop1.textContent = op1;
        bop2.textContent = op2;
        bop3.textContent = op3;
        bop4.textContent = op4;
        bop5.textContent = op5;
        bop6.textContent = op6;
        bop7.textContent = op7;
        bop8.textContent = op8;
        bop9.textContent = op9;
        bop10.textContent = op10;
        bop11.textContent = op11;
        bop12.textContent = op12;
        bop13.textContent = op13;
        bop14.textContent = op14;
        bop15.textContent = op15;

        var blSahasra = document.getElementById('Sahasra');
        var blAdzhna = document.getElementById('Adzhna');
        var blVishudha = document.getElementById('Vishudha');
        var blAnahata = document.getElementById('Anahata');
        var blManipura = document.getElementById('Manipura');
        var blrMuladhara = document.getElementById('Muladhara');
        var blSvadhistana = document.getElementById('Svadhistana');

        var blSahasra1 = document.getElementById('Sahasra1');
        var blAdzhna1 = document.getElementById('Adzhna1');
        var blVishudha1 = document.getElementById('Vishudha1');
        var blAnahata1 = document.getElementById('Anahata1');
        var blManipura1 = document.getElementById('Manipura1');
        var blrMuladhara1 = document.getElementById('Muladhara1');
        var blSvadhistana1 = document.getElementById('Svadhistana1');

        var blSahasra2 = document.getElementById('Sahasra2');
        var blAdzhna2 = document.getElementById('Adzhna2');
        var blVishudha2 = document.getElementById('Vishudha2');
        var blAnahata2 = document.getElementById('Anahata2');
        var blManipura2 = document.getElementById('Manipura2');
        var blrMuladhara2 = document.getElementById('Muladhara2');
        var blSvadhistana2 = document.getElementById('Svadhistana2');

        blSahasra.textContent = Sahasra;
        blAdzhna.textContent =  Adzhna;
        blVishudha.textContent = Vishudha;
        blAnahata.textContent = Anahata;
        blManipura.textContent =  Manipura;
        blrMuladhara.textContent = Muladhara;
        blSvadhistana.textContent = Svadhistana;

        blSahasra1.textContent = a;
        blAdzhna1.textContent =  o;
        blVishudha1.textContent = j;
        blAnahata1.textContent = s;
        blManipura1.textContent =  e;
        blrMuladhara1.textContent = c;
        blSvadhistana1.textContent = l;

        blSahasra2.textContent = b;
        blAdzhna2.textContent =  p;
        blVishudha2.textContent = k;
        blAnahata2.textContent = t;
        blManipura2.textContent =  e;
        blrMuladhara2.textContent = d;
        blSvadhistana2.textContent = m;

        var it1 = document.getElementById('it1');
        var it2 = document.getElementById('it2');
        var itit = document.getElementById('itit');

        it1.textContent =  arcan22(a + o + j + s + e + c + l);
        it2.textContent = arcan22(b + p + k + t + e + d + m);
        itit.textContent = arcan22(Sahasra + Adzhna + Vishudha + Anahata + Manipura + Muladhara + Svadhistana);
        
        var dateb = document.getElementById('dateb');
        dateb.textContent = "Дата вашего рождения: " + db;

        var nebo = document.getElementById('nebo');
        var zeml = document.getElementById('zeml');
        var neboizeml = document.getElementById('neboizeml');

        nebo.textContent =  "Небо: " + arcan22(b + d);
        zeml.textContent = "Земля: " + arcan22(a + c);
        //neboizeml.textContent = arcan22(arcan22(b + d) + arcan22(a + c));
		neboizeml.textContent = arcan22(arcan22(b + d) + arcan22(a + c));
        var seb = arcan22(nebo+zeml+neboizeml);

        var muzh = document.getElementById('muzh');
        var zhen = document.getElementById('zhen');
        var muzhizhen = document.getElementById('muzhizhen');

        muzh.textContent =  "М: " + arcan22(f + h);
        zhen.textContent = "Ж: " + arcan22(g + i);
        //muzhizhen.textContent = arcan22(arcan22(h + f) + arcan22(g + i));
		muzhizhen.textContent = arcan22(arcan22(f + h) + arcan22(g + i));
        var soc = arcan22(muzh+zhen+muzhizhen);

        var garm = document.getElementById('garm');

        //garm.textContent =  t;
		garm.textContent = arcan22(arcan22(arcan22(b + d) + arcan22(a + c)) + arcan22(arcan22(f + h) + arcan22(g + i)));
        
        
        var planet = document.getElementById('planet');

        //planet.textContent =  s;
	    planet.textContent =  arcan22(seb+soc);

        var vb = document.getElementById('vb');
        
        vb.style.display = "block";

    };
};

function get(name){
    if(name=(new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)){
        return decodeURIComponent(name[1]);
    };
} 





document.onload = schet(get('datBirst'));

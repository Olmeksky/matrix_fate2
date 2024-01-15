
function get(name){
    
    if(name=(new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)){
        return decodeURIComponent(name[1]);
    };
} 

//1111111111111111111111111111111111111111111111111111111

var year;
var day;
var month;

//Эти переменные
var a; //Дата рождения
var b; //номер месяца рождения.
var c; //год рождения.
var d; //D = A + B + C.
var e; //E = A + B + C + D.
var f; //F = A + B.
var g; //G = B + C.
var h; //H = C + D.
var i; //I = D + A.
var j; //J = A + E.
var k; //K = B + E.
var l; //L = C + E.
var m; //M = D + E.
var o; //O = A + J.
var p; //P = B + K.
var q; //Q = L + C.
var n; //N = M + D.
var s; //S = J + E.
var t; //T = K + E.

var l2; //L2 = F + G + H + I.
var l1; //L1 = E+L2

var f2; //F2 = F + L2;
var g2; //G2 = G + L2;
var h2; //H2 = H + L2;
var i2; //I2 = I + L2.

var f1; //F1 = F + F2;
var g1; //G1 = G + G2;
var h1; //H1 = H + H2;
var i1; //I1 = I + I2.

var r; //R = M + L;
var r1; //R1 = R+M;
var r2; //R2 = R+L;

var op1; //OP1 = A + B;
var op2; //OP2 = A + OP1;
var op3; //OP3 = B + OP1;
var op4; //OP4 = B + OP1;
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

//2222222222222222222222222222222222222222222222222222222222222222222

var zyear;
var zday;
var zmonth;

//Эти переменные
var za; //Дата рождения
var zb; //номер месяца рождения.
var zc; //год рождения.
var zd; //D = A + B + C.
var ze; //E = A + B + C + D.
var zf; //F = A + B.
var zg; //G = B + C.
var zh; //H = C + D.
var zi; //I = D + A.
var zj; //J = A + E.
var zk; //K = B + E.
var zl; //L = C + E.
var zm; //M = D + E.
var zo; //O = A + J.
var zp; //P = B + K.
var zq; //Q = L + C.
var zn; //N = M +D.
var zs; //S = J + E.
var zt; //T = K + E.

var zl2; //L2 = F + G + H + I.
var zl1; //L1 = E+L2

var zf2; //F2 = F + L2;
var zg2; //G2 = G + L2;
var zh2; //H2 = H + L2;
var zi2; //I2 = I + L2.

var zf1; //F1 = F + F2;
var zg1; //G1 = G + G2;
var zh1; //H1 = H + H2;
var zi1; //I1 = I + I2.

var zr; //R = M + L;
var zr1; //R1 = R+M;
var zr2; //R2 = R+L;

var zop1; //OP1 = A + B;
var zop2; //OP2 = A + OP1;
var zop3; //OP3 = B + OP1;
var zop4; //OP4 = B + OP1;
var zop5; //R2 = R+L;var r; //R = M + L;
var zop6; //R1 = R+M;
var zop7; //R2 = R+L;var r; //R = M + L;
var zop8; //R1 = R+M;
var zop9; //R2 = R+L;var r; //R = M + L;
var zop10; //R1 = R+M;
var zop11; //R2 = R+L;
var zop12; //R1 = R+M;
var zop13; //R2 = R+L;var r; //R = M + L;
var zop14; //R1 = R+M;
var zop15; //R2 = R+L;

var zSahasra; //Сахасрара = А + B.
var zAdzhna; //Аджна = O + P.
var zVishudha; //Вишудха = J + K.
var zAnahata; //Анахата = S + T.
var zManipura; //Манипура = E + E.
var zMuladhara; //Муладхара = C + D.
var zSvadhistana; //Свадхистана = L + M.

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


var a = 0;

function schet(db, zdb){
    //console.log(db)
    if(db == "" || zdb == ""){
        alert("Извините, но вы не указали дату");
    }else{
        console.log(zdb)
        year = parseInt(db[0]) + parseInt(db[1]) + parseInt(db[2]) + parseInt(db[3]);  
        month = db[5] + db[6];  
        day = db[8] + db[9];  
        month = parseInt(month);
        day = parseInt(day);

        a = arcan22(day);
        b = arcan22(month);
        c = arcan22(year);
        d = arcan22(a + b + c);
        e = arcan22(a + b + c + d);
		f = arcan22(a + b);
        g = arcan22(b + c);
        h = arcan22(c + d);
        i = arcan22(d + a);
		
        j = arcan22(a + e);
        k = arcan22(b + e);
        l = arcan22(c + e);
        m = arcan22(d + e);
        o = arcan22(a + j);
        p = arcan22(b + k);
        q = arcan22(l + c);
        n = arcan22(m + d);
		
        s = arcan22(j + e);
        t = arcan22(k + e);
			//console.log('A :'+a);
			//console.log('B :'+b);
			//console.log('C :'+c);
			//console.log('D :'+d);
			//console.log('E :'+e);
			//console.log('F :'+f);
			//console.log('G :'+g);
			//console.log('H :'+h);
			//console.log('I :'+i);
			//console.log('J :'+j);
			//console.log('K :'+k);
			//console.log('L :'+l);
			//console.log('M :'+m);
			//console.log('O :'+o);
			//console.log('P :'+p);
			//console.log('Q :'+q);
			//console.log('N :'+n);
			//console.log('S :'+s);
			//console.log('T :'+t);

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
        op8 = arcan22(j + op7);
        op9 = arcan22(k + op7);
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

//---------------------------------222222

        zyear = parseInt(zdb[0]) + parseInt(zdb[1]) + parseInt(zdb[2]) + parseInt(zdb[3]);  
        zmonth = zdb[5] + zdb[6];  
        zday = zdb[8] + zdb[9];  
        zmonth = parseInt(zmonth);
        zday = parseInt(zday);

        za = arcan22(zday);
        zb = arcan22(zmonth);
        zc = arcan22(zyear);
        zd = arcan22(za + zb + zc);
        ze = arcan22(za + zb + zc + zd);
			//console.log('E2 :'+ze);

        zj = arcan22(za + ze);
        zk = arcan22(zb + ze);
        zl = arcan22(zc + ze);
        zm = arcan22(zd + ze);
        zo = arcan22(za + zj);
        zp = arcan22(zb + zk);
        zq = arcan22(zl + zc);
        zn = arcan22(zm + zd);
		
        zs = arcan22(zj + ze);
        zt = arcan22(zk + ze);

        zf = arcan22(za + zb);
        zg = arcan22(zb + zc);
        zh = arcan22(zc + zd);
        zi = arcan22(zd + za);
		
        zl2 = arcan22(zf + zg + zh + zi); //L2 = F + G + H + I.
        zl1 = arcan22(ze + zl2);

        zf2 = arcan22(zf + ze);
        zg2 = arcan22(zg + ze);
        zh2 = arcan22(zh + ze);
        zi2 = arcan22(zi + ze);

        zf1 = arcan22(zf  + zf2); //F1 = F + F2;
        zg1 = arcan22(zg + zg2); 
        zh1 = arcan22(zh + zh2);
        zi1 = arcan22(zi + zi2);

        zr = arcan22(zm + zl); 
        zr1 = arcan22(zr + zm);
        zr2 = arcan22(zr + zl);

        zop1 = arcan22(za + zb);
        zop2 = arcan22(za + zop1);
        zop3 = arcan22(zb + zop1);
        zop4 = arcan22(zo + zp);
        zop5 = arcan22(zo + zop4);
        zop6 = arcan22(zp + zop4);
        zop7 = arcan22(zj + zk);
        zop8 = arcan22(zk + zop7);
        zop9 = arcan22(zj + zop7);
        zop10 = arcan22(zs + zt);
        zop11 = arcan22(zs + zop10);
        zop12 = arcan22(zt + zop10);
        zop13 = arcan22(zd + zc);
        zop14 = arcan22(zd + zop13);
        zop15 = arcan22(zc + zop13);

        zSahasra = arcan22(za + zb); //Сахасрара = А + B.
        zAdzhna = arcan22(zo + zp); //Аджна = O + P.
        zVishudha = arcan22(zj + zk); //Вишудха = J + K.
        zAnahata = arcan22(zs + zt); //Анахата = S + T.
        zManipura = arcan22(ze + ze); //Манипура = E + E.
        zMuladhara = arcan22(zc + zd); //Муладхара = C + D.
        zSvadhistana = arcan22(zl + zm); //Свадхистана = L + M.

    
        //alert("a =" + a + "; b = " + b + "; c = " + c + "; d = " + d + "; e = " + e +  "; j = " + j + "; k = " + k + "; l = " + l + "; m = " + m + "; o = " + o +  "; p = " + p + "; q = " + q + "; n = " + n + "; s = " + s + "; t = " + t);
        //alert("f =" + f + "; g =" + g + "; h = " + h + "; i = " + i + "; l1 = " + l1 + "; l2 = " + l2);
        //alert("f2 =" + f2 + "; g2 =" + g2 + "; h2 = " + h2 + "; i2 = " + i2 );



        //console.log(zdb);

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
			
        bla.textContent = arcan22(a + za);
        blb.textContent = arcan22(b + zb);
        blc.textContent = arcan22(c + zc);
        bld.textContent = arcan22(d + zd);
        ble.textContent = arcan22(e + ze);
        blf.textContent = arcan22(f + zf);
        blg.textContent = arcan22(g + zg);
        blh.textContent = arcan22(h + zh);
        bli.textContent = arcan22(i + zi);
			// это блок с неправильными формулами, например формулы тригонов неправильно считает
        //blj.textContent = arcan22(j + zj);
        //blk.textContent = arcan22(k + zk);
        //bll.textContent = arcan22(l + zl);
        //blm.textContent = arcan22(m + zm);
        //blo.textContent = arcan22(o + zo);
        //blp.textContent = arcan22(p + zp);
        //blq.textContent = arcan22(q + zq);
        //bln.textContent = arcan22(n + zn);
			jzj = arcan22(arcan22(a + za) + arcan22(e + ze));
			kzk = arcan22(arcan22(b + zb) + arcan22(e + ze));
			lzl = arcan22(arcan22(c + zc) + arcan22(e + ze));
			mzm = arcan22(arcan22(d + zd) + arcan22(e + ze));
			blj.textContent = arcan22(arcan22(a + za) + arcan22(e + ze));
			blk.textContent = arcan22(arcan22(b + zb) + arcan22(e + ze));
			bll.textContent = arcan22(arcan22(c + zc) + arcan22(e + ze));
			blm.textContent = arcan22(arcan22(d + zd) + arcan22(e + ze));
			
			blo.textContent = arcan22(arcan22(a + za) + jzj);
			blp.textContent = arcan22(arcan22(b + zb) + kzk);
			blq.textContent = arcan22(lzl + arcan22(c + zc));
			bln.textContent = arcan22(mzm + arcan22(d + zd));

            // это 2ой блок с неправильными формулами, например формулы тригонов неправильно считает
        //bls.textContent = arcan22(s + zs);
        //blt.textContent = arcan22(t + zt);
        bls.textContent = arcan22(arcan22(j + zj)+arcan22(e + ze));
        blt.textContent = arcan22(arcan22(k + zk)+arcan22(e + ze));
        
        bll2.textContent = arcan22(l2 + zl2); //правильно
        bll1.textContent = arcan22(arcan22(e + ze)+arcan22(l2 + zl2));//переделал
            //переделал
        blf2.textContent = arcan22(arcan22(f + zf)+arcan22(e + ze));
        blg2.textContent = arcan22(arcan22(g + zg)+arcan22(e + ze));
        blh2.textContent = arcan22(arcan22(h + zh)+arcan22(e + ze));
        bli2.textContent = arcan22(arcan22(i + zi)+arcan22(e + ze));
        blf1.textContent = arcan22(arcan22(f + zf)+arcan22(f2 + zf2));
        blg1.textContent = arcan22(arcan22(g + zg)+arcan22(g2 + zg2));
        blh1.textContent = arcan22(arcan22(h + zh)+arcan22(h2 + zh2));
        bli1.textContent = arcan22(arcan22(i + zi)+arcan22(i2 + zi2));
        blr.textContent = arcan22(arcan22(m + zm)+arcan22(l + zl));
        blr1.textContent = arcan22(arcan22(r + zr)+arcan22(m + zm));
        blr2.textContent = arcan22(arcan22(r + zr)+arcan22(l + zl));
            // end переделки
            
            

        bop1.textContent = arcan22(op1 + zop1);
        bop2.textContent = arcan22(op2 + zop2);
        bop3.textContent = arcan22(op3 + zop3);
        bop4.textContent = arcan22(op4 + zop4);
        bop5.textContent = arcan22(op5 + zop5);
        bop6.textContent = arcan22(op6 + zop6);
        bop7.textContent = arcan22(op7 + zop7);
        bop8.textContent = arcan22(op9 + zop9);
        bop9.textContent = arcan22(op8 + zop8);
        bop10.textContent = arcan22(op10 + zop10);
        bop11.textContent = arcan22(op11 + zop11);
        bop12.textContent = arcan22(op12 + op12);
        bop13.textContent = arcan22(op13 + zop13);
        bop14.textContent = arcan22(op14 + zop14);
        bop15.textContent = arcan22(op15 + op15);


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

        blSahasra.textContent = arcan22(Sahasra + zSahasra);
        blAdzhna.textContent =  arcan22(Adzhna + zAdzhna);
        blVishudha.textContent = arcan22(Vishudha + zVishudha);
        blAnahata.textContent = arcan22(Anahata + zAnahata);
        blManipura.textContent =  arcan22(Manipura + zManipura);
        blrMuladhara.textContent = arcan22(Muladhara + zMuladhara);
        blSvadhistana.textContent = arcan22(Svadhistana + zSvadhistana);

        blSahasra1.textContent = arcan22(a + za);
        blAdzhna1.textContent =  arcan22(o + zo);
        blVishudha1.textContent = arcan22(j + zj);
        blAnahata1.textContent = arcan22(s + zs);
        blManipura1.textContent =  arcan22(e + ze);
        blrMuladhara1.textContent = arcan22(c + zc);
        blSvadhistana1.textContent = arcan22(l + zl);

        blSahasra2.textContent = arcan22(b + zb);
        blAdzhna2.textContent =  arcan22(p + zp);
        blVishudha2.textContent = arcan22(k + zk);
        blAnahata2.textContent = arcan22(t + zt);
        blManipura2.textContent =  arcan22(e + ze);
        blrMuladhara2.textContent = arcan22(d + zd);
        blSvadhistana2.textContent = arcan22(m + zm);

        var it1 = document.getElementById('it1');
        var it2 = document.getElementById('it2');
        var itit = document.getElementById('itit');

        it1.textContent =  arcan22(arcan22(a + o + j + s + e + c + l) + arcan22(za + zo + zj + zs + ze + zc + zl));
        it2.textContent = arcan22(arcan22(b + p + k + t + e + d + m) + arcan22(zb + zp + zk + zt + ze + zd + zm));
        itit.textContent = arcan22(arcan22(Sahasra + Adzhna + Vishudha + Anahata + Manipura + Muladhara + Svadhistana) + arcan22(zSahasra + zAdzhna + zVishudha + zAnahata + zManipura + zMuladhara + zSvadhistana));
        
        var dateb = document.getElementById('dateb');
        dateb.textContent = "Даты рождения: " + db + " + " + zdb;



        var nebo = document.getElementById('nebo');
        var zeml = document.getElementById('zeml');
        var neboizeml = document.getElementById('neboizeml');

        nebo.textContent =  "Небо: " + arcan22(arcan22(b + zb) + arcan22(d + zd));
        zeml.textContent = "Земля: " + arcan22(arcan22(a + za) + arcan22(c + zc));

            nebo2 = arcan22(arcan22(b + zb) + arcan22(d + zd));
            zeml2 = arcan22(arcan22(a + za) + arcan22(c + zc));
			neboizeml2 = arcan22(arcan22(arcan22(b + zb) + arcan22(d + zd)) + arcan22(arcan22(a + za) + arcan22(c + zc)));
		
        //neboizeml.textContent = arcan22(arcan22(b + d) + arcan22(a + c));
		//neboizeml.textContent = arcan22(arcan22(arcan22(b + d) + arcan22(zb + zd)) + arcan22(arcan22(a + c) + arcan22(za + zc)));
		neboizeml.textContent = neboizeml2;

        var muzh = document.getElementById('muzh');
        var zhen = document.getElementById('zhen');
        var muzhizhen = document.getElementById('muzhizhen');

        muzh.textContent =  "М: " + arcan22(arcan22(f + zf) + arcan22(h + zh));
        zhen.textContent = "Ж: " + arcan22(arcan22(g + zg) + arcan22(i + zi));
				//console.log('F : ' + f);
				//console.log('ZF : ' + zf);
				//console.log('H : ' + h);
				//console.log('ZH : ' + zh);
				//console.log('G : ' + g);
				//console.log('ZG : ' + zg);
				//console.log('I : ' + i);
				//console.log('ZI : ' + zi);
            muzh2 = arcan22(arcan22(f + zf) + arcan22(h + zh));
            zhen2 = arcan22(arcan22(g + zg) + arcan22(i + zi));
			fh_zfzh = arcan22(arcan22(f + zf) + arcan22(h + zh));
			gi_zgzi = arcan22(arcan22(g + zg) + arcan22(i + zi));
				//неверные старые формулы
				//console.log('FH_ZFZH : ' + arcan22(arcan22(f + h) + arcan22(zf + zh)));
				//console.log('GI_ZGZI : ' + arcan22(arcan22(g + i) + arcan22(zg + zi)));
				//console.log('FH_ZFZH : ' + fh_zfzh);
				//console.log('GI_ZGZI : ' + gi_zgzi);
			muzhizhen2 = arcan22(fh_zfzh + gi_zgzi);
				console.log('muzhizhen2 : ' + muzhizhen2);
			
        //muzhizhen.textContent = arcan22(arcan22(arcan22(h + f) + arcan22(g + i)) + arcan22(arcan22(zh + zf) + arcan22(zg + zi)));  
		//muzhizhen.textContent = arcan22(arcan22(arcan22(f + h) + arcan22(zf + zh)) + arcan22(arcan22(g + i) + arcan22(zg + zi)));
		muzhizhen.textContent = muzhizhen2;

        var garm = document.getElementById('garm');

        //garm.textContent =  arcan22(t + zt);
		garm.textContent =  arcan22(neboizeml2 + muzhizhen2);

        var planet = document.getElementById('planet');

        //planet.textContent =  arcan22(s + zs);
        planet.textContent =  arcan22(arcan22(nebo2+zeml2+neboizeml2)+arcan22(muzh2+zhen2+muzhizhen2));
        

        var vb = document.getElementById('vb');
        
        vb.style.display = "block";


        

    };

    
};

function get(name){
    if(name=(new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)){
        return decodeURIComponent(name[1]);
    };
} 





document.onload = schet(get('datBirst'), get('datBirst2'));

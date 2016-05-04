window.onload=function(){
	var imgboxa=getClass('imgbox-boxb')[0].getElementsByTagName('a');
	// console.log(imgboxa);
	var imgbox=getClass('imgbox-box')[0];
	var imgboxli=getClass('banbtn',imgbox)[0].getElementsByTagName('li');
	// console.log(imgboxli);
	var index=0;
	var t=setInterval(tab,3000);
	function tab(){
		index++;
		if(index==imgboxa.length){
			index=0;
		}
		for (var i = 0; i < imgboxa.length; i++) {
			// imgboxa[i].style.opacity='0';
			animate(imgboxa[i],{opacity:0});
			imgboxli[i].className='';
		};
		animate(imgboxa[index],{opacity:1});
		// imgboxa[index].style.opacity='1';
		imgboxli[index].className='banbtn-sy';
	}
	for (var i = 0; i < imgboxli.length; i++) {
		imgboxli[i].index=i;
		imgboxli[i].onclick=function(){
			for (var j = 0; j < imgboxa.length; j++) {
				// imgboxa[j].style.opacity='0';
				animate(imgboxa[j],{opacity:0});
				imgboxli[j].className='';
			};
			animate(imgboxa[this.index],{opacity:1});
			// imgboxa[this.index].style.opacity='1';
			imgboxli[this.index].className='banbtn-sy';
			index=this.index;
		}
		
	};
	var liebox=getClass('liebiao-right')[0];
	// console.log(liebox);
	liebox.onmouseover=function(){
		clearInterval(t);
	}
	liebox.onmouseout=function(){
		t=setInterval(tab,3000);
	}
	var bannleft=getClass('imgbox-leftbtn')[0];
	// console.log(bannleft);
	var bannright=getClass('imgbox-rightbtn')[0];
	// console.log(bannright);
	bannright.onclick=function(){
		tab();
	}
	bannleft.onclick=function(){
		index--;
		if(index==-1){
			index=imgboxa.length-1;
		}
		for (var i = 0; i < imgboxa.length; i++) {
			animate(imgboxa[i],{opacity:0});
			// imgboxa[i].style.opacity='0';
			imgboxli[i].className='';
		};
		animate(imgboxa[index],{opacity:1});
		// imgboxa[index].style.opacity='1';
		imgboxli[index].className='banbtn-sy';
	}

	//选项卡


	// var floor1box=getClass('floor1box1')[0];
	// var floor1box1=getClass('floor1box',floor1box);
	// console.log(floor1box1);
	// var fl1a=getClass('floor1-topcon')[0].getElementsByTagName('a');
	// console.log(fl1a);

	// var fl1a1=getClass('floor1-topcon')[0].getElementsByTagName('a')[0];
	// fl1a1.style.cssText='height:33px;background:#fff;border-right:1px solid #c81623;border-left:1px solid #c81623;border-top:3px solid #c81623;color:#da646c;margin-left: -1px;line-height: 30px;margin-top: -1px;';

   	var floor1box=getClass('floor-c');
   	// var floor1box1=getClass('floor1box',floor1box);
   	var fl1a=getClass('floor1-topcon');
   	var fl1a1;
   	
   	var bs,ts;
   	for (var i = 0; i < fl1a.length; i++) {

   		fl1a1=getClass('floor1-topcon')[i].getElementsByTagName('a')[0].style.cssText='height:33px;background:#fff;border-right:1px solid #c81623;border-left:1px solid #c81623;border-top:3px solid #c81623;color:#da646c;margin-left: -1px;line-height: 30px;margin-top: -1px;';
   		// console.log(fl1a1)
   		bs=fl1a[i].getElementsByTagName('a');
   		ts=getClass('floor-c1',floor1box[i]);

   		taa(bs,ts);
   	};

	function taa(bts,tt){

		for (var i = 0; i < bts.length; i++) {

			// console.log(bt.length)
			bts[i].index=i;
			bts[i].onmouseover=function(){
				for (var j = 0; j < tt.length; j++) {
					tt[j].style.display='none';
					bts[j].style.cssText='';
				};
				tt[this.index].style.display='block';
				bts[this.index].style.cssText='height:33px;background:#fff;border-right:1px solid #c81623;border-left:1px solid #c81623;border-top:3px solid #c81623;color:#da646c;margin-left: -1px;line-height: 30px;margin-top: -1px;';
			}
		};
	}

	/*for (var i = 0; i < fl1a.length; i++) {
		fl1a[i].index=i;
		fl1a[i].onmouseover=function(){
			for (var j = 0; j < floor1box1.length; j++) {
				floor1box1[j].style.display='none';
			};
			floor1box1[this.index].style.display='block';
		}
	};*/

	//今日推荐
	var tjimg=getClass('tjimg-box')[0];
	var tjbox=getClass('tjimg-sbox',tjimg);
	// console.log(tjbox);
	var tjw=parseInt(getStyle(tjbox[0],'width'));
	var tjleft=getClass('tjbtn-left')[0];
	// console.log(tjleft);
	var tjright=getClass('tjbtn-right')[0];
	// console.log(tjright);
	var tjindex=0;
	var flag=true;
	tjleft.onclick=function(){
		tjimg.insertBefore(getLast(tjimg),getFirst(tjimg));
		tjimg.style.marginLeft=-tjw+'px';
		animate(tjimg,{marginLeft:0},function(){
			tjindex--;
			if(tjindex==-1){
				tjindex=tjbox.length-1;
			}
		});
		
	}
	tjright.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		animate(tjimg,{marginLeft:-tjw},function(){
			tjindex++;
			tjimg.appendChild(getFirst(tjimg));
			tjimg.style.marginLeft=0+'px';
			if(tjindex==tjbox.length){
				tjindex=0;
			}
			flag=true;
		});
		
		
		
	}



	//2F  轮播



	// var f2wheel=getClass('floor2-wheel')[0];
	/*var f2wbox=getClass('floor2-wh')[0];
	var f2boxa=getClass('floor2-conmi',f2wbox);
	var f2wb=getClass('floor1-btn',f2wheel)[0];
	var f2wbtn=f2wb.getElementsByTagName('li');
	var f2l=getClass('f2-leftbtn',f2wheel)[0];
	var f2r=getClass('f2-rightbtn',f2wheel)[0];*/
	// console.log(f2wbtn);
	// var f2whw=parseInt(getStyle(f2boxa[0],'width'));

	// var f2wheel=
	// console.log(f2wbox)



	
	var f2wb=getClass('floor1-btn');
	// console.log(f2wb)
	var rc=getClass('floor2-wheel');
	// console.log(rc.length);
	var f2=getClass('floor2-wh');
	// console.log(f2.length);
	var anniu,wbox,ww,f2,outb,f2l,f2r;
	for (var i = 0; i < rc.length; i++) {
		// console.log(f2wb[i]);
		//f2=getClass('floor2-wh',rc[i]);
		anniu=f2wb[i].getElementsByTagName('li');
		// console.log(anniu.length);
		// console.log(anniu[i]);
		wbox=getClass('floor2-conmi',rc[i]);
		f2l=getClass('f2-leftbtn',rc[i]);
		f2r=getClass('f2-rightbtn',rc[i]);
		ww=parseInt(getStyle(wbox[0],'width'));
		// console.log(ww)
		wwheel(anniu,wbox,ww,f2[i],rc[i],f2l[0],f2r[0]);
		// console.log(outb[i]);
	};
	// console.log(wbox.length);
	function wwheel(an,wb,wwh,ff,rg,f2l,f2r){
		// console.dir(rg);
		var whindex=0;
		var flag=true;
		// console.log(an.length);
		var w=setInterval(fweewl,1000);
		function fweewl(){
			// alert(1);
			if(!flag){
				return;
			}
			flag=false;
			animate(ff,{marginLeft:-wwh},function(){
				whindex++;
				ff.appendChild(getFirst(ff));
				ff.style.marginLeft=0+'px';
				if(whindex==wbox.length){
					whindex=0;
				}
				for (var i = 0; i < an.length; i++) {
					// console.log(i);
					// an[i].style.background='';
					an[i].className='';
				};

				an[whindex].className='floor1-btn-sy';
				// an[whindex].style.background='#b61b1f';
				flag=true;
			});
		}
		rg.onmouseover=function(){
			// alert(1);
			clearInterval(w);
			f2l.style.display='block';
			f2r.style.display='block';
		}
		rg.onmouseout=function(){
			w=setInterval(fweewl,1000);
			f2l.style.display='none';
			f2r.style.display='none';
		}
		for (var i = 0; i < an.length; i++) {
			an[i].index=i;
			an[i].onmouseover=function(){
				for (var i = 0; i < an.length; i++) {
					// an[i].style.background='';
					an[i].className='';
				};
				an[this.index].className='floor1-btn-sy';
				// an[this.index].style.background='#b61b1f';
				// console.log(this.index);
				animate(ff,{marginLeft:-wwh*this.index});
				whindex=this.index;
			}
		};
		f2r.onclick=function(){
			fweewl();
		}
		f2l.onclick=function(){
			if(!flag){
				return;
			}
			flag=false;
			ff.insertBefore(getLast(ff),getFirst(ff));
			ff.style.marginLeft=-wwh+'px';
			animate(ff,{marginLeft:0},function(){
				whindex--;
				if(whindex==-1){
					whindex=wbox.length-1;
				}
				for (var i = 0; i < an.length; i++) {
					// an[i].style.background='';
					// an[i].style.background='';
					an[i].className='';
				};
				// an[whindex].style.background='#b61b1f';
				an[whindex].className='floor1-btn-sy';
				// an[whindex].style.background='red'
				flag=true;
			})
		}
	}
	



	/*var f2wheel=getClass('floor2-wheel')[0];
	var f2wbox=getClass('floor2-wh')[0];
	var f2boxa=getClass('floor2-conmi',f2wbox);
	var f2wb=getClass('floor1-btn',f2wheel)[0];
	var f2wbtn=f2wb.getElementsByTagName('li');
	var f2l=getClass('f2-leftbtn',f2wheel)[0];
	var f2r=getClass('f2-rightbtn',f2wheel)[0];
	// console.log(f2wbtn);
	var f2whw=parseInt(getStyle(f2boxa[0],'width'));

	var whindex=0;
	var flag=true;
	var w=setInterval(f2wh,1000);
	function f2wh(){
		if(!flag){
			return;
		}
		flag=true;
		animate(f2wbox,{marginLeft:-f2whw},function(){
			whindex++;
			f2wbox.appendChild(getFirst(f2wbox));
			f2wbox.style.marginLeft=0+'px';
			if(whindex==f2boxa.length){
				whindex=0;
			}
			for (var i = 0; i < f2wbtn.length; i++) {
				f2wbtn[i].className='';
			};
			f2wbtn[whindex].className='floor1-btn-sy';
			flag=true;
		});
	}
	f2wheel.onmouseover=function(){
		clearInterval(w);
		f2l.style.display='block';
		f2r.style.display='block';
	}
	f2wheel.onmouseout=function(){
		w=setInterval(f2wh,1000);
		f2l.style.display='none';
		f2r.style.display='none';
	}
	for (var i = 0; i < f2wbtn.length; i++) {
		f2wbtn[i].index=i;
		f2wbtn[i].onmouseover=function(){
			for (var i = 0; i < f2wbtn.length; i++) {
				f2wbtn[i].className='';
			};
			f2wbtn[this.index].className='floor1-btn-sy';
			console.log(this.index);
			animate(f2wbox,{marginLeft:-f2whw*this.index});
			whindex=this.index;
		}
	};
	f2r.onclick=function(){
		f2wh();
	}
	f2l.onclick=function(){
		f2wbox.insertBefore(getLast(f2wbox),getFirst(f2wbox));
		f2wbox.style.marginLeft=-f2whw+'px';
		animate(f2wbox,{marginLeft:0},function(){
			whindex--;
			if(whindex==-1){
				whindex=f2boxa.length-1;
			}
			for (var i = 0; i < f2wbtn.length; i++) {
				f2wbtn[i].className='';
			};
			f2wbtn[whindex].className='floor1-btn-sy';
		})
	}*/


	// 图片小动画
	var day1;
	var imgAni=getClass('day-day');
	// console.log(day);
	for (var i = 0; i < imgAni.length; i++) {
		day1=getClass('day-day1',imgAni[i])[0];
		imgAnimt(day1);
	};
	function imgAnimt(day){
		day.onmouseover=function(){
			animate(day,{marginLeft:-10});
		}
		day.onmouseout=function(){
			animate(day,{marginLeft:0});
		}
	}
	




	/*var day1=getClass('day-day')[1];
	var day=getClass('day-conmis1img',day1)[0];
	// console.log(day);
	day.onmouseover=function(){
		animate(day,{marginLeft:-10});
	}
	day.onmouseout=function(){
		animate(day,{marginLeft:0});
	}*/




	/*var day=getClass('day-day')[0].getElementsByTagName('a')[0];
	console.log(day);
	day.onmouseover=function(){
		animate(day,{marginRight:40});
	}
	day.onmouseout=function(){
		animate(day,{marginRight:0});
	}*/


	//固定定位效果

	var rfix=getClass('rfix-one');
	// var =getClass('rfix-img1')[0];
	var rfixCon,rfiximg;
	for (var i = 0; i < rfix.length; i++) {
		rfiximg=getClass('rfix-img1',rfix[i])[0];
		rfixCon=getClass('rfix-cont',rfix[i])[0];
		mLeft(rfix[i],rfixCon,rfiximg);
	};

	function mLeft(rfix,rfixCon,rfiximg){
		rfix.onmouseover=function(){
			rfiximg.style.background='#C81623';
			rfixCon.style.background='#C81623';
			animate(rfixCon,{left:0},200);
		}
		rfix.onmouseout=function(){
			rfiximg.style.background='#7a6e6e';
			rfixCon.style.background='#7a6e6e';
			animate(rfixCon,{left:80},200);
		}
	}
	


	/*var rfix=getClass('rfix-one')[0];
	var rfixCon=getClass('rfix-cont',rfix)[0];
	rfix.onmouseover=function(){
		rfix.style.background='red';
		// rfix.style.background='red'
		animate(rfixCon,{left:-80},600);
	}
	rfix.onmouseout=function(){
		// rfix.style.background='#7a6e6e'
		animate(rfixCon,{left:0},600);
	}*/

	//评价动画

	var dayCon=getClass('day-conribox')[0];
	var dayConf=getClass('day-conrif1',dayCon);
	var dayConw=parseInt(getStyle(dayConf[0],'height'));
	var daymar=parseInt(getStyle(dayConf[0],'margin-bottom'));
	// console.log(daymar);
	var dayindex=0;
	setInterval(function(){
		dayCon.appendChild(getFirst(dayCon));
		dayCon.style.marginTop=-(dayConw+daymar)+'px';
		animate(dayCon,{marginTop:0},function(){
			dayindex++;
			if(dayindex==dayConf.length){
				dayindex=0;
			}
		})
	},2000)


	//左边楼层动画
	var rfix6=getClass('rfix-six')[0];
	var leftfix1=getClass('leftfix')[0];
	var leftfix=getClass('leftfix')[0].getElementsByTagName('li');
	// console.log(leftfix.length);
	var leftfixa=getClass('leftfix')[0].getElementsByTagName('a');
	// console.log(leftfixa);
	var leftfixcla=getClass('lefix-sty1')
	// console.log(leftfixcla);
	var leftfixcla1=getClass('lefix-sty');
	// console.log(leftfixcla1.length)
	/*for (var i = 0; i < leftfix.length; i++) {
		leftfix[i].index=i;
		leftfix[i].onmouseover=function(){
			leftfixcla[this.index].style.display='none';
			leftfixcla1[this.index].style.display='block';
			leftfixcla1[this.index].style.background='#c81623';
			leftfixcla1[this.index].style.color='#fff';
		}
	};
	for (var i = 0; i < leftfix.length; i++) {
		leftfix[i].index1=i;
		leftfix[i].onmouseout=function(){
			leftfixcla[this.index1].style.display='block';
			leftfixcla1[this.index1].style.display='none';
			// leftfixcla1[this.index1].style.background='#fff';
			// leftfixcla1[this.index1].style.color='#c81623';
		}
	};*/
	rfix6.onclick=function(){
		var st=document.body.scrollTop?document.body:document.documentElement;
		animate(st,{scrollTop:0})
	}
	var f1=getClass('f1');
	// console.log(f1.length);
	var f1arr=[];
	for (var i = 0; i < f1.length; i++) {
		f1arr.push(f1[i].offsetTop);
	};
	// console.log(f1arr);
	window.onscroll=function(){
		var st=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
		if(st>1300){
			leftfix1.style.display='block';
		}
		if(st<1300){
			leftfix1.style.display='none';
		}
		for (var i = 0; i < f1arr.length; i++) {
			if(st+90>f1arr[i]){
				for (var j = 0; j < leftfix.length; j++) {
					leftfixcla[j].style.display='block';
					leftfixcla1[j].style.display='none';
					// leftfixcla[j].style.background='';
				};
				leftfixcla[i].style.display='none';
				leftfixcla1[i].style.display='block';
				leftfixcla1[i].style.background='#fff';
				leftfixcla1[i].style.color='#c81623';
			}
			
		};
		
		
	}
	for (var i = 0; i < leftfix.length; i++) {
		leftfix[i].index=i;
		leftfix[i].onclick=function(){
			var st=document.body.scrollTop?document.body:document.documentElement;
			animate(st,{scrollTop:f1arr[this.index]});
		}
	};



	//  横条消失
	var hengti=getClass('hengtiao')[0];
	var ht=getClass('htdiv')[0];
	ht.onclick=function(){
		hengti.style.display='none';
	}

	//下拉框
	var topRightlis=$('.li-hover');
	for (var i = 0; i < topRightlis.length; i++) {
		hover(topRightlis[i],function(){
			var is=$('i',this)[0];
			is.innerHTML='∧';
		},function(){
			var is=$('i',this)[0];
			is.innerHTML='∨';
		})
	};
}
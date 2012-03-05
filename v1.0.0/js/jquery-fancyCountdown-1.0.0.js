/**
 * jQuery "Fancy Countdown" Plugin
 * 
 * @name jquery-fancyCountdown-1.0.0.js
 * @author Sarpdoruk TAHMAZ - http://www.sarpdoruktahmaz.com
 * @version 1.0.0
 * @date April 13, 2011
 * @category jQuery Plugin Widget
 * @copyright (c) 2011 Sarpdoruk TAHMAZ (sarpdoruktahmaz.com)
 * @license GNU - GENERAL PUBLIC LICENSE - https://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt
 * @info Visit http://www.sarpdoruktahmaz.com/projects/fancy-countdown for more info
 * @Special thanks to Onat ÇELMEN http://www.onatcelmen.com for the plugin idea
**/
(function($){
	$.fn.fancyCountdown = function(custom) {
		
		/********** This object's id **********/
		var thisID = $(this).attr("id");
		
		/********** Default Settings **********/
		var settings = {
			'year':2012, //Target year
			'month':12, //Target Month
			'day':12, //Target Day
			'hour':12, //Target Hour
			'minute':12, //Target Minute
			'second':12, //Target Second
			'timeReachedMessage':'Hoorraay!!', //Message after the time has reached
			'timeStamps':['Days', 'Hours', 'Minutes', 'Seconds'] //Timestamps in your own language
		};
		
		/********** Extend defaults with the custom options **********/
		if(custom) { $.extend(settings, custom); }
		

		
		/********** Create Tables **********/
		var tables = "<table id='fancy-countdown'><tr><td><span id='days'><table id='d1'><tr><td id='d10'></td><td id='d11'></td><td id='d12'></td><td id='d13'></td></tr><tr><td id='d14'></td><td id='d15'></td><td id='d16'></td><td id='d17'></td></tr><tr><td id='d18'></td><td id='d19'></td><td id='d110'></td><td id='d111'></td></tr><tr><td id='d112'></td><td id='d113'></td><td id='d114'></td><td id='d115'></td></tr><tr><td id='d116'></td><td id='d117'></td><td id='d118'></td><td id='d119'></td></tr><tr> <td id='d120'></td><td id='d121'></td><td id='d122'></td><td id='d123'></td></tr><tr><td id='d124'></td><td id='d125'></td><td id='d126'></td><td id='d127'></td></tr></table><table id='d2'><tr><td id='d20'></td><td id='d21'></td><td id='d22'></td><td id='d23'></td></tr><tr><td id='d24'></td><td id='d25'></td><td id='d26'></td><td id='d27'></td></tr><tr><td id='d28'></td><td id='d29'></td><td id='d210'></td><td id='d211'></td></tr><tr><td id='d212'></td><td id='d213'></td><td id='d214'></td><td id='d215'></td></tr><tr><td id='d216'></td><td id='d217'></td><td id='d218'></td><td id='d219'></td></tr><tr> <td id='d220'></td><td id='d221'></td><td id='d222'></td><td id='d223'></td></tr><tr><td id='d224'></td><td id='d225'></td><td id='d226'></td><td id='d227'></td></tr></table><table id='d3'><tr><td id='d30'></td><td id='d31'></td><td id='d32'></td><td id='d33'></td></tr><tr><td id='d34'></td><td id='d35'></td><td id='d36'></td><td id='d37'></td></tr><tr><td id='d38'></td><td id='d39'></td><td id='d310'></td><td id='d311'></td></tr><tr><td id='d312'></td><td id='d313'></td><td id='d314'></td><td id='d315'></td></tr><tr><td id='d316'></td><td id='d317'></td><td id='d318'></td><td id='d319'></td></tr><tr> <td id='d320'></td><td id='d321'></td><td id='d322'></td><td id='d323'></td></tr><tr><td id='d324'></td><td id='d325'></td><td id='d326'></td><td id='d327'></td></tr></table></span></td><td><span id='hours'><table id='h1'><tr><td id='h10'></td><td id='h11'></td><td id='h12'></td><td id='h13'></td></tr><tr><td id='h14'></td><td id='h15'></td><td id='h16'></td><td id='h17'></td></tr><tr><td id='h18'></td><td id='h19'></td><td id='h110'></td><td id='h111'></td></tr><tr><td id='h112'></td><td id='h113'></td><td id='h114'></td><td id='h115'></td></tr><tr><td id='h116'></td><td id='h117'></td><td id='h118'></td><td id='h119'></td></tr><tr> <td id='h120'></td><td id='h121'></td><td id='h122'></td><td id='h123'></td></tr><tr><td id='h124'></td><td id='h125'></td><td id='h126'></td><td id='h127'></td></tr></table><table id='h2'><tr><td id='h20'></td><td id='h21'></td><td id='h22'></td><td id='h23'></td></tr><tr><td id='h24'></td><td id='h25'></td><td id='h26'></td><td id='h27'></td></tr><tr><td id='h28'></td><td id='h29'></td><td id='h210'></td><td id='h211'></td></tr><tr><td id='h212'></td><td id='h213'></td><td id='h214'></td><td id='h215'></td></tr><tr><td id='h216'></td><td id='h217'></td><td id='h218'></td><td id='h219'></td></tr><tr> <td id='h220'></td><td id='h221'></td><td id='h222'></td><td id='h223'></td></tr><tr><td id='h224'></td><td id='h225'></td><td id='h226'></td><td id='h227'></td></tr></table></span></td><td><span id='minutes'><table id='m1'><tr><td id='m10'></td><td id='m11'></td><td id='m12'></td><td id='m13'></td></tr><tr><td id='m14'></td><td id='m15'></td><td id='m16'></td><td id='m17'></td></tr><tr><td id='m18'></td><td id='m19'></td><td id='m110'></td><td id='m111'></td></tr><tr><td id='m112'></td><td id='m113'></td><td id='m114'></td><td id='m115'></td></tr><tr><td id='m116'></td><td id='m117'></td><td id='m118'></td><td id='m119'></td></tr><tr> <td id='m120'></td><td id='m121'></td><td id='m122'></td><td id='m123'></td></tr><tr><td id='m124'></td><td id='m125'></td><td id='m126'></td><td id='m127'></td></tr></table><table id='m2'><tr><td id='m20'></td><td id='m21'></td><td id='m22'></td><td id='m23'></td></tr><tr><td id='m24'></td><td id='m25'></td><td id='m26'></td><td id='m27'></td></tr><tr><td id='m28'></td><td id='m29'></td><td id='m210'></td><td id='m211'></td></tr><tr><td id='m212'></td><td id='m213'></td><td id='m214'></td><td id='m215'></td></tr><tr><td id='m216'></td><td id='m217'></td><td id='m218'></td><td id='m219'></td></tr><tr> <td id='m220'></td><td id='m221'></td><td id='m222'></td><td id='m223'></td></tr><tr><td id='m224'></td><td id='m225'></td><td id='m226'></td><td id='m227'></td></tr></table></span></td><td><span id='seconds'><table id='s1'><tr><td id='s10'></td><td id='s11'></td><td id='s12'></td><td id='s13'></td></tr><tr><td id='s14'></td><td id='s15'></td><td id='s16'></td><td id='s17'></td></tr><tr><td id='s18'></td><td id='s19'></td><td id='s110'></td><td id='s111'></td></tr><tr><td id='s112'></td><td id='s113'></td><td id='s114'></td><td id='s115'></td></tr><tr><td id='s116'></td><td id='s117'></td><td id='s118'></td><td id='s119'></td></tr><tr> <td id='s120'></td><td id='s121'></td><td id='s122'></td><td id='s123'></td></tr><tr><td id='s124'></td><td id='s125'></td><td id='s126'></td><td id='s127'></td></tr></table><table id='s2'><tr><td id='s20'></td><td id='s21'></td><td id='s22'></td><td id='s23'></td></tr><tr><td id='s24'></td><td id='s25'></td><td id='s26'></td><td id='s27'></td></tr><tr><td id='s28'></td><td id='s29'></td><td id='s210'></td><td id='s211'></td></tr><tr><td id='s212'></td><td id='s213'></td><td id='s214'></td><td id='s215'></td></tr><tr><td id='s216'></td><td id='s217'></td><td id='s218'></td><td id='s219'></td></tr><tr> <td id='s220'></td><td id='s221'></td><td id='s222'></td><td id='s223'></td></tr><tr><td id='s224'></td><td id='s225'></td><td id='s226'></td><td id='s227'></td></tr></table></span></td></tr><tr><td>"+settings['timeStamps'][0]+"</td><td>"+settings['timeStamps'][1]+"</td><td>"+settings['timeStamps'][2]+"</td><td>"+settings['timeStamps'][3]+"</td></tr></table>";	
		
		/********** Append tables to $(this) object **********/
		$(this).append(tables);
		
		/********** Style Tables **********/
		$(this).find("table").css({"display":"inline-table"}).attr({"cellspacing":"3px"});
		$("#d-tx").css({"left":$("#days").position().left+140+"px", "top":$("#days").position().top+115+"px"});
		$("#h-tx").css({"left":$("#hours").position().left+280+"px", "top":$("#hours").position().top+115+"px"});
		$("#m-tx").css({"left":$("#minutes").position().left+420+"px", "top":$("#minutes").position().top+115+"px"});
		$("#s-tx").css({"left":$("#seconds").position().left+560+"px", "top":$("#seconds").position().top+115+"px"});
		
		/********** Add gray balls to each cell **********/
		$("#d1 td,#d2 td,#d3 td,#h1 td,#h2 td,#m1 td,#m2 td,#s1 td,#s2 td").append("<img src='images/gray-ball.png' />");
		
		/********** Color Array **********/
		var color = {
			'blank':'gray',		
			'seconds':'green',
			'minutes':'lightblue',
			'hours':'red',
			'days':'orange'
		};
		
		/********** Date objects creation and comparison between two dates **********/
		var now = new Date();
		var nowMiliseconds = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
		var targetDateMiliseconds = Date.UTC(settings['year'], settings['month'] - 1, settings['day'], settings['hour'], settings['minute'], settings['second']);
		var differenceMiliseconds = targetDateMiliseconds - nowMiliseconds;
		var differenceSeconds = differenceMiliseconds / 1000;
		
		/********** Variable declarations **********/
		var countdownTimer;
		var days;
		var hours;
		var minutes;
		var seconds;
		
		
		/********** Check if target date has passed or not **********/
		if(differenceMiliseconds < 0) {				
			$(this).html("<span id='timeReached'>"+settings['timeReachedMessage']+"</span>");
		} else {
			countdownTimer = window.setInterval(updateTime, 1000);	
		}
		
		/********** INITIALIZE FOR THE FIRST TIME **********/
		/********** Time Calculation **********/
		days = Math.floor(differenceSeconds / 86400);
		differenceSeconds -= (days * 86400);
		hours = Math.floor(differenceSeconds / 3600);			
		differenceSeconds -= (hours * 3600);
		minutes = Math.floor(differenceSeconds / 60);
		differenceSeconds -= (minutes * 60);
		seconds = (differenceSeconds % 60);
		
		/********** SECONDS **********/
		if(parseInt(seconds) < 10) {
			seconds = "0"+seconds;	
		}
		
		seconds = seconds.toString();
		
		var s1 = seconds.substr(0,1);
		drawNumber("s1", s1, "seconds");
					
		var s2 = seconds.substr(1,1);
		drawNumber("s2", s2, "seconds");
		
		/********** MINUTES **********/
		if(parseInt(minutes) < 10) {
			minutes = "0"+minutes;	
		}
		
		minutes = minutes.toString();
		
		var m1 = minutes.substr(0,1);
		drawNumber("m1", m1, "minutes");
					
		var m2 = minutes.substr(1,1);
		drawNumber("m2", m2, "minutes");
		
		/********** HOURS **********/
		if(parseInt(hours) < 10) {
			hours = "0"+hours;	
		}
		
		hours = hours.toString();
		
		var h1 = hours.substr(0,1);
		drawNumber("h1", h1, "hours");
					
		var h2 = hours.substr(1,1);
		drawNumber("h2", h2, "hours");
		
		/********** DAYS **********/
		if(parseInt(days) < 100 && parseInt(days) > 10) {
			days = "0"+days;	
		} else if(parseInt(days) < 10) {
			days = "00"+days;	
		}
		
		days = days.toString();
		
		var d1 = days.substr(0,1);
		drawNumber("d1", d1, "days");
					
		var d2 = days.substr(1,1);
		drawNumber("d2", d2, "days");
		
		var d3 = days.substr(2,1);
		drawNumber("d3", d3, "days");
		/********** INITIALIZATION OVER **********/
		
		
		/********** Update time every second **********/
		function updateTime() {
			
			/********** Date objects creation and comparison between two dates **********/
			now = new Date();
			nowMiliseconds = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
			differenceMiliseconds = targetDateMiliseconds - nowMiliseconds;
			differenceSeconds = differenceMiliseconds / 1000;
			
			/********** Check if target date has reached **********/
			if(differenceMiliseconds < 0) {				
				$("#"+thisID).html("<span id='timeReached'>"+settings['timeReachedMessage']+"</span>");
				window.clearInterval(countdownTimer);
				return false;
			}
						
			/********** Time Calculation **********/
			days = Math.floor(differenceSeconds / 86400);
			differenceSeconds -= (days * 86400);
			hours = Math.floor(differenceSeconds / 3600);			
			differenceSeconds -= (hours * 3600);
			minutes = Math.floor(differenceSeconds / 60);
			differenceSeconds -= (minutes * 60);
			seconds = (differenceSeconds % 60);
			
			/********** SECONDS **********/
			if(parseInt(seconds) < 10) {
				seconds = "0"+seconds;	
			}
			
			seconds = seconds.toString();
			
			var s1 = seconds.substr(0,1);
			drawNumber("s1", s1, "seconds");
						
			var s2 = seconds.substr(1,1);
			drawNumber("s2", s2, "seconds");
			
			/********** Decrease minutes when seconds reach 59 **********/
			if(s1 == "5" && s2 == "9") {
				/********** MINUTES **********/
				if(parseInt(minutes) < 10) {
					minutes = "0"+minutes;	
				}
				
				minutes = minutes.toString();
				
				var m1 = minutes.substr(0,1);
				drawNumber("m1", m1, "minutes");
							
				var m2 = minutes.substr(1,1);
				drawNumber("m2", m2, "minutes");
				
				/********** Decrease hours when minutes reach 59 **********/
				if(m1 == "5" && m2 == "9") {
					/********** HOURS **********/
					if(parseInt(hours) < 10) {
						hours = "0"+hours;	
					}
					
					hours = hours.toString();
					
					var h1 = hours.substr(0,1);
					drawNumber("h1", h1, "hours");
								
					var h2 = hours.substr(1,1);
					drawNumber("h2", h2, "hours");
					
					/********** Decrease days when hours reach 23 **********/
					if(h1 == "2" && h2 == "3") {
						/********** DAYS **********/
						if(parseInt(days) < 100 && parseInt(days) > 10) {
							days = "0"+days;	
						} else if(parseInt(days) < 10) {
							days = "00"+days;	
						}
						
						days = days.toString();
						
						var d1 = days.substr(0,1);
						drawNumber("d1", d1, "days");
									
						var d2 = days.substr(1,1);
						drawNumber("d2", d2, "days");
		
						var d3 = days.substr(2,1);
						drawNumber("d3", d3, "days");
						
					}
					
				}
				
			}
						
		}
		
		/********** Draws numbers to the cells **********/
		function drawNumber(objID, number, timeStamp) {
			if(number == "0") {
				zero($("#"+objID), color[timeStamp]);
			} else if(number == "1") {
				one($("#"+objID), color[timeStamp]);
			} else if(number == "2") {
				two($("#"+objID), color[timeStamp]);
			} else if(number == "3") {
				three($("#"+objID), color[timeStamp]);
			} else if(number == "4") {
				four($("#"+objID), color[timeStamp]);
			} else if(number == "5") {
				five($("#"+objID), color[timeStamp]);
			} else if(number == "6") {
				six($("#"+objID), color[timeStamp]);
			} else if(number == "7") {
				seven($("#"+objID), color[timeStamp]);
			} else if(number == "8") {
				eight($("#"+objID), color[timeStamp]);
			} else if(number == "9") {
				nine($("#"+objID), color[timeStamp]);
			}
		}
		
		/********** Makes all cells gray **********/
		function allGray(obj) {
			var id = obj.attr("id");
			var i;	
			var allGray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
			for(i = 0; i < allGray.length; i++) {
				$("#"+id+allGray[i]).find("img").attr("src","images/"+color['blank']+"-ball.png");	
			}
		}
		
		/********** Draw One **********/
		function one(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var one = [3,7,11,15,19,23,27];
			
			for(i = 0; i <= one.length; i++) {
				$("#"+id+one[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Two **********/
		function two(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var two = [0,1,2,3,7,11,12,13,14,15,16,20,24,25,26,27];
			for(i = 0; i <= two.length; i++) {
				$("#"+id+two[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Three **********/
		function three(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var three = [0,1,2,3,7,11,12,13,14,15,19,23,24,25,26,27];
			for(i = 0; i <= three.length; i++) {
				$("#"+id+three[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Four **********/
		function four(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var four = [0,3,4,7,8,11,12,13,14,15,19,23,27];
			for(i = 0; i <= four.length; i++) {
				$("#"+id+four[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Five **********/
		function five(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var five = [0,1,2,3,4,8,12,13,14,15,19,23,24,25,26,27];
			for(i = 0; i <= five.length; i++) {
				$("#"+id+five[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Six **********/
		function six(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var six = [0,1,2,3,4,8,12,13,14,15,16,19,20,23,24,25,26,27];
			for(i = 0; i <= six.length; i++) {
				$("#"+id+six[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Seven **********/
		function seven(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var seven = [0,1,2,3,7,11,15,19,23,27];
			for(i = 0; i <= seven.length; i++) {
				$("#"+id+seven[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Eight **********/
		function eight(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var eight = [0,1,2,3,4,7,8,11,12,13,14,15,16,19,20,23,24,25,26,27];
			for(i = 0; i <= eight.length; i++) {
				$("#"+id+eight[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Nine **********/
		function nine(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var nine = [0,1,2,3,4,7,8,11,12,13,14,15,19,23,24,25,26,27];
			for(i = 0; i <= nine.length; i++) {
				$("#"+id+nine[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
		
		/********** Draw Zero **********/
		function zero(obj, color) {
			allGray(obj);
			var id = obj.attr("id");
			var i;
			var zero = [0,1,2,3,4,7,8,11,12,15,16,19,20,23,24,25,26,27];
			for(i = 0; i <= zero.length; i++) {
				$("#"+id+zero[i]).find("img").attr("src","images/"+color+"-ball.png");	
			}
		}
	
	};
})(jQuery);
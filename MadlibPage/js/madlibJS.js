// JavaScript Document

function write(){
	console.log("it just works!");
	
	//fetching variables//
	var res1 = document.getElementById('res1').value;
	var res2 = document.getElementById('res2').value;
	var res3 = document.getElementById('res3').value;
	var res4 = document.getElementById('res4').value;
	var res5 = document.getElementById('res5').value;
	var res6 = document.getElementById('res6').value;
	var res7 = document.getElementById('res7').value;
	var res8 = document.getElementById('res8').value;
	var res9 = document.getElementById('res9').value;
	var res10 = document.getElementById('res10').value;
	var res11 = document.getElementById('res11').value;
	var res12 = document.getElementById('res12').value;
	var res13 = document.getElementById('res13').value;
	var res14 = document.querySelector('input[name="res14"]:checked').value;
	
	//changing css//
	if (res14=="hot"){
		document.getElementById('madlib').style.backgroundImage = "url('images/hotBG.jpg')";
		document.getElementById('madlib').style.transitionDuration += "0.3s";
		//https://pixabay.com/photos/antelope-canyon-sandstone-canyon-1128815///
		document.getElementById('madlib').style.backgroundPosition += "center";
		document.getElementById('madlib').style.backgroundSize += "cover";document.getElementById('madlib').style.borderRadius += "1vh";
		
		document.getElementById('Body').style.backgroundImage = "linear-gradient(white 35%, #AB4012)";
	}
	
	else if (res14=="cold"){
		document.getElementById('madlib').style.backgroundImage = "url('images/coldBG.jpg')";
		//https://pixabay.com/photos/marble-cave-marble-cave-blue-393356///
		document.getElementById('madlib').style.transitionDuration += "0.3s";
		document.getElementById('madlib').style.backgroundPosition += "center";
		document.getElementById('madlib').style.backgroundSize += "cover";document.getElementById('madlib').style.borderRadius += "1vh";
		
		document.getElementById('Body').style.backgroundImage = "linear-gradient(white 35%, #139EAB)";
	}
	
	else if (res14=="lukewarm"){
		document.getElementById('madlib').style.backgroundImage = "url('images/lukewarmBG.jpg')";
		//https://pixabay.com/photos/cave-tunnel-light-stone-passage-5438620///
		document.getElementById('madlib').style.transitionDuration += "0.3s";
		document.getElementById('madlib').style.backgroundPosition += "center";
		document.getElementById('madlib').style.backgroundSize += "cover";document.getElementById('madlib').style.borderRadius += "1vh";
		
		document.getElementById('Body').style.backgroundImage = "linear-gradient(white 35%, #413620)";
	}
	
	//the madlib//
	document.getElementById('madlib').innerHTML = "<p>testing time fuckers! " +res1+ " tastes great</p>"
	
	//p1//
	document.getElementById('madlib').innerHTML = "<p>Venturing into the den of a " +res1+ " is no easy feat, especially not for a group of " +res2+ " with the collective adventuring experience of a " +res3+ " " +res4+ ", but someone has to get the job done, and the adventuring guild ran out of experienced folks when the " +res1+ " chucked the last ones into a ravine… we think. That part’s not important, what is important is these brave " +res2+ "' fighting spirit and tenacity!</p>"
	
	//p2//
	document.getElementById('madlib').innerHTML += "<p>The " +res1+ "'s den is one of the most treacherous places one could venture, filled with fiendish " +res5+ ", and rumored to be so " +res14+ " that even the devil itself refuses to tread on the " +res6+ "-covered tunnels that connect the chambers of the den together, eventually leading to the " +res1+ "'s lair, where no soul has escaped from. Not even " +res7+ " could brave the den, succumbing to the first pitfall trap they came across which was exactly " +res8+ " feet from the entrance. Some would call this pathetic, yet it just goes to show how even the most brilliant of minds are susceptible to the den’s overwhelming fatality rate of " +res9+ ".</p>"
	
	//p3//
	document.getElementById('madlib').innerHTML += "<p>Our intrepid " +res2+ " first steps into the den’s twisting caverns were met with the low, distant growl of the " +res1+ ", whose overbearing sense of " +res10+ " permeated each wall, alerting the beast to their presence. The sickening smell of " +res6+ " made the winding tunnels hard to bear, as the deeper they went, the den’s " +res14+ " temperature began to fatigue the weakest of the " +res2+ ". To their luck, a luxury set of " +res5+ " in the first cavern offered the tired " +res2+ " some rest... until they sprang to life and ate them whole! In a mad dash to save what was left of the party, the " +res2+ " fled further down the tunnels, the vicious cries of the feral " +res5+ " fading as they slipped and tripped on loose piles of " +res6+ "-covered covered stones. It soon became clear as to why the den had a " +res9+ " fatality rate, and upon finding the half-eaten corpse of " +res7+ " deeper down the cavern, the " +res2+ " whose very souls were fear-stricken broke off from the party, clambering back to the surface. The few remaining " +res2+ " knew their purpose in venturing here and continued onward despite the looming threat.</p>"
	
	//p4//
	document.getElementById('madlib').innerHTML += "<p>Finally, at the deepest point in the tunnels, the large cavern belonging to the fabled " +res1+ " was revealed, and with a mighty roar, the beast charged the " +res2+ ". The battle was one of legend, to be immortalized by college drop-out " +res11+ " for at least the next " +res8+ " years. Blow after blow struck the brave " +res2+ ", and they retaliated with attacks unique to their profession, ones that the " +res1+" was not prepared for after years of facing swords and sorcery. Finally, the bravest of the " +res2+ ", " +res12+ ", unleashed their mighty " +res13+ " attack, felling the beast once and for all. Though many perished in the fight, " +res12+ " led their tired comrades back up the tunnels, discreetly avoiding the enraged " +res5+ ", returning to the surface. Sharing their story with the world, the " +res2+ " were soon dubbed heroes of the realm, having proved themselves to not be as " +res3+ " " +res4+ "s as many once thought them to be.</p>"
}

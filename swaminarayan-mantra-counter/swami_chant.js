
		document.getElementById("mic_image").addEventListener("click", function() {


			curr_src = document.getElementById("mic_image").src;
		  	
		  	if (curr_src.indexOf("static_mic.gif") != -1){
		  		//Haribol started

		  		if (!('webkitSpeechRecognition' in window ) ) {
		  		  upgrade();
		  		  return;
		  		} else {
		  		  
		  		  document.getElementById("mic_image").src = "mic.gif";
		  		  

		  		  recognition.start();
		  		  recognition.onstart = function() {
		  		   console.log("I started");
		  		  };

		  		  recognition.onerror = function(event) {
		  		    		  };

		  		  recognition.onend = function() {
		  		  	if(manual_stop == false){
		  		    	recognition.start();
		  		  	}
		  		  	else{
		  		  		manual_stop = false;
		  		  	}
		  		  };

		  		  recognition.onresult = function(event) {
		  		    var interim_transcript = '';
		  		    // console.log(event.results);

		  		    for (var i = event.resultIndex; i < event.results.length; ++i) {
		  		      if (event.results[i].isFinal) {
		  		        final_transcript += event.results[i][0].transcript;
		  		        
		  		        var swami_count = 0;
		  		        var narayan_count = 0;
		  		        

		  		        for(var h=0;h<swami_synonyms_regex.length;h++){
		  		        	swami_count += (final_transcript.toLowerCase().match(swami_synonyms_regex[h]) || []).length;
		  		        }
		  		        for(var k=0;k<narayan_synonyms_regex.length;k++){
		  		        	narayan_count += (final_transcript.toLowerCase().match(narayan_synonyms_regex[k]) || []).length;
		  		        }
		  		        
		  		        // krishna_count = (final_transcript.toLowerCase().match(/krishna/g) || []).length;
		  		        	
		  		        // rama_count = (final_transcript.toLowerCase().match(/rama/g) || []).length;
		  		        	
		  		        console.log(final_transcript)
		  		        // console.log(hare_count,krishna_count,rama_count)
		  		        // document.getElementById("final_transcript").innerHTML =final_transcript;
		  		        // document.getElementById("counters").innerHTML =String(hare_count)+","+String(krishna_count)+","+String(rama_count);
			  		    if(swami_count >= 1 && narayan_count >= 1 ){

			  		    	// console.log(interim_transcript,ct)
			  		    	ct += 1;
			  		    	document.getElementById("counts").innerHTML ="Counts : " +String(ct);
			  		    	document.getElementById("rounds").innerHTML = "Rounds : "+String(parseInt(ct/108));
			  		    	final_transcript = "";
			  		    	swami_count = 0;
			  		    	narayan_count = 0;
			  		    	
			  		    }
		  		      } else {
		  		        interim_transcript += event.results[i][0].transcript;
		  		      }
		  		    }

		  		    
		  		    
		  		    
		  		  };
		  		}

		  	}
		  	else{
		  		document.getElementById("mic_image").src = "static_mic.gif";
		  		manual_stop = true;
		  		recognition.stop();	
		  	}

		});

		var create_email = false;
		var final_transcript = '';
		var recognizing = false;
		var ignore_onend;
		var start_timestamp;
		var ct = 0;
		var swami_synonyms = ["swami","swamy","swaamee"];
		var narayan_synonyms = ["narayan","narayana","naaraayan","naarayaana"];
		
		var swami_synonyms_regex = [];
		var narayan_synonyms_regex = [];
		
		var manual_stop = false;

		for(var h=0;h<swami_synonyms.length;h++){
			var swami_regex = new RegExp(swami_synonyms[h],"g");
			swami_synonyms.push(swami_regex);
		}
		for(var k=0;k<narayan_synonyms.length;k++){
			var narayan_regex = new RegExp(narayan_synonyms[k],"g");
			narayan_synonyms.push(narayan_regex);
		}
		

		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		var grammar = '#JSGF V1.0; grammar colors; public <color> = hare | krishna | rama ;'
		
		var speechRecognitionList = new webkitSpeechGrammarList();
		speechRecognitionList.addFromString(grammar, 1);
		recognition.grammars = speechRecognitionList;

		function upgrade() {
		  alert("You need to update your browser ! . Sorry :(");
		}

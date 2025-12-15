// Get HTML head element 
        var head = document.getElementsByTagName('head')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      // link to the css file for summon

        link.href = 'https://rcalibrary.github.io/summon/summon.css';  
  
        // Append link element to HTML head 
        document.head.appendChild(link);

  $('body').append('<style>.languageMenuButton { display: none !important; }</style>')

// remove top links from displaying when user is on campus

 $('body').append('<style>.list-inline { display: none !important; }</style>')

// remove Feedback from list of options

//$('body').append('<style>.list-unstyled ul > li:first-child{ display: none;}</style>')

//remove quick look button

//$('body').append('<style>.quick-look-button{ display: none !important; }</style>')


/* code to run the following function only when the rta results are back*/
/*commented out as of 15/12/25 because it caused the RTA and Summon to become unresponsive. 

$(document).ready(function() {
    const domObserver = new MutationObserver((mutationList) => {
    // document.body has changed! Do something.    
    var selection = document.querySelector("div.documentSummary") !== null;
    if(selection) {
     AppendToHoldings()
    }
	    
    });

   domObserver.observe(document.body, { childList: true, subtree: true });
   	

//let rootScope = angular.element('html').scope().$root
//  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 3000))
});

*/

/*function to append text to records where the RTA Location Code requires users to do something*/

/*commented out as of 15/12/25 because it caused the RTA and Summon to become unresponsive.
The Summon team suggested edits to the code (see support ticket) but didn't fix the duplication of appended text
Investigate further at a future date

 function AppendToHoldings() {

         //console.log("Enters Append");
	 //console.log($('div.availabilityRta').length);
	 //console.log($('div.availabilityRta'));
         //check div.availabilityInfo exists before proceeding to check if elements need adding
	 var checkExist = setInterval(function() {
         if ($('div.availabilityRta').length) {
            //console.log("Exists!");
            clearInterval(checkExist);
         }
         else {
            console.log("not present yet");
         }
         }, 100); // check every 100ms
		 
	  console.log("cleared");	 
	 
          $('div.availabilityRta').each(function () {
          //console.log($(this));		  
          //console.log($(this).querySelector('div.ng-scope a.summonBtn').getAttribute('title')); 		            
	  //console.log($(this).find('div.ng-scope a.summonBtn').attr('title'));	  
		  
		  var bibid = $(this).closest($('div.documentSummary')).attr('id').replace(/FETCH-rca_catalog_u/g,'').replace(/.$/,'');	  	  	  	  
		  var validSPLocs=["CRL","SPECCOLL","ARC","ARTISTBOOK","OFFSITE"];
		  var validEQLocs=["PER_NONC","PER_RES","THESES","STACK","STORE","JR","CATALOGING","IP","BIN","BOUT","QR","PAMPHLET","FLTV"];
          //var LocArr = $(this).find('div.ng-scope .summonBtn').attr('title').split(','); 
          //console.log($(this).find('div.ng-scope .summonBtn'));		  
	  var LocArr = $(this).find('div.ng-scope .summonBtn').attr('title').split(',');
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   console.log(Loc);
			if(validSPLocs.indexOf(Loc) !== -1) {
		// add link to special collections email
				if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#specialcol').length) {
		     // skip as link already exists
				}
				else {	
					$( $(this).find('div.ng-scope') ).append( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div></br>" );
				} 
			}
			if(validEQLocs.indexOf(Loc) !== -1) {
		// add link to ask at library desk
				if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#enqdesk').length) {
		     // skip as link already exists
				}
				else {
				   $( $(this).find('div.ng-scope') ).append( "<div id='enqdesk'><em>Ask at Library Desk</em></br></div>" );        
			   } 
			}
            else if (Loc == 'PER_CURR') {
		// add link to point to journals room
						if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#specialcol').length) {
		     // skip as link already exists
				}
				else {
				   $( $(this).find('div.ng-scope') ).append( "<div id='specialcol'><em>Latest Issue in Journals Room</em></br></div>" );
	    } 
			}
	    else if (Loc == 'STORECW') {
		// add link for store content warning
						if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#specialcol').length) {
		     // skip as link already exists
				}
				else {
				   $( $(this).find('div.ng-scope') ).append( "<div id='specialcol'><em>Content warning: this item contains harmful and discriminatory language/imagery<br>In storage: place reservation/ask at Library Desk</em></br></div>" );
	    } 
			}	   			  
   });
 }

 commented out function to append text to records where the RTA Location Code requires users to do something. See above */

/* Adding additional Custom Links to Summon.*/

angular.module('summonApp')
.run(['configService', function (config) {
    config.data.links.custom1 = {
        href: "https://rca.libguides.com/az.php",
        label: "Online Resources A-Z"
     }
    config.data.links.custom2 = {
        href: "http://qh7vn5wm4q.search.serialssolutions.com/",
        label: "E-Journals A-Z"
     }
     config.data.links.custom3 = {
         href: "https://researchonline.rca.ac.uk/",
         label: "RCA Research Online"
     }
     config.data.links.custom4 = {
         href: "https://moodle.rca.ac.uk/course/view.php?id=9",
         label: "Library Moodle"
     }
     config.data.links.custom5 = {
         href: "https://rca.libguides.com/suggestions",
         label: "Suggest a Book"
     }
      config.data.links.custom6 = {
         href: "https://rca.libguides.com/suggestions/ill",
         label: "Inter-library Loans"
     }
       config.data.links.custom7 = {
         href: "https://library.rca.ac.uk/client/en_GB/2015/search/patronlogin/http:$002f$002flibrary.rca.ac.uk$002fclient$002fen_GB$002fsummon$002fsearch$002faccount$002f1$003f",
         label: "My Account"
     }        
        config.data.links.custom8 = {
         href: "https://rca.libguides.com/alumniaccess",
         label: "External Visitors"
     }                
 }]);
